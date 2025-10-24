function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
    const commonDenom = lcm(denom1, denom2);
    const sumNumer = numer1 * ( commonDenom / denom1) + numer2 * (commonDenom / denom2);
    const g = gcd(sumNumer, commonDenom);
    return [sumNumer / g, commonDenom / g];
}