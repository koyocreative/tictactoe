class State {
    constructor() {
        this.state = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    }

    getState() {
        return this.state
    }

    setState( pos1, pos2, mark ) {
        this.state[pos1][pos2] = mark;
    }

    clearState() {
        this.state = [
            ['','',''],
            ['','',''],
            ['','','']
        ]
    }
}
export default State