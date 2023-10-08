// Contoh penggunaan if
let nilai = 80;

if (nilai >= 70) {
  console.log("Selamat, Anda lulus!");
}

// Contoh penggunaan if else
let kesukaan = "anime, budaya jepang";

if (kesukaan === "anime, budaya jepang") {
  console.log("Selamat, Anda wibu yeayy");
} else if (kesukaan === "film barat, lagu barat"){
  console.log("Maaf, Anda bukan wibu.");
} else {
    console.log ("Kamu bukan siapa - siapa")
}

// Contoh penggunaan nested if
let nilaiMatematika = 85;
let nilaiBahasaInggris = 70;

if (nilaiMatematika >= 70) {
  console.log("Anda lulus ujian matematika.");
  
  if (nilaiBahasaInggris >= 70) {
    console.log("Anda juga lulus ujian bahasa Inggris.");
  } else {
    console.log("Maaf, Anda tidak lulus ujian bahasa Inggris.");
  }
} else {
  console.log("Maaf, Anda tidak lulus ujian matematika.");
}


// Contoh penggunaan switch case
let hari = "Jumat";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Belajar javascript.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Hari ini adalah hari biasa.");
}

// Contoh penggunaan for statement
for (let x = 1; x <= 5; x++) {
    console.log("Nomor peringkat ke-" + x);
}

// Contoh penggunaan while
let count = 1;
while (count <= 3) {
  console.log(" Juara ke-" + count);
  count++;
}

// Contoh penggunaan do while
let angka = 0;
do {
  console.log("Nomor yang beruntung: " + angka);
  angka++;
} while (angka <= 5);

// Contoh penggunaan function
function tambah(a, b) {
    return a + b;
  }
  
  let hasil = tambah(3, 4);
  console.log("Hasil penjumlahan: " + hasil);
