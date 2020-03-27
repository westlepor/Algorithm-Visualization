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

eval("// make board\n// give board to virtual tree to make virtualTree\n// get orderTraversal from bfs by giving it root of virtual tree\n// get pathBack from BFS\nconst Board = __webpack_require__(/*! ./js/board.js */ \"./src/js/board.js\");\nconst Grid = __webpack_require__(/*! ./js/grid.js */ \"./src/js/grid.js\");\n// const VirtualTree = require('./js/virtualTree.js');\n// const ReturnP = require('./js/pso.js')\n// const Visualize = require('./js/visualize.js');\n// const BFS = require('./js/bfs.js');\n// const UserController = require('./js/controllerUI/userController.js')\n\n\nconst origin = [5,5];\nconst destination = [25,25]\nconst b1 = new Board(30, 30);\nb1.makeRows(origin, destination);\n\n// b1.addSomeTilesClasses();\n// const controller = new UserController()\n\n\n\n// function spotTest() {\n\n//   const grid = new Grid(30, 75);\n//   const virtualTree = new VirtualTree(grid, [15, 37]);\n\n//   //-----------------------------\n//   //BFS ALGORITHM\n//   const t = virtualTree.createTree(virtualTree.startTile);\n//   const b = new BFS(virtualTree.startTile, [6, 6]);\n//   const travelPath = b.createPathBack();\n//   //------------------------------\n\n//   const visualize = new Visualize(b.orderedTravesal, travelPath, 5);\n  \n//   visualize.visualizeAlgorithm();\n\n// }\n\n\n// spotTest();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n    constructor(row, col) {\n        this.rowLen = row;\n        this.colLen = col;\n    }\n\n    makeRows(origin, destination) {\n        const container = document.getElementsByClassName('board-container')[0]\n        const row = document.createElement('div');\n        row.className = 'grid-items';\n        container.appendChild(row);\n\n        const [originX, originY] = origin;\n        const [destX, destY] = destination;\n\n        for (let i = 0; i < this.rowLen; i += 1) {\n            for (let j = 0; j < this.colLen; j += 1) {\n                \n                const cell = document.createElement('div');\n                cell.className = 'grid-item';\n                row.appendChild(cell);\n                cell.id = `${i}-${j}`;\n\n                if (i === originX && j == originY){\n                    const originPin = document.createElement('div');\n                    originPin.className = 'origin-marker bounce';\n                    cell.appendChild(originPin);\n    \n                    const originPulse = document.createElement('div');\n                    originPulse.className = 'origin-pulsate';\n                    cell.appendChild(originPulse);\n                }\n\n                if (i === destX && j == destY) {\n                    const pin = document.createElement('div');\n                    pin.className = 'destination-marker bounce';\n                    cell.appendChild(pin);\n\n                    const pulse = document.createElement('div');\n                    pulse.className = 'destination-pulsate';\n                    cell.appendChild(pulse);\n                }\n            }\n        };\n    }\n\n    addSomeTilesClasses() {\n        const classes = ['start-tile', 'target-tile', 'unvisited-tile', 'wall-tile', 'shortest-path-tile', 'visited-tile'];\n\n        for (let i = 0; i < this.rowLen; i += 3) {\n            for (let j = 0; j < this.colLen; j += 3) {\n                const curEl = document.getElementById(`${i}-${j}`);\n                // const ranNum = (Math.floor((Math.random() * 10) / 1));\n                // curEl.classList.add(classes[ranNum]);\n            }\n        }\n    }\n}\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/js/board.js?");

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TreeTile = __webpack_require__(/*! ./treetile.js */ \"./src/js/treetile.js\");\n\nclass Grid {\n    constructor(row, col) {\n        // baseline settup - nothing before here\n        this.board = new Array(row).fill(null).map(() => new Array(col).fill(null));\n        this.height = row;\n        this.width = col;\n\n        // secondary setup\n        this.placeTiles();\n    }\n\n    placeTiles() {\n        for (let i = 0; i < this.height; i += 1) {\n            for (let j = 0; j < this.width; j += 1) {\n                const newTile = new TreeTile([i, j], 'fourtwenty');\n                this.board[i][j] = newTile;\n            }\n        }\n    }\n\n    randomPosGenerator() {\n        const row = Math.floor(Math.random() * this.height);\n        const col = Math.floor(Math.random() * this.width);\n        return [row, col];\n    }\n\n    placeStartTile(pos) {\n        const tile = this.getTile(pos);\n        tile.color = 'white';\n    }\n\n    getTile(pos) {\n        const row = pos[0];\n        const col = pos[1];\n        const tile = this.board[row][col];\n        return tile;\n    }\n\n    validPos(pos) {\n        const pX = pos[0];\n        const pY = pos[1];\n        if (pX < this.height && pY < this.width && pX >= 0 && pY >= 0) {\n            return true;\n        }\n        return false;\n    }\n\n    adjacentTiles(pos) {\n        const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n        const adjTiles = [];\n        const pX = pos[0];\n        const pY = pos[1];\n\n        for (let i = 0; i < deltas.length; i += 1) {\n            const delt = deltas[i];\n            const dX = delt[0];\n            const dY = delt[1];\n            const newPosX = pX + dX;\n            const newPosY = pY + dY;\n            const newPos = [newPosX, newPosY];\n            if (this.validPos(newPos)) {\n                adjTiles.push(newPos);\n            }\n        }\n        return adjTiles;\n    }\n}\n\n\nmodule.exports = Grid;\n\n\n//# sourceURL=webpack:///./src/js/grid.js?");

/***/ }),

/***/ "./src/js/treetile.js":
/*!****************************!*\
  !*** ./src/js/treetile.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class TreeTile {\n    constructor(pos, color) {\n        this.parent = null;\n        this.children = [];\n        this.color = color;\n        this.pos = pos;\n    }\n\n    changeColor(newColor) {\n        this.color = newColor;\n        return newColor;\n    }\n\n    assignParent(node = null) {\n        if (node === null) {\n            this.parent = null;\n            return null;\n        }\n\n        if (this.parent !== null) {\n            this.deleteSelfFromParentChildren(this.parent);\n        }\n        if (!node.children.includes(this)) {\n            node.children.push(this);\n        }\n        this.parent = node;\n        return node;\n    }\n\n    deleteSelfFromParentChildren(p) {\n        const parent = p;\n        for (let i = 0; i < parent.children.length; i += 1) {\n            if (parent.children[i] === this) {\n                const left = parent.children.slice(0, i);\n                const right = parent.children.slice(i + 1);\n                const newChildren = left.concat(right);\n                parent.children = newChildren;\n                return parent.children;\n            }\n        }\n        return -1;\n    }\n}\n\nmodule.exports = TreeTile;\n\n\n//# sourceURL=webpack:///./src/js/treetile.js?");

/***/ })

/******/ });