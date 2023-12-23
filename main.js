// main.js

function calculateTemperature() {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');
    let kelvinInput = document.getElementById('kelvin');

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let kelvin = parseFloat(kelvinInput.value);

    if (!isNaN(celsius)) {
        fahrenheit = celsius * 9 / 5 + 32;
        kelvin = celsius + 273.15;
    } else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (!isNaN(kelvin)) {
        celsius = kelvin - 273.15;
        fahrenheit = celsius * 9 / 5 + 32;
    } else {
        celsiusInput.value = 'โปรดเพิ่มค่าอุณหภูมิ';
        fahrenheitInput.value = 'โปรดเพิ่มค่าอุณหภูมิ';
        kelvinInput.value = 'โปรดเพิ่มค่าอุณหภูมิ';
        return;
    }

    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
}

function resetValues() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kelvin').value = '';
}