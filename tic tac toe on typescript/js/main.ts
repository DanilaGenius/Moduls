const CIRCLE: string = '<div class="game__move-circle" id="circle"></div>';
const CROSS: string = '<div class="game__move-cross" id="cross"></div>';

const classNameForCircle: string = 'game__move-circle';
const classNameForCross: string = 'game__move-cross';

const gamingCells = document.querySelectorAll('[data-sell-state]')
const gamingField = document.querySelector('#field')

type gameType = {
    state: string,
    numPlayerForMove: number,
}

const game: gameType = {
    state: '',
    numPlayerForMove: 1,
}
gamingField.addEventListener('click', gamingMove)

function gamingMove(event) {
    const gamingCell:any = event.target
    if (gamingCell.getAttribute('data-sell-state') === 'circle' || gamingCell.getAttribute('data-sell-state') === 'cross' || gamingCell.id === 'active') {
        return
    }
    if (gamingCell.getAttribute('data-sell-state') === 'cell') {
        moveSelect(game.numPlayerForMove, gamingCell)
        game.numPlayerForMove++
        checkWin()
    }
}

function moveSelect(numPlayer:number, cell:any) {
    if (numPlayer%2 === 0) {
        cell.classList.add('game__move-circle')
        cell.setAttribute('data-sell-state', 'circle')
    } 
    if (numPlayer%2 > 0) {
        cell.classList.add('game__move-cross')
        cell.setAttribute('data-sell-state', 'cross')
    }

    
    
}

function gameStart() {
    game.numPlayerForMove = 1;
    game.state = 'play';
}

function gameStop() {
    game.state = 'stop';
}

function clearGamingField() {
    gamingCells.forEach((elem, index) => {
        elem.classList.remove('game__move-circle')
        elem.classList.remove('game__move-cross')
        elem.setAttribute('data-sell-state', 'cell')
    })
    game.state = '';
    game.numPlayerForMove = 1;
}

function gameFinish(player) {
   alert('win ' + player)
   clearGamingField()
}

function checkWin() {
    if (game.numPlayerForMove >= 10) {
        alert('draw')
        clearGamingField()
    }

    comboForWin([0,1,2], 'cross', 'crossPlayer')
    comboForWin([3,4,5], 'cross', 'crossPlayer')
    comboForWin([6,7,8], 'cross', 'crossPlayer')
    comboForWin([0,3,6], 'cross', 'crossPlayer')
    comboForWin([1,4,7], 'cross', 'crossPlayer')
    comboForWin([2,5,8], 'cross', 'crossPlayer')
    comboForWin([0,4,8], 'cross', 'crossPlayer')
    comboForWin([3,4,6], 'cross', 'crossPlayer')

    comboForWin([0,1,2], 'circle', 'circlePlayer')
    comboForWin([3,4,5], 'circle', 'circlePlayer')          
    comboForWin([6,7,8], 'circle', 'circlePlayer')         
    comboForWin([0,3,6], 'circle', 'circlePlayer')          
    comboForWin([1,4,7], 'circle', 'circlePlayer')
    comboForWin([2,5,8], 'circle', 'circlePlayer')
    comboForWin([0,4,8], 'circle', 'circlePlayer')
    comboForWin([3,4,6], 'circle', 'circlePlayer')
    
}

function comboForWin(arrCells, mark, nameWinner) {
    if (gamingCells[arrCells[0]].getAttribute('data-sell-state') === mark &&
        gamingCells[arrCells[1]].getAttribute('data-sell-state') === mark && 
        gamingCells[arrCells[2]].getAttribute('data-sell-state') === mark) {
            gameFinish(nameWinner); 
            return
    }
}

function waitBetweenMoves(time) {
    gamingField.removeEventListener('click', gamingMove)
    setTimeout(() => {gamingField.addEventListener('click', gamingMove)}, time)
}
