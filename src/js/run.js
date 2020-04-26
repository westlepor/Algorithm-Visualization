const Board = require("./board.js");
const Grid = require("./grid.js");
const Tree = require("./tree.js");
const BFS = require("./bfs.js");
const DFS = require("./dfs.js");
const Dijkstras = require("./dijkstra.js");
const Visualize = require("./visualize.js");

class Run {
  constructor() {
    this.origin = [5, 25];
    this.destination = [25, 5];
    this.board = new Board(30, 30);
    this.grid = new Grid(30, 30);
    this.board.makeRows(this.origin, this.destination);
    this.algorithm = "BFS";
    this.speed = "fast";
    this.selectAlgorithm();
    this.selectSpeed();
    this.makeDraggablePoints();
    this.runPathFinder();
    this.resetPathFinder();
    document.getElementsByClassName("generate-wall")[0].addEventListener("click", (e)=>{
        e.preventDefault();
        this.resetPathFinder();
        for(let i = 0; i < 5; i++) this.generateWall();
      }
    );
    document.getElementsByClassName("reset-path-finder")[0].addEventListener("click", this.resetPathFinder.bind(this));
  }

  selectAlgorithm() {
    document.getElementsByClassName("run-path-select")[0].onchange = (e)=>{
      this.algorithm = e.target.value;
    };
  }

  selectSpeed() {
    document.getElementsByClassName("run-path-speed")[0].onchange = (e) => {
      this.speed = e.target.value;
    };
  }

  makeDraggablePoints() {
    const originPoint = document.getElementById("origin");
    const destinationPoint = document.getElementById("destination");
    const gridItems = document.getElementsByClassName("grid-items")[0];

    gridItems.addEventListener("touchstart", dragStart, false);
    gridItems.addEventListener("touchend", dragEnd, false);
    gridItems.addEventListener("touchmove", drag, false);
    gridItems.addEventListener("mousedown", dragStart, false);
    gridItems.addEventListener("mouseup", dragEnd, false);
    gridItems.addEventListener("mousemove", drag, false);

    let active;
    let targetNode;
    let wallActive;
    const that = this;

    function dragStart(e) {
      e.preventDefault();
      if (
        e.target.parentNode === originPoint ||
        e.target.parentNode === destinationPoint
      ) {
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
        if (
          e.type === "mousemove" &&
          e.target.classList.contains("grid-item")
        ) {
          const currentNode = e.target;
          currentNode.appendChild(targetNode);
          if (targetNode.id === "origin" && currentNode.id !== "destination") {
            that.origin = currentNode.id.split("-");
          } else if (
            targetNode.id === "destination" &&
            currentNode.id !== "origin"
          ) {
            that.destination = currentNode.id.split("-");
          }
        }
      } else if (wallActive) {
        if (
          e.type === "mousemove" &&
          e.target.classList.contains("grid-item")
        ) {
          const currentNode = e.target;

          if (currentNode.firstChild && (currentNode.firstChild.id === "destination" || currentNode.firstChild.id === "origin")){
            return;
          }
          if (currentNode.classList.contains("visited") || currentNode.classList.contains("shortest-path")){
            return;
          }
          if (currentNode.classList.contains("wall")) {
            that.grid.getTile(currentNode.id.split("-")).className = "";
            currentNode.classList.remove("wall");
          } else {
            currentNode.classList.add("wall");
            that.grid.getTile(currentNode.id.split("-")).className = "wall";
          }
        }
      }
    }
  }

  runPathFinder() {
    document.getElementsByClassName("run-path-finder")[0].addEventListener("click", e => {
      e.preventDefault();
      const tree = new Tree(this.grid, this.origin, this.destination);
      tree.createTree(tree.startTile);
      if(tree.solvable === false){
        alert("This is not solvable board. Please move your walls to make it solvable.");
        return
      } 

      let algo;
      if (this.algorithm === "BFS") {
        algo = new BFS(tree.startTile, this.destination);
      } else if (this.algorithm === "DFS") {
        algo = new DFS(tree.startTile, this.destination);
      } else if (this.algorithm === "dijkstra") {
        algo = new Dijkstras(tree.startTile, this.destination);
      }

      let speed;
      if (this.speed === "fast") {
        speed = 3
      } else if (this.speed === "normal") {
        speed = 20
      } else if (this.speed === "slow"){
        speed = 40
      }

      const travelPath = algo.createPathBack();
      const visualize = new Visualize(algo.orderedTravesal, travelPath, speed);
      document.getElementById("origin").childNodes[0].className =
        "origin-marker origin-marker-ran bounce";
      document.getElementById("origin").childNodes[1].className = "";
      visualize.visualizeAlgorithm();
      document.getElementById("destination").childNodes[0].className =
        "destination-marker destination-marker-ran bounce";
      document.getElementById("destination").childNodes[1].className = "";

      e.currentTarget.disabled = "disabled";
      document.getElementsByClassName("reset-path-finder")[0].disabled = "disabled";
      document.getElementsByClassName("generate-wall")[0].disabled ="disabled";
    });
  }

  resetPathFinder() {
    this.board.removeChildNodes();
    this.origin = [5, 25];
    this.destination = [25, 5];
    this.board.makeRows(this.origin, this.destination);
    this.grid = new Grid(30, 30);
    this.makeDraggablePoints();
  }

  generateWall() {
    let rowArr = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 30)
    );
    let colArr = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 30)
    );

    for (let i = 0; i < 30; i++) {
      if (
        (this.origin[0] === rowArr[i] && this.origin[1] === colArr[i]) ||
        (this.destination[0] === rowArr[i] && this.destination[1] === colArr[i])
      ) {
        continue;
      }
      const id = `${rowArr[i]}-${colArr[i]}`;
      document.getElementById(id).classList.add("wall");
      this.grid.getTile(id.split("-")).className = "wall";
    }
  }
}

module.exports = Run;
