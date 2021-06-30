const rMap = require('./serial-test-data-little-peak').data;
let baseVal = require('./serial-test-data-little-peak').baseVal;
const peakMaxWaitSeconds = 60 * 60 * 2;
const macroAmplitudeRate = 0;

baseVal = baseVal ? baseVal : 0;
const STATE_RISE = 'RISE';
const STATE_FALL = 'FALL';
const MINED = 99;
const MAXED = 66;
const NONE = 22;

let keys = Object.keys(rMap);

keys = keys.reverse();
const firstKey = keys[0];

function listMinMax(micro, filter = null) {
    let ans = {
        min: [],
        max: [],
        all: []
    };
    for (let i = 0; i < keys.length; i++) {
        let mmr = findMinOrMax(i, micro);
        let info = genMinMax(i)
        if (mmr == MINED) {
            ans.min.push(info);
            ans.all.push(info);
        } else if (mmr == MAXED) {
            ans.max.push(info);
            ans.all.push(info);
        }
    }
    if (filter) ans = filter(ans);
    return ans;
}

function getNearInfo(list) {
    let nt = Number.MAX_SAFE_INTEGER;
    let ans = null;
    for (const e of list) {
        let key = e.key;
        let tr = subtractKey(firstKey, key);
        if (tr < nt) {
            nt = tr;
            ans = e;
        }
    }
    return ans;

}

function genMinMax(i) {
    const key = keys[i];
    return {
        idx: i,
        key: key,
        val: rMap[key],
        dtime: subtractKey(firstKey, key)
    };
}

function mapInfos(listi) {
    let ans = {};
    for (const e of listi) {
        ans[e.dtime] = e;
    }
    return ans;
}

function getVal(key) {
    return rMap[key] - baseVal;
}

function isBoundary(timeSize, idx, micro, forward) {
    if (idx < 0) return true;
    if (idx >= keys.length) return true;
    if (micro && timeSize > peakMaxWaitSeconds) return true;
    if (micro) return false;
    let nidx = forward ? idx - 1 : idx + 1;
    if (nidx < 0) return true;
    if (nidx >= keys.length) return true;
    let cv = getVal(keys[idx]);
    let nv = getVal(keys[nidx]);
    return nv * cv < 0;
}

function findMinOrMax(idx, micro) {
    const curIdx = idx;
    const curKey = keys[idx];
    const curv = getVal(curKey);
    let maxed = true, mined = true;
    let forward = true;
    while (maxed || mined) {
        if (forward) idx--; else idx++;
        let nk = keys[idx];
        let nv = getVal(nk);
        let timeSize = Math.abs(subtractKey(curKey, nk));
        if (isBoundary(timeSize, idx, micro, forward)) {
            if (forward) {
                idx = curIdx;
                forward = false;
                continue;
            }

            break;
        }
        if (maxed) {
            if (nv > curv) maxed = false
        }
        if (mined) {
            if (nv < curv) mined = false
        }
    }
    if (maxed && mined) return NONE;
    if (maxed && (micro || curv > 0)) return MAXED;
    if (mined && (micro || curv < 0)) return MINED;
    return NONE;
}

function subtractKey(k1, k2) {
    let k1t = new Date(k1);
    let k2t = new Date(k2);
    return (k1t - k2t) / 1000;
}

function genTrendInfo(micro, ft = null) {
    const minMaxInfo = listMinMax(micro, ft);
    const nearMax = getNearInfo(minMaxInfo.max);
    const nearMin = getNearInfo(minMaxInfo.min);
    const maxNearTime = nearMax ? subtractKey(firstKey, nearMax.key) : Number.MAX_SAFE_INTEGER;
    const minNearTime = nearMin ? subtractKey(firstKey, nearMin.key) : Number.MAX_SAFE_INTEGER;
    console.log(nearMax);
    console.log(nearMin);
    const state = calcState();

    console.log(state);

    function calcState() {
        if (maxNearTime < minNearTime) {
            return maxNearTime > peakMaxWaitSeconds ? STATE_FALL : STATE_RISE;
        } else {
            return minNearTime > peakMaxWaitSeconds ? STATE_RISE : STATE_FALL;
        }
    }


    function getOtherNearPeak() {
        if (nearMax && nearMax.idx == 0) return nearMin;
        if (nearMin && nearMin.idx == 0) return nearMax;
        return state == STATE_FALL ? nearMin : nearMax;
    }

    return {
        state: state,
        maxList: mapInfos(minMaxInfo.max),
        minList: mapInfos(minMaxInfo.min),
        allList: mapInfos(minMaxInfo.all),
        maxNearTime: maxNearTime,
        minNearTime: minNearTime,
        nearMax: nearMax,
        nearMin: nearMin,
        nearPeak: getOtherNearPeak()
    };
}

function macroAmplitudeFilter(iArrays) {
    let sidx = 0;
    while (sidx < iArrays.all.length) {
        let list = iArrays.all;
        let rmList = listAmplitudeSmall(sidx, list);
        for(let rmv of rmList){
            removeByIdx(iArrays.all,rmv.idx);
            removeByIdx(iArrays.min,rmv.idx);
            removeByIdx(iArrays.max,rmv.idx);
        }
        sidx++;
    }
    return iArrays;
}

function removeByIdx(list,idx){
    let index = list.findIndex(e=> e.idx == idx);
    if(index<0) return;
    list.splice(index, 1);
}

function listAmplitudeSmall(idx, list) {
    let ans = [];
    const curV = Math.abs(list[idx].val);
    let forward = true, later = true;

    for (let i = 1; i < list.length; i++) {
        let fr = getRmForward(i);
        let lr = getRmLater(i);
        if (fr) ans.push(fr);
        if (lr) ans.push(lr);
    }

    return ans;

    function getRmForward(pidx) {
        if (!forward) return null;
        let fidx = idx - pidx;
        if (fidx < 0) {
            forward = false;
            return null;
        }
        return checkOveAmplitudeRate(fidx);
    }

    function getRmLater(pidx) {
        if (!later) return null;
        let fidx = idx + pidx;
        if (fidx >= list.length) {
            later = false;
            return null;
        }
        return checkOveAmplitudeRate(fidx);

    }

    function checkOveAmplitudeRate(fidx) {
        const tv = Math.abs(list[fidx].val);
        const r = tv / curV;
        if (r > macroAmplitudeRate) {
            later = false;
            return null;
        }
        return list[fidx];
    }
}

const ans = {
    micro: genTrendInfo(true),
    macro: genTrendInfo(false, macroAmplitudeFilter),
    last: {
        time: firstKey,
        val: rMap[firstKey]
    }
}

ans;