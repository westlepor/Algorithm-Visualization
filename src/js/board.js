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
                    const origin = document.createElement('div');
                    origin.id = 'origin';
                    cell.appendChild(origin);

                    const originPin = document.createElement('div');
                    originPin.className = 'origin-marker bounce';
                    origin.appendChild(originPin);
    
                    const originPulse = document.createElement('div');
                    originPulse.className = 'origin-pulsate';
                    origin.appendChild(originPulse);
                }

                if (i === destX && j == destY) {
                    const destination = document.createElement('div');
                    destination.id = 'destination';
                    cell.appendChild(destination);

                    const destinationPin = document.createElement('div');
                    destinationPin.className = 'destination-marker bounce';
                    destination.appendChild(destinationPin);

                    const destinationPulse = document.createElement('div');
                    destinationPulse.className = 'destination-pulsate';
                    destination.appendChild(destinationPulse);
                }
            }
        };
    }

    removeChildNodes(){
        const container = document.getElementsByClassName('board-container')[0]
        container.removeChild(container.lastChild);
    }
}

module.exports = Board;
