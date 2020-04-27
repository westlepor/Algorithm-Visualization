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

var Run = __webpack_require__(/*! ./js/run.js */ "./src/js/run.js");

var run = new Run();
var modal = document.getElementById("modal");
var modalOverlay = document.getElementById("modal-overlay");
var closeButton = document.getElementById("modal-close-button");
var openButton = document.getElementById("modal-open-button");
closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

/***/ }),

/***/ "./src/js/bfs.js":
/*!***********************!*\
  !*** ./src/js/bfs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BFS = /*#__PURE__*/function () {
  function BFS(root, endPos) {
    _classCallCheck(this, BFS);

    this.root = root;
    this.endPos = endPos;
    this.orderedTravesal = [];
    this.travelPath = [];
  }

  _createClass(BFS, [{
    key: "breadthFirstSearch",
    value: function breadthFirstSearch() {
      var queue = [this.root];
      var endTile;

      while (queue.length > 0) {
        var curTile = queue.shift();
        this.orderedTravesal.push(curTile.pos);

        if (curTile.pos.toString() === this.endPos.toString()) {
          endTile = curTile;
          break;
        }

        queue = queue.concat(curTile.children);
      }

      return endTile;
    }
  }, {
    key: "createPathBack",
    value: function createPathBack() {
      var traversal = this.breadthFirstSearch();
      var currentNode = traversal;
      this.travelPath.push(currentNode.pos);

      while (currentNode !== this.root) {
        this.travelPath.push(currentNode.parent.pos);
        currentNode = currentNode.parent;
      }

      return this.travelPath;
    }
  }]);

  return BFS;
}();

module.exports = BFS;

/***/ }),

