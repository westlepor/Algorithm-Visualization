const Board = require('./js/board.js');
const Grid = require('./js/grid.js');
const Tree = require('./js/tree.js');
const BFS = require('./js/bfs.js');
const DFS = require('./js/dfs.js');
const Visualize = require('./js/visualize.js');

let origin = [5, 25];
let destination = [25, 5];

let b1 = new Board(30, 30);
let grid = new Grid(30, 30);
b1.makeRows(origin, destination);
let algorithm = "BFS";

document.getElementsByClassName("run-path-select")[0].onchange = function(e){
    algorithm = e.target.value;
}

const makeDraggablePoints= () => {
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
        if(active === true) {
            active = false
        } else if (wallActive === true){
            wallActive = false;
        }
    }

    function drag(e) {
        e.preventDefault();
        if (active) {
            if (e.type === "mousemove" && e.target.classList.contains("grid-item")) {
                const currentNode = e.target;
                currentNode.appendChild(targetNode);
                if (targetNode.id === "origin" && currentNode.id !== "destination") {
                    origin = currentNode.id.split("-")
                } else if (targetNode.id === "destination" && currentNode.id !== "origin"){
                    destination = currentNode.id.split("-");
                }
            }
        } else if (wallActive){
            if (e.type === "mousemove" && e.target.classList.contains("grid-item")){
                const currentNode = e.target;
                if (currentNode.classList.contains("wall")){
                    grid.getTile(currentNode.id.split("-")).className = "";
                    currentNode.classList.remove("wall");
                } else if (currentNode.firstChild && (currentNode.firstChild.id !== "destination" || currentNode.firstChild.id !== "origin")){
                }else{
                    currentNode.classList.add("wall");
                    grid.getTile(currentNode.id.split("-")).className = "wall"
                }
            }
        }
    }
}

makeDraggablePoints();

document.getElementsByClassName("run-path-finder")[0].addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e)
    const tree = new Tree(grid, origin);
    tree.createTree(tree.startTile);

    let algo;
    if (algorithm === "BFS"){
        algo = new BFS(tree.startTile, destination);
    } else if (algorithm === "DFS"){
        algo = new DFS(tree.startTile, destination);
    }
    const travelPath = algo.createPathBack();
    const visualize = new Visualize(algo.orderedTravesal, travelPath, 4);
    document.getElementById("origin").childNodes[0].className = "origin-marker origin-marker-ran bounce";
    document.getElementById("origin").childNodes[1].className = "";

    visualize.visualizeAlgorithm();
    document.getElementById("destination").childNodes[0].className = "destination-marker destination-marker-ran bounce";
    document.getElementById("destination").childNodes[1].className = "";

    e.currentTarget.disabled = "disabled";
    document.getElementsByClassName("reset-path-finder")[0].disabled = "disabled";
    console.log(document.getElementsByClassName("generate-wall"), "greate");
    document.getElementsByClassName("generate-wall")[0].disabled = "disabled";
})

const resetPathFinder = function(e){
    e.preventDefault();
    b1.removeChildNodes();
    origin = [5, 25];
    destination = [25, 5]
    b1.makeRows(origin, destination);
    grid = new Grid(30, 30);
    makeDraggablePoints();
}
document.getElementsByClassName("reset-path-finder")[0].addEventListener('click', resetPathFinder);

// pointer move
const generateWall = () =>{
    let rowArr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));
    let colArr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 30));

    for (let i = 0; i < 30; i++) {
        if ((origin[0] === rowArr[i] && origin[1] === colArr[i]) || (destination[0] === rowArr[i] && destination[1] === colArr[i])) {
            continue;
        }
        const id = `${rowArr[i]}-${colArr[i]}`;
        document.getElementById(id).classList.add("wall");
        grid.getTile(id.split("-")).className = "wall"
    }
}
document.getElementsByClassName("generate-wall")[0].addEventListener('click', function(e){
    e.preventDefault();
    resetPathFinder(e);
    generateWall();
    generateWall();
    generateWall();
    generateWall();
    generateWall();
})