function solution(sides) {
    sides.sort((a, b) => {
        return a - b;
    })
    return sides[0] * 2 - 1;
}