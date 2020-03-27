// make board
// give board to virtual tree to make virtualTree
// get orderTraversal from bfs by giving it root of virtual tree
// get pathBack from BFS
const Board = require('./js/board.js');
const Grid = require('./js/grid.js');
// const VirtualTree = require('./js/virtualTree.js');
// const ReturnP = require('./js/pso.js')
// const Visualize = require('./js/visualize.js');
// const BFS = require('./js/bfs.js');
// const UserController = require('./js/controllerUI/userController.js')


const origin = [5,5];
const destination = [25,25]
const b1 = new Board(30, 30);
b1.makeRows(origin, destination);

// b1.addSomeTilesClasses();
// const controller = new UserController()



// function spotTest() {

//   const grid = new Grid(30, 75);
//   const virtualTree = new VirtualTree(grid, [15, 37]);

//   //-----------------------------
//   //BFS ALGORITHM
//   const t = virtualTree.createTree(virtualTree.startTile);
//   const b = new BFS(virtualTree.startTile, [6, 6]);
//   const travelPath = b.createPathBack();
//   //------------------------------

//   const visualize = new Visualize(b.orderedTravesal, travelPath, 5);
  
//   visualize.visualizeAlgorithm();

// }


// spotTest();
