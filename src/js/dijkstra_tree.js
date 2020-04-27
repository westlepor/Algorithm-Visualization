class DijkstraTree {
    constructor(grid, startPos, endPos) {
        this.grid = grid;
        this.visited = new Set;
        this.orderedVisit = [];
        this.startPos = startPos;
        this.endPos = endPos;
        this.startTile = this.grid.getTile(this.startPos);
        this.grid.placeStartTile(this.startPos);
        this.solvable = false;
        this.board = this.grid.board;
        this.distance = {} ;
    }

    validPos(pos) {
        if (this.grid.getTile(pos).className === "wall") {
            return false;
        }
        if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {
            return true;
        }
        return false;
    }

    buildDistance(){
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++){
                let curPos = [i, j];
                this.distance[curPos.toString()] = Infinity;
            }
        }
        this.distance[this.startPos.toString()] = 0;
    }

    findMinNode(queue){
        let minNode = queue[0];
        let min = this.distance[minNode];
        let minIdx = 0;

        for(let i = 0; i < queue.length; i++){
            let curNode = queue[i];
            if (min > this.distance[curNode]) {
                minNode = queue[i];
                minIdx = i;
                min = this.distance[minNode];
            }
        }
        queue.splice(minIdx, 1);

        return minNode;
    }

    createTree() {
        this.buildDistance();
        let queue = [this.startTile];
        this.visited.add(this.startTile.pos.toString());

        while (queue.length > 0) {
            const curTile = this.findMinNode(queue);
            const tiles = this.grid.adjacentTiles(curTile.pos);
            for (let i = 0; i < tiles.length; i++) {
                if (this.solvable === false && tiles[i].toString() === this.endPos.toString()) {
                    this.solvable = true;
                }

                if (this.validPos(tiles[i])) {
                    const tile = this.grid.getTile(tiles[i]);
                    queue.push(tile);
                    this.visited.add(tile.pos.toString());

                    let newDis = this.distance[curTile.pos] + 1;
                    let prevDis = this.distance[tile.pos.toString()];
                    if (prevDis > newDis){
                        this.distance[tile.pos.toString()] = newDis;
                        tile.assignParent(curTile);
                    }
                }
            }
        }
    }
}

module.exports = DijkstraTree;
