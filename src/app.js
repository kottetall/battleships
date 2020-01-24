console.log("App funkar")
let overview = []
buildGameArea()


const players = {
    playerOne: new Player("Alex"),
    playerTwo: new Player("Gunde")
}

document.querySelector(".resize").addEventListener("click", buildGameArea)

function buildGameArea() {
    const gridCols = document.querySelector(".gridCols").value
    const gamearea = document.querySelector(".gamearea")
    const boxSize = document.querySelector(".boxSize").value + "px"

    overview = []
    gamearea.innerHTML = ""

    gamearea.style.gridTemplateColumns = `repeat(${gridCols}, ${boxSize})`
    gamearea.dataset.gridCols = gridCols

    for (let i = 0; i < gridCols * gridCols; i++) {
        const box = document.createElement("div")
        box.className = "box"
        box.style.height = boxSize
        box.dataset.square = i
        // box.dataset.hit = null

        box.addEventListener("click", (e) => {
            const currentPlayer = players[document.querySelector("[name=player]:checked").id]
            const currentPlayerId = document.querySelector("[name=player]:checked").id


            if (document.querySelector("[name=type]:checked").id === "place") {
                placeBoat(e.target, currentPlayerId)
            } else {
                explodeBoat(e.target, currentPlayer)
            }

        })

        overview.push(new BoxMold(i))
        gamearea.append(box)
    }


    // const edgeIndexes = findingEdgeSquares(overview) //FIXME: Används för kontroll så båtar inte kolliderar med eller kommer utanför kanterna
}