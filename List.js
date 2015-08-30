
function List(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; // initializing an empty array to store the elements
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

//appending an element into the list
function append(element){
	this.dataStore[this.listSize++] = element;
}

//finding an element in the list
function find(element){
	for(var i = 0; i < this.dataStore.length; ++i);
		if(this.dataStore[i] == element){
			return i; //return index of element
		}

		return -1;
}

/*
	Removing an element from the list
	Uses find function and then splice
*/
function remove(element){
	var foundAt = this.find(element);
	//if element is found
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);

		//decrement dataStore by 1
		--this.listSize;

		return true;
	}

	//not found
	return false;
}

//getting length of the list
function length(){
	return this.listSize;
}

//returns all the elements in the list
function toString(){

	return this.dataStore;
}

//insert element after another element
function insert(element, after){
	var insertPos = find(after);

	if(insertPos > -1){
		this.dataStore.shift(insertPos + 1, 0, element);

		++this.listSize;

		return true;
	}

	return false;
}

//clear the elements in the list
function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

//check if the list contains a specified element
function contains(element){
	for(var i = 0; i < this.dataStore.length; i++){
		if(this.dataStore[i] == element){

			return true;
		}
	}

	return false;
}

//Traversing the list


//move the pos to 0
function front(){
	return this.pos = 0;
}

//move curent pos to the end
function end(){
	this.pos = this.listSize - 1;
}

function prev(){
	if(this.pos > 0){
		--this.pos;
	}
}

function next(){
	if(this.pos < this.listSize -1){
		++this.pos;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	if(position >= 0 && position <=listSize -1 ){
		this.pos = position;
	}
}


//get element at the current position
function getElement(){
	return this.dataStore[this.pos];
}







































