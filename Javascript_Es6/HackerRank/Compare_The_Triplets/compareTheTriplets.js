/*
Function Description
---------------------
Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):
int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating

Return
---------------------
int[2]: Alice's score is in the first position, and Bob's score is in the second.
*/

/* compareTriplets should compare two arrays at the same indices.
    Whoever has a greater number in the compare gets a point
    points will be set in the points array
    if the compare is the same amount no one gets a point
    return both points to see who has the greatest amount
*/
const compareTriplets = (a, b) => {
    let points = [0, 0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] < b[i]) {
            points[1]++;
        }
    }
    return points;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));