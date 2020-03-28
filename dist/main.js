/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./js/board.js */ \"./src/js/board.js\");\nconst Grid = __webpack_require__(/*! ./js/grid.js */ \"./src/js/grid.js\");\nconst Tree = __webpack_require__(/*! ./js/tree.js */ \"./src/js/tree.js\");\nconst BFS = __webpack_require__(/*! ./js/bfs.js */ \"./src/js/bfs.js\");\nconst Visualize = __webpack_require__(/*! ./js/visualize.js */ \"./src/js/visualize.js\");\n\nlet origin = [25, 25];\nlet destination = [5, 5]\n\nlet b1 = new Board(30, 30);\nlet grid = new Grid(30, 30);\nb1.makeRows(origin, destination);\n\nconst makeDraggablePoints= () => {\n    const originPoint = document.getElementById(\"origin\");\n    const destinationPoint = document.getElementById(\"destination\");\n    const gridItems = document.getElementsByClassName(\"grid-items\")[0];\n\n    gridItems.addEventListener(\"touchstart\", dragStart, false);\n    gridItems.addEventListener(\"touchend\", dragEnd, false);\n    gridItems.addEventListener(\"touchmove\", drag, false);\n    gridItems.addEventListener(\"mousedown\", dragStart, false);\n    gridItems.addEventListener(\"mouseup\", dragEnd, false);\n    gridItems.addEventListener(\"mousemove\", drag, false);\n\n    let active;\n    let targetNode;\n    let wallActive;\n\n    function dragStart(e) {\n        e.preventDefault();\n        if (e.target.parentNode === originPoint || e.target.parentNode === destinationPoint) {\n            targetNode = e.target.parentNode;\n            active = true;\n        } else {\n            wallActive = true;\n        }\n    }\n\n    function dragEnd(e) {\n        e.preventDefault();\n        if(active === true) {\n            active = false\n        } else if (wallActive === true){\n            wallActive = false;\n        }\n    }\n\n    function drag(e) {\n        e.preventDefault();\n        if (active) {\n            if (e.type === \"mousemove\" && e.target.classList.contains(\"grid-item\")) {\n                const currentNode = e.target;\n                currentNode.appendChild(targetNode);\n                if (targetNode.id === \"origin\" && currentNode.id !== \"destination\") {\n                    origin = currentNode.id.split(\"-\")\n                } else if (targetNode.id === \"destination\" && currentNode.id !== \"origin\"){\n                    destination = currentNode.id.split(\"-\");\n                }\n            }\n        } else if (wallActive){\n            if (e.type === \"mousemove\" && e.target.classList.contains(\"grid-item\")){\n                const currentNode = e.target;\n                if (currentNode.classList.contains(\"wall\")){\n                    grid.getTile(currentNode.id.split(\"-\")).className = \"\";\n                    currentNode.classList.remove(\"wall\");\n                } else if (currentNode.firstChild && (currentNode.firstChild.id !== \"destination\" || currentNode.firstChild.id !== \"origin\")){\n                }else{\n                    currentNode.classList.add(\"wall\");\n                    grid.getTile(currentNode.id.split(\"-\")).className = \"wall\"\n                }\n            }\n        }\n    }\n}\n\nmakeDraggablePoints();\n\ndocument.getElementsByClassName(\"run-path-finder\")[0].addEventListener('click', (e)=>{\n    e.preventDefault();\n    const tree = new Tree(grid, origin);\n    tree.createTree(tree.startTile);\n\n    const bfs = new BFS(tree.startTile, destination);\n    const travelPath = bfs.createPathBack();\n    const visualize = new Visualize(bfs.orderedTravesal, travelPath, 4);\n    document.getElementById(\"origin\").childNodes[0].className = \"origin-marker origin-marker-ran bounce\";\n    document.getElementById(\"origin\").childNodes[1].className = \"\";\n\n    console.log(document.getElementById(\"origin\").firstChild)\n\n    visualize.visualizeAlgorithm();\n    document.getElementById(\"destination\").childNodes[0].className = \"destination-marker destination-marker-ran bounce\";\n    document.getElementById(\"destination\").childNodes[1].className = \"\";\n\n    e.currentTarget.disabled = \"disabled\";\n    document.getElementsByClassName(\"reset-path-finder\")[0].disabled = \n    \"disabled\";\n})\n\ndocument.getElementsByClassName(\"reset-path-finder\")[0].addEventListener('click', (e) => {\n    e.preventDefault();\n    b1.removeChildNodes();\n    origin = [25, 25];\n    destination = [5, 5]\n    b1.makeRows(origin, destination);\n    grid = new Grid(30, 30);\n    makeDraggablePoints();\n})\n\n// pointer move\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/bfs.js":
/*!***********************!*\
  !*** ./src/js/bfs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class BFS {\n    constructor(root, endPos) {\n        this.root = root;\n        this.endPos = endPos;\n        this.orderedTravesal = [];\n        this.travelPath = [];\n    }\n\n    breadthFirstSearch() {\n        let queue = [this.root];\n        let endTile;\n        while (queue.length > 0) {\n            const curTile = queue.shift();\n\n            this.orderedTravesal.push(curTile.pos);\n            if (curTile.pos.toString() === this.endPos.toString()) {\n                endTile = curTile;\n                break;\n            }\n            queue = queue.concat(curTile.children);\n        }\n\n        return endTile;\n    }\n\n    createPathBack() {\n        const traversal = this.breadthFirstSearch();\n        let currentNode = traversal;\n        this.travelPath.push(currentNode.pos);\n\n        while (currentNode !== this.root) {\n            this.travelPath.push(currentNode.parent.pos);\n            currentNode = currentNode.parent;\n        }\n\n        return this.travelPath;\n    }\n}\n\nmodule.exports = BFS;\n\n\n//# sourceURL=webpack:///./src/js/bfs.js?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n    constructor(row, col) {\n        this.rowLen = row;\n        this.colLen = col;\n    }\n\n    makeRows(origin, destination) {\n        const container = document.getElementsByClassName('board-container')[0]\n        const row = document.createElement('div');\n        row.className = 'grid-items';\n        container.appendChild(row);\n\n        const [originX, originY] = origin;\n        const [destX, destY] = destination;\n\n        for (let i = 0; i < this.rowLen; i += 1) {\n            for (let j = 0; j < this.colLen; j += 1) {\n                \n                const cell = document.createElement('div');\n                cell.className = 'grid-item';\n                row.appendChild(cell);\n                cell.id = `${i}-${j}`;\n\n                if (i === originX && j == originY){\n                    const origin = document.createElement('div');\n                    origin.id = 'origin';\n                    cell.appendChild(origin);\n\n                    const originPin = document.createElement('div');\n                    originPin.className = 'origin-marker bounce';\n                    origin.appendChild(originPin);\n    \n                    const originPulse = document.createElement('div');\n                    originPulse.className = 'origin-pulsate';\n                    origin.appendChild(originPulse);\n                }\n\n                if (i === destX && j == destY) {\n                    const destination = document.createElement('div');\n                    destination.id = 'destination';\n                    cell.appendChild(destination);\n\n                    const destinationPin = document.createElement('div');\n                    destinationPin.className = 'destination-marker bounce';\n                    destination.appendChild(destinationPin);\n\n                    const destinationPulse = document.createElement('div');\n                    destinationPulse.className = 'destination-pulsate';\n                    destination.appendChild(destinationPulse);\n                }\n            }\n        };\n    }\n\n    removeChildNodes(){\n        const container = document.getElementsByClassName('board-container')[0]\n        container.removeChild(container.lastChild);\n    }\n\n    addSomeTilesClasses() {\n        const classes = ['start-tile', 'target-tile', 'unvisited-tile', 'wall-tile', 'shortest-path-tile', 'visited-tile'];\n\n        for (let i = 0; i < this.rowLen; i += 3) {\n            for (let j = 0; j < this.colLen; j += 3) {\n                const curEl = document.getElementById(`${i}-${j}`);\n                // const ranNum = (Math.floor((Math.random() * 10) / 1));\n                // curEl.classList.add(classes[ranNum]);\n            }\n        }\n    }\n}\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/js/board.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Tile = __webpack_require__(/*! ./tile.js */ \"./src/js/tile.js\");\n\nclass Grid {\n    constructor(row, col) {\n        // baseline settup - nothing before here\n        this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));\n        this.row = row;\n        this.col = col;\n\n        // secondary setup\n        this.placeTiles();\n    }\n\n    placeTiles() {\n        for (let i = 0; i < this.row; i += 1) {\n            for (let j = 0; j < this.col; j += 1) {\n                const newTile = new Tile([i, j]);\n                this.board[i][j] = newTile;\n            }\n        }\n    }\n\n    placeStartTile(pos) {\n        const tile = this.getTile(pos);\n        tile.addClassName(\"origin-marker bounce origin-pulsate\")\n    }\n\n    placeEndTile(pos) {\n        const tile = this.getTile(pos);\n        tile.addClassName(\"destination-marker bounce destination-pulsate\")\n    }\n\n    getTile(pos) {\n        const row = pos[0];\n        const col = pos[1];\n        const tile = this.board[row][col];\n        return tile;\n    }\n\n    validPos(pos) {\n        \n        const pX = pos[0];\n        const pY = pos[1];\n        if (pX < this.row && pY < this.col && pX >= 0 && pY >= 0) {\n            return true;\n        }\n        return false;\n    }\n\n    adjacentTiles(pos) {\n        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n        const adjTiles = [];\n        const pX = pos[0];\n        const pY = pos[1];\n\n        for (let i = 0; i < deltas.length; i += 1) {\n            const delt = deltas[i];\n            const dX = delt[0];\n            const dY = delt[1];\n            const newPosX = pX + dX;\n            const newPosY = pY + dY;\n            const newPos = [newPosX, newPosY];\n            if (this.validPos(newPos)) {\n                adjTiles.push(newPos);\n            }\n        }\n        return adjTiles;\n    }\n\n    randomPosGenerator() {\n        const row = Math.floor(Math.random() * this.row);\n        const col = Math.floor(Math.random() * this.col);\n        return [row, col];\n    }\n}\n\nmodule.exports = Grid;\n\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/tile.js":
