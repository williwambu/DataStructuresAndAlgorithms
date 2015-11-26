//a vertex
function Vertex(label) {
    this.label = label;
}

/**
 * A graph implemented using adjacency list
 * @param v is the number of vertices
 * @constructor
 */
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.vertexList = []; //store the vertex details, like course name, for Topological Sort

    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
    //this.toString = toString;

    //array to store visited nodes
    this.marked = [];

    //initialize it false values equal to # of vertices
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }

    this.edgeTo = new Array();
}

function addEdge(v, w) {
    //find the adj list for vertex v and  insert w
    this.adj[v].push(w);

    //find the adj list for vertex w and insert v
    this.adj[w].push(v);

    //increment the number of edges by 1
    this.edges++
}

function showGraph() {
    var visited = [];
    var str = '';
    for (var i = 0; i < this.vertices; ++i) {
        str += this.vertexList[i] + " -> ";
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    str += this.vertexList[j] + ' ';
                }
            }
        }
        console.log(str);
        visited.pop();
    }
}

/**
 * Depth First Search Algorithm
 * v is where to start the search from
 * */
function dfs(v) {
    //mark the vertex as visited
    this.marked[v] = true;

    //print visited vertices not required for dfs to work
    if (this.adj[v] != undefined) {
        console.log("Visited vertex " + v);
    }

    for (var i = 0; i < this.adj[v].length; i++) {
        console.log(this.adj[v]);
        var element = this.adj[v][i];
        if (!this.marked[element]) {
            this.dfs(element);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v != undefined) {
            console.log("Visited vertex: " + v);
        }

        for (var i = 0; i < this.adj[v].length; i++) {
            var element = this.adj[v][i];
            if (!this.marked[element]) {
                this.edgeTo[element] = v;
                this.marked[element] = true;
                queue.push(element);
            }
        }
    }
}

function hasPathTo(v) {
    return this.marked[v];
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function topSort() {
    var stack = [];
    var visited = [];

    //initializing visited array to false
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }

    for (var i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }

    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            console.log(this.vertexList[stack[i]]);
        }
    }

}

function topSortHelper(v, visited, stack) {
    visited[v] = true;

    for (var i = 0; i < this.adj[v]; i++) {
        var element = this.adj[v][i];
        if (!visited[element]) {
            this.topSortHelper(visited[element], visited, stack);
        }
    }
    stack.push(v);
}
/*
 g = new Graph(5);
 g.addEdge(0, 1);
 g.addEdge(0, 2);
 g.addEdge(1, 3);
 g.addEdge(2, 4);
 g.bfs(0);
 var vertex = 3;
 var paths = g.pathTo(vertex);
 var str = '';
 while (paths.length > 0) {
 if (paths.length > 1) {
 str += (paths.pop() + '-');
 } else {
 str += paths.pop();
 }
 }
 console.log(str);*/

g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures",
    "Assembly Language", "Operating Systems",
    "Algorithms"];
g.showGraph();
g.topSort();
