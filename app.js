const rMap = require('./serial-test-data').data;

const peakMaxWaitSeconds = 60 * 60 * 2;

const MINED = 99;
const MAXED = 66;
const NONE = 22;

let keys = Object.keys(rMap);

keys = keys.reverse();

function listMinMax() {
    let ans = {
        min: [],
        max: []
    };
    for (let i = 0; i < keys.length; i++) {
        mmr = findMinOrMax(i);
        if (mmr == MINED) {
            ans.min.push(genMinMax(i));
        } else if (mmr == MAXED) {
            ans.max.push(genMinMax(i));
        }
    }
    return ans;
}

function getNearInfo(list) {
    let fkey = keys[0];
    let nt = Number.MAX_SAFE_INTEGER;
    let ans = null;
    for (const e of list) {
        let key = e.key;
        let tr = subtractKey(fkey, key);
        if (tr < nt) {
            nt = tr;
            ans = e;
        }
    }
    return ans;

}

function genMinMax(i) {
    return {
        idx: i,
        key: keys[i],
        val: rMap[keys[i]]
    };
}


function findMinOrMax(idx) {
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
    if (maxed && mined) throw new Error('its imposible maxed and mined curv=' + curv + ' key:' + key);
    if (maxed) return MAXED;
    if (mined) return MINED;
    return NONE;
}

function subtractKey(k1, k2) {
    let k1t = new Date(k1);
    let k2t = new Date(k2);
    return (k1t - k2t) / 1000;
}



const firstKey = keys[0];
const minMaxInfo = listMinMax();
const nearMax = getNearInfo(minMaxInfo.max);
const nearMin = getNearInfo(minMaxInfo.min);
console.log(nearMax);
console.log(nearMin);

const maxNearTime = subtractKey(firstKey, nearMax.key);
const minNearTime = subtractKey(firstKey, nearMin.key);

const STATE_RISE = 'RISE';
const STATE_FALL = 'FALL';

function calcState() {
    if (maxNearTime < minNearTime) {
        return maxNearTime > peakMaxWaitSeconds ? STATE_FALL : STATE_RISE;
    } else {
        return minNearTime > peakMaxWaitSeconds ? STATE_RISE : STATE_FALL;
    }
}




const state = calcState();

console.log(state);

function getOtherNearPeak(){
    if (nearMax.idx == 0) return nearMin;
    if (nearMin.idx == 0) return nearMax;
    return state == STATE_FALL ? nearMin : nearMax;
}

const ans= {
    state : state,
    maxNearTime:maxNearTime,
    minNearTime:minNearTime,
    nearMax:nearMax,
    nearMin:nearMin,
    nearPeak: getOtherNearPeak()
}
console.log(ans);
ans;