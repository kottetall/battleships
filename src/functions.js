console.log("Functions funkar")

function findAdversary(players, currentPlayerId) {
    return Object.keys(players).filter(player => player !== currentPlayerId).toString()
}

function explodeBoat(square, currentPlayer) {
    const currentSquare = overview[square.dataset.square]
    const boatType = currentSquare.type
    const currentPlayerId = currentSquare.owner

    console.log("Exploded")
    square.classList.add("exploded")

    currentSquare.hit = currentSquare.boat
    square.dataset.hit = currentSquare.hit

    if (currentSquare.hit) {
        console.log("träff")
        currentPlayer[boatType].push(currentSquare)
        const advesary = findAdversary(players, currentPlayerId)

        if (rules(boatType, advesary)) {
            console.log(`${boatType} sank with the final hit at square ${square.dataset.square}`)
        } else {
            console.log("You hut your own boat!")
        }
    } else {
        console.log("miss")
    }
}

function placeBoat(squareElm, currentPlayerId) {
    console.log("Placed")

    const currentSquareNumber = squareElm.dataset.square
    const boatType = document.querySelector("[name=boats]:checked").id

    overview[currentSquareNumber].boat = true
    overview[currentSquareNumber].type = boatType
    overview[currentSquareNumber].owner = currentPlayerId
}

function findingEdgeSquares(gamearea) {
    // Hittar de indexet(i overview) för de rutor som är längs kanterna/sidorna av spelplanen
    const totalSquares = gamearea.length
    const squaresPerSide = Math.sqrt(totalSquares)
    const edgeIndexes = []

    for (let i = 1; i <= totalSquares; i++) {
        if (i <= squaresPerSide || i > totalSquares - (squaresPerSide) && i <= totalSquares || i % squaresPerSide === 1 || i % squaresPerSide === 0) {
            edgeIndexes.push(i)
        }
    }

    return edgeIndexes.map(x => x - 1)
}