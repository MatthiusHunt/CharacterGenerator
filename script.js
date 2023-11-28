const unusualPlaces = [
    "A futuristic metropolis",
    "An enchanted forest",
    "A deserted island",
    "A small town with a dark secret",
    "A space station orbiting a distant planet",
    "A magical school for gifted children",
    "A haunted mansion",
    "An underwater research facility",
    "A post-apocalyptic wasteland",
    "A hidden underground bunker",
    "A secret government laboratory",
    "A sprawling fantasy kingdom",
    "A pirate ship on the high seas",
    "A parallel universe",
    "A time machine",
    "An isolated mountain retreat",
    "A vast alien landscape",
    "A remote desert oasis",
    "A cursed village",
    "A far-off planet with strange creatures and customs",
    "A supernatural realm of gods and monsters",
    "A bustling city in a steampunk world",
    "A parallel dimension where magic is real",
    "A besieged fortress under attack by an enemy army",
    "A world of virtual reality",
    "A robotic factory on a distant moon",
    "A hidden valley of the dinosaurs",
    "A dream world where anything is possible",
    "A future utopia where everything is perfect",
    "A maze-like labyrinth of tunnels and caverns",
    "A mysterious island shrouded in fog",
    "An enchanted garden with a dark secret",
    "A floating city in the clouds",
    "A cursed castle in the wilderness",
    "A kingdom ruled by talking animals",
    "A parallel universe with a different history",
    "A cyberpunk dystopia",
    "An ancient temple deep in the jungle",
    "A secret society of assassins",
    "A Gothic cathedral with hidden passages and secrets",
    "A medieval castle in the heart of Europe",
    "An interdimensional portal hub",
    "An underground city built by a lost civilization",
    "A hollow earth civilization",
    "A mysterious island with an active volcano",
    "An abandoned amusement park with a sinister past",
    "A vast space station populated by a diverse array of alien species",
    "A world of shape-shifters and other supernatural beings",
    "An artificial intelligence laboratory",
    "A mythical kingdom of Atlantis",
    "A vast and dangerous desert wasteland",
    "A hidden city within a city",
    "A remote research facility in Antarctica",
    "A parallel world with different physical laws",
    "An alternate timeline where history unfolded differently",
    "An asteroid belt mining colony",
    "A planet with extreme weather conditions",
    "A parallel world where the laws of physics are different",
    "A futuristic utopia with a dark side",
    "A cursed forest with malevolent spirits",
    "A sunken underwater city",
    "An alien planet with multiple moons",
    "An isolated village in the mountains",
    "A prison planet with a dark history",
    "A dystopian future society",
    "A sentient planet with a mind of its own",
    "An abandoned research station on a remote planet",
    "A kingdom of vampires and werewolves",
    "An ancient temple in the heart of a jungle",
    "A mysterious lost city of gold",
    "A city of robots and cyborgs",
    "A parallel world where magic and technology coexist",
    "A post-apocalyptic city overrun by mutants",
    "A sentient spaceship with a crew of misfits",
    "A hidden underground society of survivors",
    "A magical island with mystical creatures",
    "A floating city on a giant airship",
    "A lost city hidden in the Amazon rainforest",
    "A remote space station conducting illegal experiments"
];

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
