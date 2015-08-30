function Dictionary(){
	this.dataStore = new Array();
	this.add = add
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

//add a key value pair
function add(key,value){
	this.dataStore[key] = value;
}

//find an item given its key
function find(key){
	return this.dataStore[key];
}

//delete a key value pair using the key
function remove(key){
	delete this.dataStore[key];
}

//showAll items in the dictionary
function showAll(){
	for(key in this.dataStore){
		console.log(key + " -> " + this.dataStore[key]);
	}
}

//count the number of items inthe dictionary
function count(){
	var n = 0;
	for(key in this.dataStore){
		++n
	}

	return n;
}

//clear all key-value pairs inthe dictionary
function clear(){
	for(key in this.dataStore){
		delete this.dataStore[key];
	}
}




//test program
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
console.log("Number of entries :" + pbook.count());

pbook.remove("David");
pbook.showAll();
pbook.clear()
console.log("Number of entries :" + pbook.count());

