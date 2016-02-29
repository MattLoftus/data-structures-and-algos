//Create a hash table with pseudoclassical instantiation
//Reqs: -resizing, -collision resolution (overwrite value if collision occurs)

var HashTable = function(limit) {
  this._storage = [];
  this._limit = limit || 1000;
  this._size = 0;
}

HashTable.prototype.resize = function(limit) {
  //Copy and delete storage
  var storageCopy = this._storage.slice();
  this._storage = [];

  //Increase/Decrease limit
  this._limit = limit;

  //Insert new values
  for (var i = 0; i < storageCopy.length; i++) {
    var bucket = storageCopy[i];
    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      this.insert(tuple[0], tuple[1]);
    }
  }
}

HashTable.prototype.insert = function(key, val) {
  var hash = this.getHash(key, this._limit);

  var bucket = this._storage[hash] || [];
  //If bucket is nonempty, check for collisions
  if (bucket.length > 0) {
    var collision = false;
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = val;
        collision = true;
      }
    }
    if (!collision) {
      bucket.push([key, val]);
      this._size++
    }
  } else {
    //Otherwise we have a new bucket, so add the 
    //tuple and put the new bucket in storage
    bucket.push([key, val]);
    this._storage[hash] = bucket;
    this._size++;
  }

  //Check for resizing
  if (this._size > this._limit * .75) {
    this.resize(this._limit * 2);
  }
}

HashTable.prototype.retrieve = function(key) {
  var hash = this.getHash(key, this._limit);

  var bucket = this._storage[hash];

  //Search through the tuples of the bucket to find the key
  if (bucket.length !== 0) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  }

  //Return null if the bucket was empty
  return null;
}

HashTable.prototype.remove = function(key) {
  var hash = this.getHash(key, this._limit);

  var bucket = this._storage[hash];

  if (bucket.length > 0) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        var val = tuple[1];
        bucket.splice(i,1);
        this._size--;
        return val;
      }
    }
    return null;
  }

  //Return null if the bucket was empty
  return null;
}

HashTable.prototype.contains = function(key) {
  var hash = this.getHash(key, this._limit);

  var bucket = this._storage[hash];

  if (bucket.length > 0) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === key) {
        return true
      }
    }
    return false
  }

  //Return false if the bucket was empty
  return false;
}

HashTable.prototype.size = function() {
  return this._size;
}


HashTable.prototype.getHash = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};




