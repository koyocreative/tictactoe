import Player from './modules/Player.js';
import State from './modules/State.js';
import Board from './modules/Board.js';
import Game from './modules/Game.js';

let jeff = new Player('Jeff')
let boob = new Player('Boob')

let state = new State();
let board = new Board('#board-container', state);
let game = new Game(jeff, boob, state);