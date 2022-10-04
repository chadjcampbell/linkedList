class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    if (this.head === null) return 0;
    let temp = this.head;
    let count = 1;
    while (temp.next !== null) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  at(index) {
    if (index === 0) return this.head;
    if (index >= this.size()) return "Outside of list index";
    let temp = this.head.next;
    let count = 0;
    while (count !== index) {
      count++;
      if (count === index) return temp;
      temp = temp.next;
    }
  }

  pop() {
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp.next !== null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let count = 0;
    while (temp !== null) {
      if (temp.value === value) return count;
      temp = temp.next;
      count++;
    }
    return null;
  }

  toString() {
    let temp = this.head;
    let listString = "";
    while (temp !== null) {
      listString += temp.value + " -> ";
      temp = temp.next;
    }
    listString += "null";
    return listString;
  }

  insertAt(value, index) {
    if (index >= this.size()) return "Outside of list index";
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let previous = this.at(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
  }

  removeAt(index) {
    if (index >= this.size()) return "Outside of list index";
    let previous = this.at(index - 1);
    previous.next = previous.next.next;
  }
}

let testList = new LinkedList();
testList.append("b");
testList.append("c");
testList.prepend("a");

console.log(testList);
