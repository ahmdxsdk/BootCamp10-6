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
// overlays.forEach(overlay => {
//     overlay.addEventListener('click', function(event) {
//         // إذا تم النقر على الـ overlay نفسه، أخفيه
//         this.classList.add('hidden');
//         // توقف الحدث من الانتقال إلى العنصر الأب
//         event.stopPropagation();
//     });
// });

(function() {
    var devToolsOpen = false;
    var checkDevToolsInterval;

    function checkDevTools() {
        // تحقق من تغيير حجم النافذة عند فتح أدوات المطور
        if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                alert("يبدو أنك تستخدم أدوات المطور. الرجاء عدم استخدامها.");
                // فرض إعادة تحميل الصفحة بعد التأخير
                setTimeout(function() {
                    location.reload();
                }, 1000); // إعادة التحميل بعد 1 ثانية
            }
        } else {
            devToolsOpen = false;
        }
    }

    // التحقق كل ثانية
    checkDevToolsInterval = setInterval(checkDevTools, 1000);

    // قم بإيقاف التحقق بعد إغلاق الصفحة (تحسينات اختياريّة)
    window.addEventListener('beforeunload', function() {
        clearInterval(checkDevToolsInterval);
    });
})();


document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.key === "I" && (e.keyCode == 73 || e.keyCode == 74))) {
        e.preventDefault();
    }
});
  
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

setInterval(function() {
    if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
        alert("يبدو أنك تستخدم أدوات المطور. الرجاء عدم استخدامها.");
    }
}, 1000);