/*!************************!*\
  !*** ./src/js/tile.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Tile {\n    constructor(pos) {\n        this.parent = null;\n        this.children = [];\n        this.className = \"\";\n        this.pos = pos;\n    }\n\n    addClassName(name) {\n        let classNameArr = this.className.split(\" \")\n        classNameArr.push(name);\n        this.className = classNameArr.join(\" \");\n        return this.className;\n    }\n\n    removeClassName (name){\n        let newClassName = this.className.split(\" \").filter((className)=> className !== name).join(\" \");\n        this.className = newClassName;\n        return newClassName;\n    }\n\n    assignParent(node = null) {\n        if (node === null) {\n            this.parent = null;\n            return null;\n        }\n        if (this.parent !== null) {\n            this.deleteSelfFromParentChildren(this.parent);\n        }\n        if (!node.children.includes(this)) {\n            node.children.push(this);\n        }\n        this.parent = node;\n        return node;\n    }\n\n    deleteSelfFromParentChildren(p) {\n        const parent = p;\n        for (let i = 0; i < parent.children.length; i++) {\n            if (parent.children[i] === this) {\n                const left = parent.children.slice(0, i);\n                const right = parent.children.slice(i + 1);\n                const newChildren = left.concat(right);\n                parent.children = newChildren;\n                return parent.children;\n            }\n        }\n        return -1;\n    }\n}\n\nmodule.exports = Tile;\n\n\n//# sourceURL=webpack:///./src/js/tile.js?");

/***/ }),

