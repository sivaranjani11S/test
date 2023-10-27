// 1. Fibonacci series
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
const nTerms = 10;
if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
// 2. 
function isBalanced(s) {
    if (s.length < 2) return false;
    const charCount = new Map();
    for (let char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    const counts = [...charCount.values()];
    return counts.length === 2 && counts[0] === counts[1];
}

function getBalancedSubstrings(S) {
    const result = [];
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 2; j <= S.length; j++) {
            const substring = S.slice(i, j);
            if (isBalanced(substring)) {
                if (result.length === 0 || substring.length > result[0].length) {
                    result.length = 0;
                    result.push(substring);
                } else if (substring.length === result[0].length) {
                    result.push(substring);
                }
            }
        }
    }
    return result;
}

// Example usage:
const S1 = "cabbacc";
const S2 = "abababa";
const S3 = "aaaaaaa";

console.log(getBalancedSubstrings(S1));
console.log(getBalancedSubstrings(S2)); 
console.log(getBalancedSubstrings(S3)); 

//3 .

function migrateRings(N, A, B, C) {
    const steps = [];

    function moveRing(n, source, target, auxiliary) {
        if (n === 1) {
            steps.push(`${n}: ${source} to ${target}`);
        } else {
            moveRing(n - 1, source, auxiliary, target);
            steps.push(`${n}: ${source} to ${target}`);
            moveRing(n - 1, auxiliary, target, source);
        }
    }

    moveRing(N, A, B, C);
    return steps;
}

// Example usage:
const N1 = 2;
const N2 = 3;
const N3 = 1;

console.log(migrateRings(N1, "A", "B", "C"));
console.log(migrateRings(N2, "A", "B", "C"));
console.log(migrateRings(N3, "A", "B", "C"));

