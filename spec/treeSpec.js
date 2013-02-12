describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("A sweet top-level payload");
  });

  // Test to make sure that the children array exists
  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });



  // Test to make sure the addChild method exists  
  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  // Assuming it exists, let's test addChild's functionality
  describe("addChild", function() {

    it("should add a node to the tree", function() {
      // Add a node with a payload to the tree
      tree.addChild("some sweet payload");
      // Now test to see if the tree has any children
      expect(tree.children.length).not.toBe(0);
    });

    it("should be able to add a node to another node", function() {
      // Add some data
      tree.addChild("some dumb payload");
      // Test to see if that data is where we expect it to be
      expect(tree.children[0].payload).toEqual("some dumb payload");
    });


  });



  // Test to make sure the contains method exists
  it("should have a method named 'contains'", function() {
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  // Now let's test contains' functionality
  describe("contains", function() {

     it("should search the top-level node", function() {
       // let's make sure we're searching the top-level node
       expect(tree.contains("A sweet top-level payload")).toEqual(true);
     }); 

    it("should find a particular payload", function() {
      // Provide several different types of data to our test
      tree.addChild("top");
      tree.children[0].addChild("child");
      tree.children[0].addChild("child2");
      expect(tree.contains("child2")).toEqual(true);
    });

  });



  // Test to make sure the traverse method exists
  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  // Now let's test traverse's functionality
  describe("traverse", function() {

    // Going to define a function that walks through every item in the children array.
    it("should be able to run through the values of a tree's children", function() {
      tree.addChild("top");
      tree.children[0].addChild("child");
      tree.children[0].addChild("child2");
      expect(tree.traverse().length).toEqual(5);
    });

  });



  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});
