/***/ "./src/js/tree.js":
/*!************************!*\
  !*** ./src/js/tree.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Tree {\n    constructor(grid, startPos) {\n        this.grid = grid;\n\n        this.visited = new Set;\n        this.orderedVisit = [];\n        this.startPos = startPos;\n        this.startTile = this.grid.getTile(this.startPos);\n        this.grid.placeStartTile(this.startPos);\n    }\n\n    validPos(pos) {\n        if( this.grid.getTile(pos).className === \"wall\"){\n            return false;\n        }\n        if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {\n            return true;\n        }\n        return false;\n    }\n\n    createTree() {\n        const queue = [this.startTile];\n        this.visited.add(this.startTile.pos.toString());\n\n        while (!queue.length < 1) {\n            const curTile = queue.shift();\n            const tiles = this.grid.adjacentTiles(curTile.pos);\n            for (let i = 0; i < tiles.length; i++) {\n                if (this.validPos(tiles[i])) {\n                    const tile = this.grid.getTile(tiles[i]);\n                    tile.assignParent(curTile);\n                    queue.push(tile);\n                    this.visited.add(tile.pos.toString());\n                }\n            }\n        }\n    }\n}\n\nmodule.exports = Tree;\n\n\n//# sourceURL=webpack:///./src/js/tree.js?");

/***/ }),

/***/ "./src/js/visualize.js":
/*!*****************************!*\
  !*** ./src/js/visualize.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Visualize {\n    constructor(orderedTravesal, travelPath, timeout = 50) {\n        this.orderedTravesal = orderedTravesal;\n        this.travelPath = travelPath;\n        this.traversed = [];\n        this.timeout = timeout;\n    }\n\n    visualizeAlgorithm() {\n        const visited = \"visited\"\n        let i = 0;\n\n        const loopStep = () => {\n            if (i === this.orderedTravesal.length) {\n                this.visualizeTravelPath();\n                document.getElementsByClassName(\"run-path-finder\")[0].disabled = false\n                document.getElementsByClassName(\"reset-path-finder\")[0].disabled = false\n                return;\n            }\n            \n            const nextPos = this.orderedTravesal[i].parsePos();\n\n            setTimeout(() => {\n                const tile = document.getElementById(nextPos);\n                tile.classList.add(visited);\n                this.traversed.push(nextPos);\n                loopStep();\n                i += 1;\n            }, this.timeout);\n        };\n        loopStep();\n    }\n\n    visualizeTravelPath() {\n        let i = 0;\n        const loopStep = () => {\n            if (i === this.travelPath.length) {\n                return;\n            }\n            const nextPos = this.travelPath[i].parsePos();\n            setTimeout(() => {\n                const tile = document.getElementById(nextPos);\n                tile.classList.add(\"shortest-path\");\n                loopStep();\n                i += 1;\n            }, this.timeout);\n        };\n        loopStep();\n    }\n}\n\nArray.prototype.parsePos = function () {\n    const x = this[0];\n    const y = this[1];\n\n    return `${x}-${y}`;\n};\n\nmodule.exports = Visualize;\n\n\n//# sourceURL=webpack:///./src/js/visualize.js?");

/***/ })

/******/ });