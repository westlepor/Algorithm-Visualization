class Board {
    constructor(row, col) {
        this.rowLen = row;
        this.colLen = col;
    }

    makeRows(origin, destination) {
        const container = document.getElementsByClassName('board-container')[0]
        const row = document.createElement('div');
        row.className = 'grid-items';
        container.appendChild(row);

        const [originX, originY] = origin;
        const [destX, destY] = destination;

        for (let i = 0; i < this.rowLen; i += 1) {
            for (let j = 0; j < this.colLen; j += 1) {
                
                const cell = document.createElement('div');
                cell.className = 'grid-item';
                row.appendChild(cell);
                cell.id = `${i}-${j}`;

                if (i === originX && j == originY){
                    const originPin = document.createElement('div');
                    originPin.className = 'origin-marker bounce';
                    cell.appendChild(originPin);
    
                    const originPulse = document.createElement('div');
                    originPulse.className = 'origin-pulsate';
                    cell.appendChild(originPulse);
                }

                if (i === destX && j == destY) {
                    const pin = document.createElement('div');
                    pin.className = 'destination-marker bounce';
                    cell.appendChild(pin);

                    const pulse = document.createElement('div');
                    pulse.className = 'destination-pulsate';
                    cell.appendChild(pulse);
                }
            }
        };
    }

    addSomeTilesClasses() {
        const classes = ['start-tile', 'target-tile', 'unvisited-tile', 'wall-tile', 'shortest-path-tile', 'visited-tile'];

        for (let i = 0; i < this.rowLen; i += 3) {
            for (let j = 0; j < this.colLen; j += 3) {
                const curEl = document.getElementById(`${i}-${j}`);
                // const ranNum = (Math.floor((Math.random() * 10) / 1));
                // curEl.classList.add(classes[ranNum]);
            }
        }
    }
}

module.exports = Board;
