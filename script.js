document.getElementById('action-btn').addEventListener('click', function() {
    const infoText = document.getElementById('info-text');
    infoText.textContent = '¡El texto ha cambiado gracias a JavaScript!';
    infoText.style.fontWeight = 'bold';
    infoText.style.color = '#007bff';
});
