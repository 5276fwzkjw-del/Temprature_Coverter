const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function formatNumber(num) {
  return parseFloat(num.toFixed(4));
}

function updateValues(e) {
  const inputField = e.target;
  const val = parseFloat(inputField.value);

  if (isNaN(val)) {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
    return;
  }

  if (inputField === celsiusInput) {
    fahrenheitInput.value = formatNumber((val * 9) / 5 + 32);
    kelvinInput.value = formatNumber(val + 273.15);
  } else if (inputField === fahrenheitInput) {
    celsiusInput.value = formatNumber(((val - 32) * 5) / 9);
    kelvinInput.value = formatNumber(((val - 32) * 5) / 9 + 273.15);
  } else if (inputField === kelvinInput) {
    celsiusInput.value = formatNumber(val - 273.15);
    fahrenheitInput.value = formatNumber(((val - 273.15) * 9) / 5 + 32);
  }
}

celsiusInput.addEventListener('input', updateValues);
fahrenheitInput.addEventListener('input', updateValues);
kelvinInput.addEventListener('input', updateValues);
