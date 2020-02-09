class GameBoard {

	constructor(boardId, player1, player2) {
		this.boardId = boardId
		const board = document.querySelector(boardId);
		this.table = ['','','','','','','','',''];

		this.mark = "X"
		this.gg = false;

		this.player1 = player1;
		this.player2 = player2;
	}

	/* Check for the win*/
	getWinner(winner) {
		if(winner == "X") {
			return `Player1: ${this.player1.name} have won the game`;
		} else if( winner = "O") {
			return `Player2: ${this.player2.name} have won the game`;
		} else if( winner = 'Draw') {
			return `Game is Draw!`;
		} else {
			return '';
		}
	}




	gameOver() {
		// TODO: fix spaghetti code :P
		/*
			= vertical   ::	012 345	678

			= diagonal   :: 048 246

			= horizontal :: 036 147 258

		*/

		if( !this.isTableFull()) {
			switch( true ) {
				case this.table[0] === this.mark && this.table[1] === this.mark && this.table[2] === this.mark : 
				
				case this.table[3] === this.mark && this.table[4] === this.mark && this.table[5] === this.mark : 
			
				case this.table[6] === this.mark && this.table[7] === this.mark && this.table[8] === this.mark :
		
				case this.table[0] === this.mark && this.table[4] === this.mark && this.table[8] === this.mark :
	
				case this.table[2] === this.mark && this.table[4] === this.mark && this.table[6] === this.mark :
					
				case this.table[0] === this.mark && this.table[3] === this.mark && this.table[6] === this.mark :
		
				case this.table[1] === this.mark && this.table[4] === this.mark && this.table[7] === this.mark :
		
				case this.table[2] === this.mark && this.table[5] === this.mark && this.table[8] === this.mark :
					this.gg = true;
					return this.getWinner(this.mark); 
					break;

				default:
					this.nextTurn();
					return '';
					break;
			}
			
		}

		
	}

	isTableFull() {
		// returns true if table is full
		return this.table.every( (value) => value !== '');
	}

	nextTurn() {
		return this.mark === "X" ? this.mark = "O" : this.mark = "X";	
	}

	isEmpty(box) {
		return box.innerHTML === '' ? true : false;
	}

	render() {
		let html = ''
		let i = 0;
		this.table.forEach( function(box) {
			html += `<li data-id="${i++}">${box}</li>`;
		}); 
		board.innerHTML = html;
		this.addListener();
	}

	clickEvent(box) {

		if( this.isEmpty(box) === true && this.gg == false ) {
			this.table[box.dataset.id] = this.mark;
			box.innerHTML = this.mark;

			document.querySelector('#response').innerHTML = this.gameOver();
		} 

	}

	addListener() {
		const boxes = document.querySelectorAll('#board li');

		boxes.forEach( (box) => {
			box.addEventListener('click', () => this.clickEvent(box));
		});
	}

	getTable() {
		return this.table;
	}

	clear() {
		this.gg = false;
		this.mark = "X";
		this.table = ['','','','','','','','',''];
		document.querySelector('#response').innerHTML = '';
		this.render();
	}
}

class Player {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

const jeff = new Player('Jeff');
const dick = new Player('Dick');

const game = new GameBoard('#board', jeff, dick);
game.render();


document.querySelector('.restart').addEventListener('click', function(){
	game.clear();
})