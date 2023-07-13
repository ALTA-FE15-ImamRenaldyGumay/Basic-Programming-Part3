console.log("Menghapus Duplikat")
function hapusDuplikat(angka: number[]): number {
    let hitung = 0; // count of unique elements
    
    for (let i = 1; i < angka.length; i++) {
        if (angka[i] !== angka[hitung]) {
            hitung++;
            angka[hitung] = angka[i]; // move the unique element to the next position
        }
    }
    
    return hitung + 1; // add 1 to account for the first unique element
}

const nums1 = [2, 3, 3, 3, 6, 9, 9];
console.log(hapusDuplikat(nums1)); // Output: 4
console.log(nums1.slice(0, 4)); // Output: [2, 3, 6, 9]

const nums2 = [2, 2, 2, 11];
console.log(hapusDuplikat(nums2)); // Output: 2
console.log(nums2.slice(0, 2)); // Output: [2, 11]

