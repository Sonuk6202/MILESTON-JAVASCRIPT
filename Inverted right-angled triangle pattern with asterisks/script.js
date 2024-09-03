function generatePattern() {
    const rows = parseInt(document.getElementById('rows').value);
    let pattern = '';

    for (let i = rows; i > 0; i--) {
        pattern += '*'.repeat(i) + '\n';
    }

    document.getElementById('pattern').textContent = pattern;
}