/***/ "./src/js/board.js":
/*!*************************!*\
  !*** ./src/js/board.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board = /*#__PURE__*/function () {
  function Board(row, col) {
    _classCallCheck(this, Board);

    this.rowLen = row;
    this.colLen = col;
  }

  _createClass(Board, [{
    key: "makeRows",
    value: function makeRows(origin, destination) {
      var container = document.getElementsByClassName('board-container')[0];
      var row = document.createElement('div');
      row.className = 'grid-items';
      container.appendChild(row);

      var _origin = _slicedToArray(origin, 2),
          originX = _origin[0],
          originY = _origin[1];

      var _destination = _slicedToArray(destination, 2),
          destX = _destination[0],
          destY = _destination[1];

      for (var i = 0; i < this.rowLen; i += 1) {
        for (var j = 0; j < this.colLen; j += 1) {
          var cell = document.createElement('div');
          cell.className = 'grid-item';
          row.appendChild(cell);
          cell.id = "".concat(i, "-").concat(j);

          if (i === originX && j == originY) {
            var _origin2 = document.createElement('div');

            _origin2.id = 'origin';
            cell.appendChild(_origin2);
            var originPin = document.createElement('div');
            originPin.className = 'origin-marker bounce';

            _origin2.appendChild(originPin);

            var originPulse = document.createElement('div');
            originPulse.className = 'origin-pulsate';

            _origin2.appendChild(originPulse);
          }

          if (i === destX && j == destY) {
            var _destination2 = document.createElement('div');

            _destination2.id = 'destination';
            cell.appendChild(_destination2);
            var destinationPin = document.createElement('div');
            destinationPin.className = 'destination-marker bounce';

            _destination2.appendChild(destinationPin);

            var destinationPulse = document.createElement('div');
            destinationPulse.className = 'destination-pulsate';

            _destination2.appendChild(destinationPulse);
          }
        }
      }

      ;
    }
  }, {
    key: "removeChildNodes",
    value: function removeChildNodes() {
      var container = document.getElementsByClassName('board-container')[0];
      container.removeChild(container.lastChild);
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),

/***/ "./src/js/dfs.js":
/*!***********************!*\
  !*** ./src/js/dfs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DFS = /*#__PURE__*/function () {
  function DFS(root, endPos) {
    _classCallCheck(this, DFS);

    this.root = root;
    this.endPos = endPos;
    this.orderedTravesal = [];
    this.travelPath = [];
  }

  _createClass(DFS, [{
    key: "depthFirstSearch",
    value: function depthFirstSearch() {
      var queue = [this.root];
      var endTile;

      while (queue.length > 0) {
        var curTile = queue.shift();
        this.orderedTravesal.push(curTile.pos);

        if (curTile.pos.toString() === this.endPos.toString()) {
          endTile = curTile;
          break;
        }

        for (var i = curTile.children.length - 1; i >= 0; i--) {
          queue.unshift(curTile.children[i]);
        }
      }

      return endTile;
    }
  }, {
    key: "createPathBack",
    value: function createPathBack() {
      var traversal = this.depthFirstSearch();
      var currentNode = traversal;
      this.travelPath.push(currentNode.pos);

      while (currentNode !== this.root) {
        this.travelPath.push(currentNode.parent.pos);
        currentNode = currentNode.parent;
      }

      return this.travelPath;
    }
  }]);

  return DFS;
}();

module.exports = DFS;

/***/ }),

/***/ "./src/js/dijkstra.js":
/*!****************************!*\
  !*** ./src/js/dijkstra.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dijkstras = /*#__PURE__*/function () {
  function Dijkstras(root, endPos) {
    _classCallCheck(this, Dijkstras);

    this.root = root;
    this.endPos = endPos;
    this.orderedTravesal = [];
    this.travelPath = [];
  }

  _createClass(Dijkstras, [{
    key: "dijkstrasSearch",
    value: function dijkstrasSearch() {
      var queue = [this.root];
      var endTile;

      while (queue.length > 0) {
        var curTile = queue.shift();
        this.orderedTravesal.push(curTile.pos);

        if (curTile.pos.toString() === this.endPos.toString()) {
          endTile = curTile;
          break;
        }

        queue = queue.concat(curTile.children);
      }

      return endTile;
    }
  }, {
    key: "createPathBack",
    value: function createPathBack() {
      var traversal = this.dijkstrasSearch();
      var currentNode = traversal;
      this.travelPath.push(currentNode.pos);

      while (currentNode !== this.root) {
        this.travelPath.push(currentNode.parent.pos);
        currentNode = currentNode.parent;
      }

      return this.travelPath;
    }
  }]);

  return Dijkstras;
}();

module.exports = Dijkstras;

/***/ }),

/***/ "./src/js/dijkstra_tree.js":
/*!*********************************!*\
  !*** ./src/js/dijkstra_tree.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DijkstraTree = /*#__PURE__*/function () {
  function DijkstraTree(grid, startPos, endPos) {
    _classCallCheck(this, DijkstraTree);

    this.grid = grid;
    this.visited = new Set();
    this.orderedVisit = [];
    this.startPos = startPos;
    this.endPos = endPos;
    this.startTile = this.grid.getTile(this.startPos);
    this.grid.placeStartTile(this.startPos);
    this.solvable = false;
    this.board = this.grid.board;
    this.distance = {};
  }

  _createClass(DijkstraTree, [{
    key: "validPos",
    value: function validPos(pos) {
      if (this.grid.getTile(pos).className === "wall") {
        return false;
      }

      if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {
        return true;
      }

      return false;
    }
  }, {
    key: "buildDistance",
    value: function buildDistance() {
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.board[0].length; j++) {
          var curPos = [i, j];
          this.distance[curPos.toString()] = Infinity;
        }
      }

      this.distance[this.startPos.toString()] = 0;
    }
  }, {
    key: "findMinNode",
    value: function findMinNode(queue) {
      var minNode = queue[0];
      var min = this.distance[minNode];
      var minIdx = 0;

      for (var i = 0; i < queue.length; i++) {
        var curNode = queue[i];

        if (min > this.distance[curNode]) {
          minNode = queue[i];
          minIdx = i;
          min = this.distance[minNode];
        }
      }

      queue.splice(minIdx, 1);
      return minNode;
    }
  }, {
    key: "createTree",
    value: function createTree() {
      this.buildDistance();
      var queue = [this.startTile];
      this.visited.add(this.startTile.pos.toString());

      while (queue.length > 0) {
        var curTile = this.findMinNode(queue);
        var tiles = this.grid.adjacentTiles(curTile.pos);

        for (var i = 0; i < tiles.length; i++) {
          if (this.solvable === false && tiles[i].toString() === this.endPos.toString()) {
            this.solvable = true;
          }

          if (this.validPos(tiles[i])) {
            var tile = this.grid.getTile(tiles[i]);
            queue.push(tile);
            this.visited.add(tile.pos.toString());
            var newDis = this.distance[curTile.pos] + 1;
            var prevDis = this.distance[tile.pos.toString()];

            if (prevDis > newDis) {
              this.distance[tile.pos.toString()] = newDis;
              tile.assignParent(curTile);
            }
          }
        }
      }
    }
  }]);

  return DijkstraTree;
}();

