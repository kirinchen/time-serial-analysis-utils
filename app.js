const rMap = require('./serial-test-data-40h').data;

const peakMaxWaitSeconds = 60 * 60 * 2;
const STATE_RISE = 'RISE';
const STATE_FALL = 'FALL';
const MINED = 99;
const MAXED = 66;
const NONE = 22;

let keys = Object.keys(rMap);

keys = keys.reverse();
const firstKey = keys[0];

function listMinMax(micro) {
    let ans = {
        min: [],
        max: []
    };
    for (let i = 0; i < keys.length; i++) {
        mmr = findMinOrMax(i,micro);
        if (mmr == MINED) {
            ans.min.push(genMinMax(i));
        } else if (mmr == MAXED) {
            ans.max.push(genMinMax(i));
        }
    }
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

function mapInfos(listi){
    let ans = {};
    for (const e of listi) {
        ans[e.dtime] = e;
    }
    return ans;
}


function findMinOrMax(idx, micro) {
    const curIdx = idx;
    const curKey = keys[idx];
    const curv = rMap[curKey];
    let maxed = true, mined = true;
    let forward = true;
    while (maxed || mined) {
        if (forward) idx--; else idx++;
        let nk = keys[idx];
        let nv = rMap[nk];
        let timeSize = Math.abs(subtractKey(curKey, nk));
        if (timeSize > peakMaxWaitSeconds || idx < 0 || idx >= keys.length) {
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
    if (maxed && mined) throw new Error('its imposible maxed and mined curv=' + curv + ' idx:' + idx);
    if (maxed && (micro || curv > 0)) return MAXED;
    if (mined && (micro || curv < 0)) return MINED;
    return NONE;
}

function subtractKey(k1, k2) {
    let k1t = new Date(k1);
    let k2t = new Date(k2);
    return (k1t - k2t) / 1000;
}

function genTrendInfo(micro) {
    const minMaxInfo = listMinMax(micro);
    const nearMax = getNearInfo(minMaxInfo.max);
    const nearMin = getNearInfo(minMaxInfo.min);
    const maxNearTime = nearMax ? subtractKey(firstKey, nearMax.key):Number.MAX_SAFE_INTEGER;
    const minNearTime = nearMin ? subtractKey(firstKey, nearMin.key):Number.MAX_SAFE_INTEGER;
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
        maxNearTime: maxNearTime,
        minNearTime: minNearTime,
        nearMax: nearMax,
        nearMin: nearMin,
        nearPeak: getOtherNearPeak()
    };
}



const ans = {
    micro : genTrendInfo(true),
    macro: genTrendInfo(false),
    last:{
        time:firstKey,
        val:rMap[firstKey]
    }
}
ans;
console.log(ans);