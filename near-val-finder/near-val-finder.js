const map = require('./test-data').data;
const key = require('./test-data').key;

let keys = Object.keys(map);

keys = keys.reverse();

function subtractKey(k1, k2) {
    let k1t = new Date(k1);
    let k2t = new Date(k2);
    return (k1t - k2t) / 1000;
}

function findNear(k) {
    let min = Number.MAX_SAFE_INTEGER;
    let ansI = -1;
    for (let i = 0; i < keys.length; i++) {
        let tk = keys[i];
        let d = Math.abs(subtractKey(k, tk));
        if (d < min) {
            min = d;
            ansI = i;
        }
    }
    return {
        idx:ansI,
        d:min,
        k:keys[ansI],
        v:map[keys[ansI]]
    };
}

function find(){
    const f = findNear(key);
    return f;
}


module.exports = {
    find: find
};