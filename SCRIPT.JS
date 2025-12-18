let count = 0;
const cartDisplay = document.getElementById('cart-count');

// Fungsi Menambah Keranjang
function addToCart() {
    count++;
    cartDisplay.innerText = count;
    
    // Animasi kecil pada angka keranjang
    cartDisplay.style.transform = "scale(1.5)";
    setTimeout(() => {
        cartDisplay.style.transform = "scale(1)";
    }, 200);

    alert("Produk berhasil ditambahkan ke keranjang!");
}

// Efek Scroll Reveal Sederhana
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Pesan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("EcoStore 2025 siap melayani gaya hidup sehat Anda.");
});
