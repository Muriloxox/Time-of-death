document.getElementById('calculate-btn').addEventListener('click', calculateLifeExpectancy);

function calculateLifeExpectancy() {
    const age = parseInt(document.getElementById('age').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const diet = document.getElementById('diet').value;
    const exercise = document.getElementById('exercise').value;
    const location = document.getElementById('location').value;

    const resultDiv = document.getElementById('result');

    if (isNaN(age) || isNaN(bmi) || !diet || !exercise || !location) {
        resultDiv.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    let lifeExpectancy = 80;

    if (age > 50) lifeExpectancy -= (age - 50) * 0.5;

    if (bmi < 18.5 || bmi > 30) lifeExpectancy -= 5;

    if (diet === "average") lifeExpectancy -= 3;
    if (diet === "poor") lifeExpectancy -= 7;

    if (exercise === "sometimes") lifeExpectancy -= 2;
    if (exercise === "no") lifeExpectancy -= 5;

    if (location === "urban") lifeExpectancy -= 2;

    lifeExpectancy = Math.max(lifeExpectancy, 0);

    resultDiv.innerHTML = `Sua expectativa de vida estimada é de <strong>${Math.round(lifeExpectancy)}</strong> anos.`;
}
