describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });


  // Test to see if there's a 'head' key
  it("should have a head", function() {
    expect(Object.keys(linkedList)).toContain("head");
  });

  // Let's make sure that linkedList has a method named insert.
  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  // Now test insert's functionality
  describe("insert", function() {

    it("should insert our payload into a new object; that object should be contained within head", function() {
      linkedList.insert('just the tip');
      expect(linkedList.head.payload).toBe('just the tip');
    });

  });

  // Let's make sure that linkedList has a method named traverse.
  it("should have a method named 'traverse'", function() {
    expect(linkedList.traverse).toEqual(jasmine.any(Function));
  });

  // Now let's test traverse's functionality
  describe("traverse", function() {

    it("should walk through the contents of linkedList one by one", function() {
      testList = makeLinkedList();
      testList.insert("hello");
      testList.insert("i love you");
      testList.insert("won't you tell me your name");

      expect(testList.traverse()).toEqual(["hello", "i love you", "won't you tell me your name"]);
    });

  });





});
