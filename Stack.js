function Stack(){
	this.dataStore = [];
	this.top = 0; //To keep track of the top element as well as where to add new element
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear  = clear;
}

function push(element){
	this.dataStore[this.top] = element;

	this.top++;
}

function pop(){
	--this.top;
	return this.dataStore[this.top];
}

function peek(){
	return this.dataStore[this.top - 1];
}

function clear(){
	this.top = 0;
}

function length(){
	return this.top;
}