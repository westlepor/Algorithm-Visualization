class TreeTile {
    constructor(pos, color) {
        this.parent = null;
        this.children = [];
        this.color = color;
        this.pos = pos;
    }

    changeColor(newColor) {
        this.color = newColor;
        return newColor;
    }

    assignParent(node = null) {
        if (node === null) {
            this.parent = null;
            return null;
        }

        if (this.parent !== null) {
            this.deleteSelfFromParentChildren(this.parent);
        }
        if (!node.children.includes(this)) {
            node.children.push(this);
        }
        this.parent = node;
        return node;
    }

    deleteSelfFromParentChildren(p) {
        const parent = p;
        for (let i = 0; i < parent.children.length; i += 1) {
            if (parent.children[i] === this) {
                const left = parent.children.slice(0, i);
                const right = parent.children.slice(i + 1);
                const newChildren = left.concat(right);
                parent.children = newChildren;
                return parent.children;
            }
        }
        return -1;
    }
}

module.exports = TreeTile;
