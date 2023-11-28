const unusualPlaces = ["A futuristic metropolis", "An enchanted forest", /* add all 78 places */];
const darkSecrets = ["Secret1", "Secret2", /* add all 70 dark secrets */];

function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateCharacter() {
    const unusualPlace = getRandomValue(unusualPlaces);
    const darkSecret = getRandomValue(darkSecrets);

    const characterDetails = `Unusual Place: ${unusualPlace}<br>With a Dark Secret: ${darkSecret}`;

    document.getElementById("character").innerHTML = characterDetails;
}
