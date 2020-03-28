const Tile = require('./tile.js');

class Grid {
    constructor(row, col) {
        // baseline settup - nothing before here
        this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));
        this.row = row;
        this.col = col;

        // secondary setup
        this.placeTiles();
    }

    placeTiles() {
        for (let i = 0; i < this.row; i += 1) {
            for (let j = 0; j < this.col; j += 1) {
                const newTile = new Tile([i, j]);
                this.board[i][j] = newTile;
            }
        }
    }

    placeStartTile(pos) {
        const tile = this.getTile(pos);
        tile.addClassName("origin-marker bounce origin-pulsate")
    }

    placeEndTile(pos) {
        const tile = this.getTile(pos);
        tile.addClassName("destination-marker bounce destination-pulsate")
    }

    getTile(pos) {
        const row = pos[0];
        const col = pos[1];
        const tile = this.board[row][col];
        return tile;
    }

    validPos(pos) {
        
        const pX = pos[0];
        const pY = pos[1];
        if (pX < this.row && pY < this.col && pX >= 0 && pY >= 0) {
            return true;
        }
        return false;
    }

    adjacentTiles(pos) {
        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const adjTiles = [];
        const pX = pos[0];
        const pY = pos[1];

        for (let i = 0; i < deltas.length; i += 1) {
            const delt = deltas[i];
            const dX = delt[0];
            const dY = delt[1];
            const newPosX = pX + dX;
            const newPosY = pY + dY;
            const newPos = [newPosX, newPosY];
            if (this.validPos(newPos)) {
                adjTiles.push(newPos);
            }
        }
        return adjTiles;
    }

    randomPosGenerator() {
        const row = Math.floor(Math.random() * this.row);
        const col = Math.floor(Math.random() * this.col);
        return [row, col];
    }
}

module.exports = Grid;
