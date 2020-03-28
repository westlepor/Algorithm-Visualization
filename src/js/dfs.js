
class DFS {
    constructor(root, endPos) {
        this.root = root;
        this.endPos = endPos;
        this.orderedTravesal = [];
        this.travelPath = [];
    }

    // returns the node where the end point is!
    depthFirstSearch() {
        let queue = [this.root];
        let endTile;

        while (queue.length > 0) {
            const curTile = queue.shift();

            this.orderedTravesal.push(curTile.pos);
            if (curTile.pos.toString() === this.endPos.toString()) {
                endTile = curTile;
                break;
            }

            for (let i = curTile.children.length - 1; i >=0  ; i--){
                queue.unshift(curTile.children[i]);
            }
        }

        return endTile;
    }

    createPathBack() {
        const traversal = this.depthFirstSearch();
        let currentNode = traversal;
        this.travelPath.push(currentNode.pos);

        while (currentNode !== this.root) {
            this.travelPath.push(currentNode.parent.pos);
            currentNode = currentNode.parent;
        }

        return this.travelPath;
    }
}

module.exports = DFS;
