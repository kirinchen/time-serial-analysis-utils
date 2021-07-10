const rf = require('../app').ans;
const macro = rf.macro;
const state = rf.macro.state;
const lastV = rf.last.val;
const h = getH();
const halfH = h / 2;
const A = 'A', B = 'B', C = 'C', D = 'D', E = 'E', F = 'F', G = 'G', H = 'H';
const pos = getPos();

function getH() {
    if (state == 'FALL') return Math.abs(macro.nearMin.val);
    if (state == 'RISE') return Math.abs(macro.nearMax.val);
    throw new Error('not support ' + state);
}

function getPos() {
    if (state == 'RISE') {
        if (lastV <= 0) {
            return lastV <= -halfH ? A : B;
        } else {
            return lastV >= halfH ? D : C;
        }
    }
    if (state == 'FALL') {
        if (lastV <= 0) {
            return lastV <= -halfH ? H : G;
        } else {
            return lastV >= halfH ? E : F;
        }
    }
    throw new Error('not support ' + state + ' v:' + lastV);
}

function calcInvestRate() {
    if (state == 'FALL') return lastV / h;
    if (state == 'RISE') return -lastV / h;
    throw new Error('not support ' + state + ' v:' + lastV);
}

function calcMiddleGroudRate() {
    let s = Math.abs(lastV) - halfH;
    let p = s / halfH;
    return Math.pow(0.5, p);
}

function calcLongGroudRate() {
    let absl = Math.abs(lastV);
    let p = absl / h;
    return Math.pow(0.5, p);
}

function calcGroudRate() {
    switch (pos) {
        case A: return state == 'RISE' ? calcMiddleGroudRate() : calcLongGroudRate();
        case B: return state == 'RISE' ? calcMiddleGroudRate() : 0;
        case C: return state == 'RISE' ? calcMiddleGroudRate() : 0;
        case D: return state == 'RISE' ? calcMiddleGroudRate() : calcLongGroudRate();
        case E: return state == 'RISE' ? calcLongGroudRate() : calcMiddleGroudRate();
        case F: return state == 'RISE' ? 0 : calcMiddleGroudRate();
        case G: return state == 'RISE' ? 0 : calcMiddleGroudRate();
        case G: return state == 'RISE' ? calcLongGroudRate() : calcMiddleGroudRate();
    }
    throw new Error('not support ' + state + ' v:' + lastV);

}

function calc() {
    return {
        'investRate': calcInvestRate(),
        'groudRate': calcGroudRate(),
        'pos': pos,
        'h': h,
        'lastv': lastV,
        'state':state
    }
}

const ans = calc();

module.exports = {
    ans: ans
};