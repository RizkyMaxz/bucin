// Menyimpan kategori yang dipilih
let selectedCategory = null;
let kataData = null;  // Untuk menyimpan data kata-kata yang sudah dimuat

// Fungsi untuk memuat kata-kata hanya sekali
async function loadKataData() {
    if (kataData === null) {  // Memastikan data hanya diambil sekali
        const response = await fetch('kata.json');
        kataData = await response.json();
    }
}

// Fungsi untuk memilih kata acak
function getRandomKata() {
    const categoryData = kataData[selectedCategory];
    const randomIndex = Math.floor(Math.random() * categoryData.length);
    return categoryData[randomIndex];
}

// Fungsi untuk menampilkan kata
function updateKataDisplay() {
    const randomKata = getRandomKata();
    document.getElementById("kata").textContent = randomKata;
}

// Fungsi untuk memilih kategori
async function selectCategory(category) {
    selectedCategory = category;
    await loadKataData();  // Pastikan data sudah dimuat sebelum menampilkan kata
    document.querySelector('.category-selection').style.display = 'none'; // Menyembunyikan pilihan kategori
    document.getElementById('kata-container').style.display = 'block'; // Menampilkan area kata
    updateKataDisplay(); // Menampilkan kata pertama
}

// Fungsi untuk menampilkan kata acak setelah tombol diklik
function generateKata() {
    if (selectedCategory) {
        updateKataDisplay();
    }
}

// Fungsi untuk kembali ke pilihan kategori
function goBack() {
    document.querySelector('.category-selection').style.display = 'block'; // Menampilkan pilihan kategori lagi
    document.getElementById('kata-container').style.display = 'none'; // Menyembunyikan kata-kata
}