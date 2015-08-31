//a vertex
function Vertex(label) {
    this.label = label;
}

//v is the number of vertices
function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        //fill the adj list with empty strings equal to the number of vertices
        this.adj[i].push("");
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    //this.toString = toString;

    //array to store visited nodes
    this.marked = [];

    //initialize it false values equal to # of vertices
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
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
    //loop through all vertices
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");

        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }

        //newline separator
        console.log()
    }
}

//Depth First Search Algorithm
//v is where to start the search from
function dfs(v) {
    //mark the vertex as visited
    this.marked[v] = true;

    //print visited vertices not required for dfs to work
    if (this.adj[v] != undefined) {
        console.log("Visited vertex " + v);
    }

    for (var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v == undefined) {
            console("Visited vertex: " + v);
        }
        for(var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);