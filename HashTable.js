function HashTable() {
    this.table = new Array(137); //prime number to avoid collision in when using modulus to compute the key
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

/*
	Simple Hashing function
	========================
	Find the sum of ASCII value of letters in the key
	Horner's Algorithm - we multiply the sum by a constant prime number (37) to avoid collision
	Hash is given by total % array_size
*/
function simpleHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

//puts data inthe hashTable
function put(key, value) {
    var pos = this.simpleHash(key);
    this.table[pos] = value;
}

//get data given the key
function get(key) {
    return this.table[this.simpleHash(key)]
}

//display data in the hash table
function showDistro() {
    //	var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + " : " + this.table[i]);
        }
    }
}