module.exports = DijkstraTree;

/***/ }),

/***/ "./src/js/grid.js":
/*!************************!*\
  !*** ./src/js/grid.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = __webpack_require__(/*! ./tile.js */ "./src/js/tile.js");

var Grid = /*#__PURE__*/function () {
  function Grid(row, col) {
    _classCallCheck(this, Grid);

    // baseline settup - nothing before here
    this.board = new Array(row).fill(null).map(function () {
      return new Array(col).fill(null);
    });
    this.row = row;
    this.col = col; // secondary setup

    this.placeTiles();
  }

  _createClass(Grid, [{
    key: "placeTiles",
    value: function placeTiles() {
      for (var i = 0; i < this.row; i += 1) {
        for (var j = 0; j < this.col; j += 1) {
          var newTile = new Tile([i, j]);
          this.board[i][j] = newTile;
        }
      }
    }
  }, {
    key: "placeStartTile",
    value: function placeStartTile(pos) {
      var tile = this.getTile(pos);
      tile.addClassName("origin-marker bounce origin-pulsate");
    }
  }, {
    key: "placeEndTile",
    value: function placeEndTile(pos) {
      var tile = this.getTile(pos);
      tile.addClassName("destination-marker bounce destination-pulsate");
    }
  }, {
    key: "getTile",
    value: function getTile(pos) {
      var row = pos[0];
      var col = pos[1];
      var tile = this.board[row][col];
      return tile;
    }
  }, {
    key: "validPos",
    value: function validPos(pos) {
      var pX = pos[0];
      var pY = pos[1];

      if (pX < this.row && pY < this.col && pX >= 0 && pY >= 0) {
        return true;
      }

      return false;
    }
  }, {
    key: "adjacentTiles",
    value: function adjacentTiles(pos) {
      var deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      var adjTiles = [];
      var pX = pos[0];
      var pY = pos[1];

      for (var i = 0; i < deltas.length; i += 1) {
        var delt = deltas[i];
        var dX = delt[0];
        var dY = delt[1];
        var newPosX = pX + dX;
        var newPosY = pY + dY;
        var newPos = [newPosX, newPosY];

        if (this.validPos(newPos)) {
          adjTiles.push(newPos);
        }
      }

      return adjTiles;
    }
  }, {
    key: "randomPosGenerator",
    value: function randomPosGenerator() {
      var row = Math.floor(Math.random() * this.row);
      var col = Math.floor(Math.random() * this.col);
      return [row, col];
    }
  }]);

  return Grid;
}();

module.exports = Grid;

/***/ }),

/***/ "./src/js/run.js":
/*!***********************!*\
  !*** ./src/js/run.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Board = __webpack_require__(/*! ./board.js */ "./src/js/board.js");

var Grid = __webpack_require__(/*! ./grid.js */ "./src/js/grid.js");

var Tree = __webpack_require__(/*! ./tree.js */ "./src/js/tree.js");

var DijkstraTree = __webpack_require__(/*! ./dijkstra_tree.js */ "./src/js/dijkstra_tree.js");

var BFS = __webpack_require__(/*! ./bfs.js */ "./src/js/bfs.js");

