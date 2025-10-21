/* --- Messages --- */
const messages = [
    'Chúc em 20/10 thật vui vẻ và luôn rạng rỡ như ánh nắng ban mai 🌸',
    'Cảm ơn em vì đã khiến mỗi ngày của anh trở nên đặc biệt hơn 💖',
    'Anh không biết tương lai thế nào, chỉ biết hiện tại — anh thích em ❤️',
    'Chúc em luôn được yêu thương, và biết rằng… có người luôn nhớ đến em 💕',
    '20/10 này, anh chỉ mong em hạnh phúc — dù là bên ai, anh vẫn mỉm cười 💫',
    'Nếu có thể, anh muốn là người làm em cười mỗi ngày 💞',
    'Em là lý do khiến trái tim anh luôn đập nhanh hơn một nhịp 💗'
];

function createMessage() {
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.style.left = Math.random() * 80 + 'vw';
    message.style.animationDuration = (8 + Math.random() * 20) + 's';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 12000);
}

/* --- Hearts --- */
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 16) + 'px';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}

/* --- Floating photos --- */
const photoUrls = [
    "assets/images/anh_1.jpeg",
    "assets/images/anh_2.jpeg",
    "assets/images/anh_3.jpeg",
    "assets/images/anh_4.jpeg",
    "assets/images/anh_5.jpeg",
    "assets/images/anh_6.jpeg",
    "assets/images/anh_7.jpeg",
    "assets/images/anh_8.jpeg",
    "assets/images/anh_9.jpeg",
    "assets/images/anh_10.jpeg",
    "assets/images/anh_11.jpeg",
    "assets/images/anh_12.jpeg",
];

function createFloatingPhoto() {
    const img = document.createElement('img');
    img.src = photoUrls[Math.floor(Math.random() * photoUrls.length)];
    img.className = 'floating-photo';
    img.style.left = Math.random() * 80 + 'vw';
    img.style.width = (250 + Math.random() * 100) + 'px';
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 12000);
}

/* --- Intervals --- */
setInterval(createMessage, 2000);
setInterval(createHeart, 300);
setInterval(createFloatingPhoto, 4000);
