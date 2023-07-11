console.log("Tugas 1 - Compare String")
function compareString(A: string, B: string): string {
  let kesamaan: string = "";
  
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let substring: string = "";
      let x = i;
      let y = j;

      while (x < A.length && y < B.length && A[x] === B[y]) {
        substring += A[x];
        x++;
        y++;
      }

      if (substring.length > kesamaan.length) {
        kesamaan = substring;
      }
    }
  }
  
  return kesamaan;
}

// Contoh penggunaan
const A: string = "KUPU-KUPU";
const B: string = "KUPU";
const kesamaanSubstring: string = compareString(A, B);
console.log(`Kesamaan substring: ${kesamaanSubstring}`);