var DFS = __webpack_require__(/*! ./dfs.js */ "./src/js/dfs.js");

var Dijkstras = __webpack_require__(/*! ./dijkstra.js */ "./src/js/dijkstra.js");

var Visualize = __webpack_require__(/*! ./visualize.js */ "./src/js/visualize.js");

var Run = /*#__PURE__*/function () {
  function Run() {
    var _this = this;

    _classCallCheck(this, Run);

    this.origin = [5, 25];
    this.destination = [25, 5];
    this.board = new Board(30, 30);
    this.grid = new Grid(30, 30);
    this.board.makeRows(this.origin, this.destination);
    this.algorithm = "dijkstra";
    this.speed = "fast";
    this.selectAlgorithm();
    this.selectSpeed();
    this.makeDraggablePoints();
    this.runPathFinder();
    this.resetPathFinder();
    document.getElementsByClassName("generate-wall")[0].addEventListener("click", function (e) {
      e.preventDefault();

      _this.resetPathFinder();

      for (var i = 0; i < 5; i++) {
        _this.generateWall();
      }
    });
    document.getElementsByClassName("reset-path-finder")[0].addEventListener("click", this.resetPathFinder.bind(this));
  }

  _createClass(Run, [{
    key: "selectAlgorithm",
    value: function selectAlgorithm() {
      var _this2 = this;

      document.getElementsByClassName("run-path-select")[0].onchange = function (e) {
        _this2.algorithm = e.target.value;
      };
    }
  }, {
    key: "selectSpeed",
    value: function selectSpeed() {
      var _this3 = this;

      document.getElementsByClassName("run-path-speed")[0].onchange = function (e) {
        _this3.speed = e.target.value;
      };
    }
  }, {
    key: "makeDraggablePoints",
    value: function makeDraggablePoints() {
      var originPoint = document.getElementById("origin");
      var destinationPoint = document.getElementById("destination");
      var gridItems = document.getElementsByClassName("grid-items")[0];
      gridItems.addEventListener("touchstart", dragStart, false);
      gridItems.addEventListener("touchend", dragEnd, false);
      gridItems.addEventListener("touchmove", drag, false);
      gridItems.addEventListener("mousedown", dragStart, false);
      gridItems.addEventListener("mouseup", dragEnd, false);
      gridItems.addEventListener("mousemove", drag, false);
      var active;
      var targetNode;
      var wallActive;
      var that = this;

      function dragStart(e) {
        e.preventDefault();

        if (e.target.parentNode === originPoint || e.target.parentNode === destinationPoint) {
          targetNode = e.target.parentNode;
          active = true;
        } else {
          wallActive = true;
        }
      }

      function dragEnd(e) {
        e.preventDefault();

        if (active === true) {
          active = false;
        } else if (wallActive === true) {
          wallActive = false;
        }
      }

      function drag(e) {
        e.preventDefault();

        if (active) {
          if (e.type === "mousemove" && e.target.classList.contains("grid-item")) {
            var currentNode = e.target;
            currentNode.appendChild(targetNode);

            if (targetNode.id === "origin" && currentNode.id !== "destination") {
              that.origin = currentNode.id.split("-");
            } else if (targetNode.id === "destination" && currentNode.id !== "origin") {
              that.destination = currentNode.id.split("-");
            }
          }
        } else if (wallActive) {
          if (e.type === "mousemove" && e.target.classList.contains("grid-item")) {
            var _currentNode = e.target;

            if (_currentNode.firstChild && (_currentNode.firstChild.id === "destination" || _currentNode.firstChild.id === "origin")) {
              return;
            }

            if (_currentNode.classList.contains("visited") || _currentNode.classList.contains("shortest-path")) {
              return;
            }

            if (_currentNode.classList.contains("wall")) {
              that.grid.getTile(_currentNode.id.split("-")).className = "";

              _currentNode.classList.remove("wall");
            } else {
              _currentNode.classList.add("wall");

              that.grid.getTile(_currentNode.id.split("-")).className = "wall";
            }
          }
        }
      }
    }
  }, {
    key: "runPathFinder",
    value: function runPathFinder() {
      var _this4 = this;

      document.getElementsByClassName("run-path-finder")[0].addEventListener("click", function (e) {
        e.preventDefault();
        var tree;

        if (_this4.algorithm === "dijkstra") {
          tree = new DijkstraTree(_this4.grid, _this4.origin, _this4.destination);
        } else {
          tree = new Tree(_this4.grid, _this4.origin, _this4.destination);
        }

        tree.createTree(tree.startTile);

        if (tree.solvable === false) {
          alert("This is not solvable board. Please move your walls to make it solvable.");
          return;
        }

        var algo;

        if (_this4.algorithm === "BFS") {
          algo = new BFS(tree.startTile, _this4.destination);
        } else if (_this4.algorithm === "DFS") {
          algo = new DFS(tree.startTile, _this4.destination);
        } else if (_this4.algorithm === "dijkstra") {
          algo = new Dijkstras(tree.startTile, _this4.destination);
        }

        var speed;

        if (_this4.speed === "fast") {
          speed = 3;
        } else if (_this4.speed === "normal") {
          speed = 20;
        } else if (_this4.speed === "slow") {
          speed = 40;
        }

        var travelPath = algo.createPathBack();
        var visualize = new Visualize(algo.orderedTravesal, travelPath, speed);
        document.getElementById("origin").childNodes[0].className = "origin-marker origin-marker-ran bounce";
        document.getElementById("origin").childNodes[1].className = "";
        visualize.visualizeAlgorithm();
        document.getElementById("destination").childNodes[0].className = "destination-marker destination-marker-ran bounce";
        document.getElementById("destination").childNodes[1].className = "";
        e.currentTarget.disabled = "disabled";
        document.getElementsByClassName("reset-path-finder")[0].disabled = "disabled";
        document.getElementsByClassName("generate-wall")[0].disabled = "disabled";
      });
    }
  }, {
    key: "resetPathFinder",
    value: function resetPathFinder() {
      this.board.removeChildNodes();
      this.origin = [5, 25];
      this.destination = [25, 5];
      this.board.makeRows(this.origin, this.destination);
      this.grid = new Grid(30, 30);
      this.makeDraggablePoints();
    }
  }, {
    key: "generateWall",
    value: function generateWall() {
      var rowArr = Array.from({
        length: 30
      }, function () {
        return Math.floor(Math.random() * 30);
      });
      var colArr = Array.from({
        length: 30
      }, function () {
        return Math.floor(Math.random() * 30);
      });

      for (var i = 0; i < 30; i++) {
        if (this.origin[0] === rowArr[i] && this.origin[1] === colArr[i] || this.destination[0] === rowArr[i] && this.destination[1] === colArr[i]) {
          continue;
        }

        var id = "".concat(rowArr[i], "-").concat(colArr[i]);
        document.getElementById(id).classList.add("wall");
        this.grid.getTile(id.split("-")).className = "wall";
      }
    }
  }]);

  return Run;
}();

