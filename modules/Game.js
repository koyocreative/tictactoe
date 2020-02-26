import Board from './Board.js';

class Game {
	constructor( player1, player2, state) {
		this.player1 = player1
		this.player2 = player2
		this.state = state

		this.mark = "X"
		this.gg = false

		this.boxes = document.querySelectorAll('.box')
        this.addListener()

        this.response = document.querySelector('#response')
	
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
		if( this.isEmpty(box) && this.gg == false) {
            let pos = box.id.split('')
                    
			this.state.setState(pos[0], pos[1], this.currentPlayer())
			console.log(this.state.getState())
			box.innerHTML = this.currentPlayer()

			this.gameOver() 
            
		}
	}

	getWinner(winner) {
		if(winner == "X") {
			return `Player1: ${this.player1.name} have won the game`;
		} else if( winner == "O") {
			return `Player2: ${this.player2.name} have won the game`;
		} else if( winner == 'Draw') {
			return `Game is Draw!`;
		} 
	}

	nextTurn() {
		return this.mark === "X" ? this.mark = "O" : this.mark = "X"
	}

	isEmpty(box) {
		return box.innerHTML === '' ? true : false
	}

	isFull() {
		let isFull = true;
		this.boxes.forEach( (box) => {
			if( box.innerHTML == '' )  isFull = false ;
		})

		return isFull
	}

	gameOver() {

		let curState = this.state.getState()
		
		if( !this.isFull() ) {
			switch( true ) {
				case curState[0][0] === this.mark && curState[0][1] === this.mark && curState[0][2] === this.mark :
				case curState[1][0] === this.mark && curState[1][1] === this.mark && curState[1][2] === this.mark :
				case curState[2][0] === this.mark && curState[2][1] === this.mark && curState[2][2] === this.mark :

				case curState[0][0] === this.mark && curState[1][1] === this.mark && curState[2][2] === this.mark :
				case curState[0][2] === this.mark && curState[1][1] === this.mark && curState[2][0] === this.mark :

				case curState[0][0] === this.mark && curState[1][0] === this.mark && curState[2][0] === this.mark :
				case curState[0][1] === this.mark && curState[1][1] === this.mark && curState[2][1] === this.mark :
				case curState[0][2] === this.mark && curState[1][2] === this.mark && curState[2][2] === this.mark :
					this.gg = true;
					response.innerHTML = this.getWinner(this.mark)

				default: 
					this.nextTurn();					
			}
		} else {
			return response.innerHTML = this.getWinner('Draw');
		}
	}
}

export default Game