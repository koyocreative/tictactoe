import Board from './Board.js';

class Game {
	constructor( player1, player2, state) {
		this.player1 = player1
		this.player2 = player2
		this.state = state

		this.mark = ""
		this.gg = false

		this.boxes = document.querySelectorAll('.box')
        this.addListener()

        this.nextTurn()
	
    }
    
    currentPlayer() {
        return this.mark
	}
	
	addListener() {

		this.boxes.forEach( (box) => {
			box.addEventListener('click', () => this.clickEvent(box));
		})
	}
	
    clickEvent(box) {
		if( this.isEmpty(box) ) {
            let pos = box.id.split('');
                    
			this.state.setState(pos[0], pos[1], this.currentPlayer());
            box.innerHTML = this.currentPlayer();
            this.nextTurn();
            
		}
	}

	getWinner(winner) {
		if( winner == "X" || winner == "O") {
			return `${this.player1.name} have won the game`
		} else if ( winner == "Draw") {
			return `Game is Draw`
		} else {
			return
		}
	}

	nextTurn() {
		return this.mark === "X" ? this.mark = "O" : this.mark = "X"
	}

	isEmpty(box) {
		return box.innerHTML === '' ? true : false
	}

	isFull() {
		
	}

	gameOver() {
		console.log(this.state)
		this.state.setState( 0, 0, 'fuck')
	}
}

export default Game