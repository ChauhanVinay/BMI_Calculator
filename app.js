const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const ans = document.querySelector('#ans');

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please provide a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please provide a valid weight ${weight}`; 
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;

        if(bmi < 18.5) {
            ans.innerHTML = `You are underweight`;
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            ans.innerHTML = `You are healthy`;
        } else if(bmi >= 25 && bmi <= 29.9) {
            ans.innerHTML = `You are overweight`;
        } else{
            ans.innerHTML = `You are obese`;
        }
    }
});
