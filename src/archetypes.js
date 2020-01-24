console.log("Arketyper funkar")

function BoxMold(i) {
    this.hit = null
    this.boat = false
    this.owner = null
    this.type = null
}

function Player(name) {
    this.name = name

    // Skapar antal båtar utifrån antalet i html-filen
    document.querySelectorAll("input[name=boats]").forEach((input) => this[input.id] = [])
}

function rules(boatType, playerToCheck) {
    const batar = [...document.querySelectorAll("input[name=boats]")]

    for (const bat of batar) {
        if (boatType === bat.id && players[playerToCheck][boatType].length === batar.indexOf(bat) + 1) {
            return true
        }
    }
}