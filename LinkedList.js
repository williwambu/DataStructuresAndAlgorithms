function Node(element) {
    this.element = element; //stores the node's data
    this.next = null; //a link to the next node in the linked list
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
}

//finding a node, used in insertion
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }

    return currNode;
}
/**
 * inserts a new element into the list
 * item is the node to insert newElement after
 * @param newElement
 * @param item
 */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next; //set the link the new node to what the existing node was linking to
    current.next = newNode;	 //set the link of the existing item to the new node
}

/**
 * display the elements of the linked list
 */
function display() {
    var currNode = this.head;

    while (!(currNode.next == null)) {
        console.log(currNode.next.element); // use currNode.next.element to avoid displaying nodes without data(head node)
        currNode = currNode.next;
    }
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }

    return currNode;
}


function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

var cities = new LList();
cities.insert("Nairobi", "head");
cities.insert("Mombasa", "Nairobi");
cities.insert("New York", "Mombasa");
cities.insert("Kisumu", "New York");
cities.display();

console.log() //print newline

//remove New York ... not in Kenya
cities.remove("New York");
cities.display();