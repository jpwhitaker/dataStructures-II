// Note: don't use an array to do this.
var makeLinkedList = function() {

	var linkedList = {
	  head: null,

	  insert: function(el) {
	  	var node = {
	  		payload: el,
	  		next: this.head
	  	}
		this.head = node;
	  },

	  traverse: function() {
	  	var currentNode = this.head;
	  	var output = [];
	  	while(currentNode !== null) {
	  		output.unshift(currentNode.payload);
	  		currentNode = currentNode.next;
	  	}
	  	return output;
	  }
	};

	return linkedList;
};