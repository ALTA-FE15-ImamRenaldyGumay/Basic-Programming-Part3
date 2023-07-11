console.log("Tugas 2 - Join Array Remove Duplicate")
function gabungArrayDanHapusDuplikat(array1: string[], array2: string[]): string[] {
    const combinedArray: string[] = [...array1];
  
    for (let i = 0; i < array2.length; i++) {
      if (!array1.includes(array2[i])) {
        combinedArray.push(array2[i]);
      }
    }
  
    return combinedArray;
  }
  
  // Contoh penggunaan
  const array1: string[] = ['apel', 'nanas', 'anggur'];
  const array2: string[] = ['apel', 'pisang'];
  const hasilGabungan: string[] = gabungArrayDanHapusDuplikat(array1, array2);
  console.log(`Hasil gabungan array: ${hasilGabungan}`);
  