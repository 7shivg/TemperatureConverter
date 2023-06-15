document.addEventListener('DOMContentLoaded', function () {
    // Get the input fields
    const celsiusInput = document.querySelector('#celcius input');
    const fahrenheitInput = document.querySelector('#fahrenheit input');
    const kelvinInput = document.querySelector('#kelvin input');
  
    // Add event listeners to input fields
    celsiusInput.addEventListener('input', convertFromCelsius);
    fahrenheitInput.addEventListener('input', convertFromFahrenheit);
    kelvinInput.addEventListener('input', convertFromKelvin);
  
    // Convert from Celsius
    function convertFromCelsius() {
      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = celsiusValue * 9 / 5 + 32;
      const kelvinValue = celsiusValue + 273.15;
  
      fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
      kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
    }
  
    // Convert from Fahrenheit
    function convertFromFahrenheit() {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      const kelvinValue = (fahrenheitValue - 32) * 5 / 9 + 273.15;
  
      celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
      kelvinInput.value = isNaN(kelvinValue) ? '' : kelvinValue.toFixed(2);
    }
  
    // Convert from Kelvin
    function convertFromKelvin() {
      const kelvinValue = parseFloat(kelvinInput.value);
      const celsiusValue = kelvinValue - 273.15;
      const fahrenheitValue = kelvinValue * 9 / 5 - 459.67;
  
      celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
      fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    }
  
    // Clear all fields
    const clearButton = document.querySelector('.button button');
    clearButton.addEventListener('click', clearFields);
  
    function clearFields() {
      celsiusInput.value = '';
      fahrenheitInput.value = '';
      kelvinInput.value = '';
    }
  });
  