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
    "A remote space station conducting illegal experiments" ];

const darkSecret = [ 
    "They have a criminal record.",
    "They are in debt to dangerous people.",
    "They are addicted to drugs or alcohol.",
    "They have a serious medical condition.",
    "They have cheated on their partner.",
    "They have a hidden child.",
    "They have a history of abusive behavior.",
    "They have committed fraud or embezzlement.",
    "They have a dark family history.",
    "They are being blackmailed.",
    "They have a history of mental illness.",
    "They have stolen something valuable.",
    "They are living under a false identity.",
    "They have a history of violence.",
    "They have a secret lover.",
    "They have betrayed someone close to them.",
    "They have a hidden talent or skill.",
    "They have a secret obsession.",
    "They have committed a serious crime.",
    "They have a phobia or fear they are trying to hide.",
    "They have a dark past they are running from.",
    "They have a secret addiction.",
    "They are hiding an affair with a married person.",
    "They have a dark sexual history.",
    "They have a hidden source of income.",
    "They have a gambling addiction.",
    "They have a secret alliance with a rival.",
    "They have a history of self-harm.",
    "They have a criminal connection they're trying to hide.",
    "They have a history of stalking.",
    "They are concealing a mental or physical disability.",
    "They have a secret inheritance.",
    "They have a history of plagiarism or academic dishonesty.",
    "They are hiding a secret society membership.",
    "They have a hidden supernatural ability.",
    "They have a history of animal abuse.",
    "They are hiding a gambling addiction.",
    "They have a secret relationship with an enemy.",
    "They have a history of substance abuse.",
    "They are hiding a criminal accomplice.",
    "They have a dark obsession with a particular person or thing.",
    "They have a history of lying and deceit.",
    "They have a secret past as a spy or informant.",
    "They are hiding a medical condition that could impact their career or social status.",
    "They have a history of stealing intellectual property or trade secrets.",
    "They are hiding an illegitimate child from a former relationship.",
    "They have a dark side business.",
    "They have a hidden stash of money or valuable assets.",
    "They have a history of arson or property damage.",
    "They are hiding a secret group membership.",
    "They have a hidden supernatural curse.",
    "They have a history of blackmailing others.",
    "They have a secret weapon or piece of technology.",
    "They have a hidden relationship with an antagonist.",
    "They have a history of cyberstalking or online harassment.",
    "They are hiding a mental breakdown.",
    "They have a dark sexual fetish they're ashamed of.",
    "They have a hidden religious affiliation.",
    "They have a history of corporate espionage.",
    "They are hiding a secret biological parentage.",
    "They have a dark history of cult involvement.",
    "They have a hidden political affiliation.",
    "They have a history of stalking and obsession with a public figure.",
    "They have a secret laboratory or experimental project.",
    "They have a hidden vigilante alter ego.",
    "They have a history of arson or fire-related crimes.",
    "They are hiding a secret organization membership.",
    "They have a dark past as an assassin or hitman.",
    "They have a hidden list of enemies.",
    "They have a history of identity theft." ];


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