module.exports = Run;

/***/ }),

/***/ "./src/js/tile.js":
/*!************************!*\
  !*** ./src/js/tile.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = /*#__PURE__*/function () {
  function Tile(pos) {
    _classCallCheck(this, Tile);

    this.parent = null;
    this.children = [];
    this.className = "";
    this.pos = pos;
  }

  _createClass(Tile, [{
    key: "addClassName",
    value: function addClassName(name) {
      var classNameArr = this.className.split(" ");
      classNameArr.push(name);
      this.className = classNameArr.join(" ");
      return this.className;
    }
  }, {
    key: "removeClassName",
    value: function removeClassName(name) {
      var newClassName = this.className.split(" ").filter(function (className) {
        return className !== name;
      }).join(" ");
      this.className = newClassName;
      return newClassName;
    }
  }, {
    key: "assignParent",
    value: function assignParent() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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
  }, {
    key: "deleteSelfFromParentChildren",
    value: function deleteSelfFromParentChildren(p) {
      var parent = p;

      for (var i = 0; i < parent.children.length; i++) {
        if (parent.children[i] === this) {
          var left = parent.children.slice(0, i);
          var right = parent.children.slice(i + 1);
          var newChildren = left.concat(right);
          parent.children = newChildren;
          return parent.children;
        }
      }

      return -1;
    }
  }]);

  return Tile;
}();

