function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.length = length;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element){
	return this.dataStore.push(element);
}

function dequeue(){
	return this.dataStore.shift();
}

function length(){
	return this.dataStore.length;
}

function front(){
	return this.dataStore[0]
}

function back(){
	return this.dataStore[this.dataStore.length - 1];
}

function toString(){
	var string = "";

	for(var i = 0; i < this.dataStore.length; i++){
		string += this.dataStore[i] + "\n";
	}

	return string;
}


function empty(){
	if(this.dataStore.length == 0){
		return true;
	}

	return false;
}