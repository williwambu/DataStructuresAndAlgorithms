function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

//add data
function add(data) {
    //check if data already exists in the set
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true
    } else {
        return false;
    }
}

//remove data from the set
function remove(data) {
    var pos = this.dataStore.indexOf(data);

    if (pos > -1) {
        this.dataStore.splice(pos, 1)

        return true;
    } else {
        return false;
    }
}

//show data in the set
function show() {
    return this.dataStore;
}

//helper function for checking if an element is a member of a set
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

//combine two sets into one -sets can only contain unique members
function union(set) {
    var tempSet = new Set();

    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }

    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }

    return tempSet;
}

function size() {
    return this.dataStore.length;
}

function intersect(set) {
    var tempSet = new Set();

    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }

    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                return false;
            }
        }
    }

    return true;
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}
