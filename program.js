function calculateBMI() {
    // Get the weight and height inputs
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Calculate the BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display the result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "تناسب اندام : ";
    
    if (bmi < 18.5) {
       resultDiv.innerHTML += " شما کبود وزن دارید ";
       resultDiv.style.color="red"
    } else if (bmi < 25) {
       resultDiv.innerHTML += " وزن شما نرمال است ";
       resultDiv.style.color="green"
    } else if (bmi < 30) {
       resultDiv.innerHTML += " شما اضافه وزن دارید ";
       resultDiv.style.color="yellow"
    } else {
       resultDiv.innerHTML += " شما چاق هستید ";
       resultDiv.style.color="red"
    }
 }
