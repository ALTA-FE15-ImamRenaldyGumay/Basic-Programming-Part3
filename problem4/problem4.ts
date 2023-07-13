console.log("Mean dan Median")
function hitungMeandanMedian(angka: number[]): [number, number] {
    const n = angka.length;

    // Calculate Mean
    const sum = angka.reduce((acc, curr) => acc + curr, 0);
    const mean = sum / n;

    // Calculate Median
    let median: number;
    if (n % 2 === 0) {
        const mid = n / 2;
        median = (angka[mid - 1] + angka[mid]) / 2;
    } else {
        const mid = Math.floor(n / 2);
        median = angka[mid];
    }

    return [Math.round(mean * 10) / 10, Math.round(median * 10) / 10];
}

// Test the function with the provided sample test case
const angka = [10, 20, 30, 40, 50];
const [mean, median] = hitungMeandanMedian(angka);
console.log(mean, median); // Output: 2.5 2.5
