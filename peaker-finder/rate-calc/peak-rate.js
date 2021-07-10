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
    throw new Error('getH not support ' + state);
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
    throw new Error('getPos not support ' + state + ' v:' + lastV);
}

function calcInvestRate(sb) {
    if (sb == 'SELL') return lastV / h;
    if (sb == 'BUY') return -lastV / h;
    throw new Error('calcInvestRate not support ' + state + ' v:' + lastV);
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

function calcGroudRate(sb) {
    switch (pos) {
        case A: return sb == 'BUY' ? calcMiddleGroudRate() : calcLongGroudRate();
        case B: return sb == 'BUY' ? calcMiddleGroudRate() : 0;
        case C: return sb == 'BUY' ? calcMiddleGroudRate() : 0;
        case D: return sb == 'BUY' ? calcMiddleGroudRate() : calcLongGroudRate();
        case E: return sb == 'BUY' ? calcLongGroudRate() : calcMiddleGroudRate();
        case F: return sb == 'BUY' ? 0 : calcMiddleGroudRate();
        case G: return sb == 'BUY' ? 0 : calcMiddleGroudRate();
        case H: return sb == 'BUY' ? calcLongGroudRate() : calcMiddleGroudRate();
    }
    throw new Error('not support ' + state + ' v:' + lastV+ 'POS:'+pos);

}

function calc() {
    return {
        'SELL':{
            'investRate': calcInvestRate('SELL'),
            'groudRate': calcGroudRate('SELL'),
        },
        'BUY':{
            'investRate': calcInvestRate('BUY'),
            'groudRate': calcGroudRate('BUY'),
        },
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