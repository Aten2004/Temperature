let celsius = document.getElementById('Celsius')
let fahrenheit = document.getElementById('Fahrenheit')
let kelvin = document.getElementById('Kelvin')
let delisle = document.getElementById('Delisle')

//ตัวแปลงอุณหภูมิ
function CelToAll(){
    let celsiusValue = parseFloat(celsius.value);
    
    // แปลงเป็น Fahrenheit
    let fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheit.value = parseFloat(fahrenheitValue.toFixed(3));  

    // แปลงเป็น Kelvin
    let kelvinValue = celsiusValue + 273.15;
    kelvin.value = parseFloat(kelvinValue.toFixed(3));

    // แปลงเป็น Delisle
    let delisleValue = (100 - celsiusValue) * 3/2;
    delisle.value = parseFloat(delisleValue.toFixed(3));
}

function FarToAll(){
    let fahrenheitValue = parseFloat(fahrenheit.value);
    
    // แปลงเป็น Celsius
    let celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsius.value = parseFloat(celsiusValue.toFixed(3));

    // แปลงเป็น Kelvin
    let kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;
    kelvin.value = parseFloat(kelvinValue.toFixed(3));

    // แปลงเป็น Delisle
    let delisleValue = (212 - fahrenheitValue) * 5/6;
    delisle.value = parseFloat(delisleValue.toFixed(3));
}

function KenToAll(){
    let kelvinValue = parseFloat(kelvin.value);
    
    // แปลงเป็น Celsius
    let celsiusValue = kelvinValue - 273.15;
    celsius.value = parseFloat(celsiusValue.toFixed(3));

    // แปลงเป็น Fahrenheit
    let fahrenheitValue = (kelvinValue * 9/5) - 459.67;
    fahrenheit.value = parseFloat(fahrenheitValue.toFixed(3));  

    // แปลงเป็น Delisle
    let delisleValue = (373.15 - kelvinValue) * 3/2;
    delisle.value = parseFloat(delisleValue.toFixed(3));
}

function DelToAll(){
    let delisleValue = parseFloat(delisle.value);
    
    // แปลงเป็น Celsius
    let celsiusValue = 100 - (delisleValue * 2/3);
    celsius.value = parseFloat(celsiusValue.toFixed(3));

    // แปลงเป็น Fahrenheit
    let fahrenheitValue = 212 - (delisleValue * 6/5);
    fahrenheit.value = parseFloat(fahrenheitValue.toFixed(3));  

    // แปลงเป็น Kelvin
    let kelvinValue = 373.15 - (delisleValue * 2/3);
    kelvin.value = parseFloat(kelvinValue.toFixed(3));
}


// ฟังก์ชันสำหรับล้างค่า input
function clearInputs() {
    celsius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";
    delisle.value = "";
}
  
// เลือก element ปุ่ม Clear
const clearButton = document.getElementById('clearButton');
  
// เพิ่ม Event Listener ให้กับปุ่ม Clear
clearButton.addEventListener('click', clearInputs);
