
const xo = new XO()
var table = 0
var turn = 0
var his__score = new Array()
xo.start()



function XO() {
    const board = new Board()
    const player = new Player(board)
    const ai = new Ai(board)
    let last = new Array()

    this.start = function () {

        if (document.getElementById("t5")) {
            console.log("5*5")
            table = 5
        }

        if (document.getElementById("t3")) {
            console.log("3*3")
            table = 3
        }

        const config = { childList: true }
        const observer = new MutationObserver(() => takeTurn())
        board.position.forEach((e) => observer.observe(e, config))
        takeTurn()
    }

    function takeTurn() {
        console.log(turn + " <<<")
        if (!board.checkWin()) {
            if (turn % 2 === 0) {
                player.takeTurn()
                last.push("Player")
            } else {
                ai.takeTurn()
                last.push("Ai")
            }
            turn++

        } else {
            let last__index = last.length - 1

            //console.log(last[last__index] + "<<<<<<<<<<<")
            if (last[last__index] == "Player") {
                var x = document.getElementById("scorePlayer")
                var score = parseInt(x.innerText)
                x.innerText = score + 1

            } else if (last[last__index] == "Ai") {
                var x = document.getElementById("scoreAi")
                var score = parseInt(x.innerText)
                x.innerText = score + 1
            }
            his__score.push(last[last__index])
            this.last = new Array()

            console.log(his__score)
            window.alert(last[last__index] + " Win")
        }




    }
}

function Board() {
    this.position = Array.from(document.querySelectorAll('.col'))
    console.log(this.position)

    this.checkWin = function () {
        let winner = false
        var dataWin = []
        if (table == 3) {
            dataWin = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]

            const position = this.position

            dataWin.forEach((e) => {
                const pos0 = position[e[0]].innerText
                const pos1 = position[e[1]].innerText
                const pos2 = position[e[2]].innerText

                const conditionWinPos = pos0 !== '' && pos0 === pos1 && pos1 === pos2

                if (conditionWinPos) {
                    winner = true
                    e.forEach((index) => {
                        position[index].className += ' hovers'
                    })
                }
            })
        } else {

            dataWin = [
                [0, 1, 2, 3],
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [6, 7, 8, 9],
                [10, 11, 12, 13],
                [11, 12, 13, 14],
                [15, 16, 17, 18],
                [16, 17, 18, 19],
                [20, 21, 22, 23],
                [21, 22, 23, 24],

                [0, 5, 10, 15],
                [5, 10, 15, 20],
                [1, 6, 11, 16],
                [6, 11, 16, 21],
                [2, 7, 12, 17],
                [7, 12, 17, 22],
                [3, 8, 13, 18],
                [8, 13, 18, 23],
                [4, 9, 14, 19],
                [9, 14, 19, 24],

                [3, 7, 11, 15],
                [4, 8, 12, 16],
                [8, 12, 16, 20],
                [9, 13, 17, 21],

                [1, 7, 13, 19],
                [0, 6, 12, 18],
                [6, 12, 18, 24],
                [5, 11, 17, 23]
            ]

            const position = this.position


            dataWin.forEach((e) => {
                const pos0 = position[e[0]].innerText
                const pos1 = position[e[1]].innerText
                const pos2 = position[e[2]].innerText
                const pos3 = position[e[3]].innerText
 
                const conditionWinPos = pos0 !== '' && pos0 === pos1 && pos1 === pos2 && pos2 === pos3

                if (conditionWinPos) {
                    winner = true
                    e.forEach((index) => {
                        position[index].className += ' hovers'
                    })
                }
            })
        }

        return winner
    }

}

function Player(board) {
    this.takeTurn = function () {
        console.log("Player")

        board.position.forEach(e => e.addEventListener('click', handleTurnTaken))

    }

    function handleTurnTaken(event) {
        console.log(event.target.innerText)
        if (event.target.innerText === 'x' || event.target.innerText === 'o') {
            //
        }
        else {
            event.target.innerText = 'x'
            event.target.classList.add('winner');
            board.position.forEach(e => e.removeEventListener('click', handleTurnTaken))
        }


    }

}

function Ai(board) {
    this.takeTurn = function () {
        try {
            console.log("Ai")
            //console.log("avaliable : "+ avaliablePos)
            const avaliablePos = board.position.filter((p) => p.innerText === '')


            const move = Math.floor(Math.random() * avaliablePos.length)
            avaliablePos[move].innerText = 'o'
        } catch (error) {
            window.alert("Tie!!")
            his__score.push("Tie")
        }

    }
}



function reset() {
    const cells = document.querySelectorAll('.col')
    //console.log(cells.length)

    cells.forEach((e) => {
        e.innerText = ''
        e.classList.remove('winner')
        e.classList.remove('hovers')
    })

    this.turn = 0
}

function score() {
    let score = ""

    let countLoop = 1
    his__score.forEach((e) => {
        if (e != "Tie") {

            score += "Round " + "[" + (countLoop) + "] " + "       " + e + " Win!\n"
        } else {
            score += "Round " + "[" + (countLoop) + "] " + "       " + e + " !!\n"
        }
        countLoop++
    })
    window.alert(score)
    countLoop = 1
}