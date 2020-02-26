import Game from './Game.js'
import State from './State.js'

class Board {
	constructor(boardID, state) {

        this.state = state;
        this.boardContainer = document.querySelector(boardID);
		this.boardContainer.innerHTML = this.createBoard();
		this.boxes = document.querySelectorAll('.box');
		document.querySelector('.restart').addEventListener('click', () => this.clear())
	}

	createBoard() {
		let html = '';

		html += `<div id='board'>`
		for( let i=0; i < 3; i++ ) {
			html += `<div class='row row-${i}'>`
			for(let x=0; x < 3; x++) {
				html += `<div class='box' id='${i}${x}'></div>`
			}
			html += `</div>`
		}
		html += `</div>`

		html += `		<div class="restart">Restart</div>
		<div id="response">
			
		</div>`
		return html;
    }

	clear() {
		this.boxes.forEach((box) => {
			box.innerHTML = ''
		})
		document.querySelector('#response').innerHTML = ''
		this.state.clearState()
	}
}

export default Board