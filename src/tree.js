var makeTree = function(treePayload){
  var tree = {
    // Declare an array where we can put children.
    // It'll be empty at first because when we create a child, it won't yet have any children.
    children: [],
    payload: treePayload,

    // Declare a function that lets us add children to our tree.
    // This will also let us add children to any child.
    addChild: function(el){
      var childTree = makeTree();
      childTree.payload = el;
      childTree.parent = this;
      this.children.push(childTree);
    },

    // Declare a function that lets a user search the tree for a specified value. Returns true if the
    // value exists somewhere in the tree; returns false if not.
    contains: function(searchTerm) {
      var currentNode = this;
      var found = false;

      // Check the current node before traversing down into child nodes
      if (currentNode.payload === searchTerm) {
        found = true;
      };
      // If the current node doesn't have what we're looking for, look in its children.
      // Call this recursively so children will look in their children, too.
      for (i = 0; i < currentNode.children.length; i++) {
        found = found || currentNode.children[i].contains(searchTerm);
      };
      return found;
    },
    


    traverse: function(){
      var c = this.children.payload;
      var output = [];

      this.payload.push();
      for (i = 0; i < c.length; i++) {
        output.push([c]);
      };
      return output;
    }
  }
  return tree;
}
