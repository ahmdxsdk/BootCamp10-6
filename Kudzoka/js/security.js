document.addEventListener('keydown', function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.key === "I" && (e.keyCode == 73 || e.keyCode == 74))) {
        e.preventDefault();
    }
});
  
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
