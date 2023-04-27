const body = (document.querySelector("body").style.backgroundColor = "black");

import LinkedList from "./modules/LinkedList.js";

const testLinkedList = new LinkedList();

testLinkedList.Append("2");
testLinkedList.Prepend("1");
testLinkedList.Append("3");
testLinkedList.Append("4");
console.log(testLinkedList.ToString());
console.log(testLinkedList.Size());
console.log(testLinkedList.Head());
console.log(testLinkedList.Tail());
console.log(testLinkedList.At(2));
console.log(testLinkedList.At(4));
testLinkedList.Pop();
console.log("Popped!");
console.log(testLinkedList.ToString());
console.log(testLinkedList.Contains("3"));
console.log("Index: "+ testLinkedList.Find("2")); 