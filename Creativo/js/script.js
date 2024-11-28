// الحصول على جميع الـ overlays
const overlays = document.querySelectorAll('.over');

// إضافة مستمع حدث للنقر على المستند بالكامل
document.addEventListener('click', function(event) {
    // التحقق من النقر داخل الـ video-1 أو الـ overlay
    overlays.forEach(overlay => {
        const videoContainer = overlay.closest('.video-1'); // البحث عن أقرب عنصر يحمل الكلاس video-1
        if (!videoContainer.contains(event.target)) {
            // إذا كان النقر خارج العنصر، أعد الـ overlay إلى حالته الأصلية
            overlay.classList.remove('hidden');
        }
    });
});

// إضافة مستمع حدث للنقر على الـ overlay لتغيير الشفافية و z-index
overlays.forEach(overlay => {
    overlay.addEventListener('click', function(event) {
        // إذا تم النقر على الـ overlay نفسه، أخفيه
        this.classList.add('hidden');
        // توقف الحدث من الانتقال إلى العنصر الأب
        event.stopPropagation();
    });
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.key === "I" && (e.keyCode == 73 || e.keyCode == 74))) {
        e.preventDefault();
    }
});
  
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// const card = document.getElementById('card');
// const adamText = card.querySelector('.adam');

// // إضافة مستمع حدث للـ mouseover (عند التمرير فوق الكارد)
// card.addEventListener('mouseover', function() {
//     // إضافة كلاس hidden لتغيير اللون
//     adamText.classList.add('hidden');
// });

// // إضافة مستمع حدث للـ mouseout (عند مغادرة الماوس)
// card.addEventListener('mouseout', function() {
//     // إزالة كلاس hidden لإرجاع اللون إلى حالته الأصلية
//     adamText.classList.remove('hidden');
// });
