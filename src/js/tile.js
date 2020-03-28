class Tile {
    constructor(pos) {
        this.parent = null;
        this.children = [];
        this.className = "";
        this.pos = pos;
    }

    addClassName(name) {
        let classNameArr = this.className.split(" ")
        classNameArr.push(name);
        this.className = classNameArr.join(" ");
        return this.className;
    }

    removeClassName (name){
        let newClassName = this.className.split(" ").filter((className)=> className !== name).join(" ");
        this.className = newClassName;
        return newClassName;
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
        for (let i = 0; i < parent.children.length; i++) {
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

module.exports = Tile;
