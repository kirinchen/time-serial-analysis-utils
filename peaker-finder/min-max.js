const rMap = require('./serial-test-data-90d').data;

let keys = Object.keys(rMap);
keys = keys.reverse();
const firstKey = keys[0];

function findMinMaxIdx() {
    let _min = Number.MAX_SAFE_INTEGER;
    let _max = Number.MIN_SAFE_INTEGER;
    let _minIdx = -1;
    let _maxIdx = -1;

    for (let i = 0; i < keys.length; i++) {
        let curV = getV(i);
        if (curV > _max) {
            _max = curV;
            _maxIdx = i;
        }
        if (curV < _min) {
            _min = curV;
            _minIdx = i;
        }
    }
    return {
        minIdx: _minIdx,
        maxIdx: _maxIdx
    };
}

function subtractKeySencods(k1, k2) {
    let k1t = new Date(k1);
    let k2t = new Date(k2);
    return (k1t - k2t) / 1000;
}

function genRaw(idx) {
    return {
        idx: idx,
        key: keys[idx],
        val: getV(idx),
        dTime: subtractKeySencods(firstKey, keys[idx])
    };
}

function getV(idx) {
    const k = keys[idx];
    return rMap[k];
}

function calc() {
    const mm = findMinMaxIdx();
    return {
        min: genRaw(mm.minIdx),
        max: genRaw(mm.maxIdx)
    }
}

module.exports = {
    ans: calc()
};