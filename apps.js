function validateInput(value) {
    return /^-?\d+(\.\d+)?$/.test(value);
}

document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();

    if (!validateInput(num1) || !validateInput(num2)) {
        alert('Please enter valid numeric values.');
        return;
    }

    const result = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').value = result;
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
});

document.getElementById('exitBtn').addEventListener('click', function() {
    if (window.opener) {
        window.close();
    } else {
        alert('Exit button clicked - this would close the window in a desktop application');
    }
});