module.exports = Tile;

/***/ }),

/***/ "./src/js/tree.js":
/*!************************!*\
  !*** ./src/js/tree.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tree = /*#__PURE__*/function () {
  function Tree(grid, startPos, destinationPos) {
    _classCallCheck(this, Tree);

    this.grid = grid;
    this.visited = new Set();
    this.orderedVisit = [];
    this.startPos = startPos;
    this.destinationPos = destinationPos;
    this.startTile = this.grid.getTile(this.startPos);
    this.grid.placeStartTile(this.startPos);
    this.solvable = false;
  }

  _createClass(Tree, [{
    key: "validPos",
    value: function validPos(pos) {
      if (this.grid.getTile(pos).className === "wall") {
        return false;
      }

      if (this.grid.validPos(pos) && !this.visited.has(pos.toString())) {
        return true;
      }

      return false;
    }
  }, {
    key: "createTree",
    value: function createTree() {
      var queue = [this.startTile];
      this.visited.add(this.startTile.pos.toString());

      while (!queue.length < 1) {
        var curTile = queue.shift();
        var tiles = this.grid.adjacentTiles(curTile.pos);

        for (var i = 0; i < tiles.length; i++) {
          if (this.solvable === false && tiles[i].toString() === this.destinationPos.toString()) {
            this.solvable = true;
          }

          if (this.validPos(tiles[i])) {
            var tile = this.grid.getTile(tiles[i]);
            tile.assignParent(curTile);
            queue.push(tile);
            this.visited.add(tile.pos.toString());
          }
        }
      }
    }
  }]);

  return Tree;
}();

module.exports = Tree;

/***/ }),

/***/ "./src/js/visualize.js":
/*!*****************************!*\
  !*** ./src/js/visualize.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Visualize = /*#__PURE__*/function () {
  function Visualize(orderedTravesal, travelPath) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;

    _classCallCheck(this, Visualize);

    this.orderedTravesal = orderedTravesal;
    this.travelPath = travelPath;
    this.traversed = [];
    this.timeout = timeout;
  }

  _createClass(Visualize, [{
    key: "visualizeAlgorithm",
    value: function visualizeAlgorithm() {
      var _this = this;

      var visited = "visited";
      var i = 0;

      var loopStep = function loopStep() {
        if (i === _this.orderedTravesal.length) {
          _this.visualizeTravelPath();

          document.getElementsByClassName("run-path-finder")[0].disabled = false;
          document.getElementsByClassName("reset-path-finder")[0].disabled = false;
          document.getElementsByClassName("generate-wall")[0].disabled = false;
          return;
        }

        var nextPos = _this.orderedTravesal[i].parsePos();

        setTimeout(function () {
          var tile = document.getElementById(nextPos);
          tile.classList.add(visited);

          _this.traversed.push(nextPos);

          loopStep();
          i += 1;
        }, _this.timeout);
      };

      loopStep();
    }
  }, {
    key: "visualizeTravelPath",
    value: function visualizeTravelPath() {
      var _this2 = this;

      var i = 0;

      var loopStep = function loopStep() {
        if (i === _this2.travelPath.length) {
          return;
        }

        var nextPos = _this2.travelPath[i].parsePos();

        setTimeout(function () {
          var tile = document.getElementById(nextPos);
          tile.classList.add("shortest-path");
          loopStep();
          i += 1;
        }, _this2.timeout);
      };

      loopStep();
    }
  }]);

  return Visualize;
}();

Array.prototype.parsePos = function () {
  var x = this[0];
  var y = this[1];
  return "".concat(x, "-").concat(y);
};

module.exports = Visualize;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map