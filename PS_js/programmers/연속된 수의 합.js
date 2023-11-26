function solution(num, total) {
    var answer = [];
    let mid = total / num;
    if (num % 2 == 0) {
        mid -= 0.5;
        for (let i = 0; i < num / 2; i++) {
            answer.push(mid + i + 1);
            answer.push(mid - i);
        }
    } else {
        answer.push(mid);
        for (let i = 1; i < num / 2; i++) {
            answer.push(mid + i);
            answer.push(mid - i);
        }
    }

    return answer.sort((a, b) => {return a - b;});
}
// https://d3vd9lfkzbru3h.cloudfront.net/68d72e69af33d5f62267_hejin0_0_39747795799_1665198690/chunked/index-dvr.m3u8