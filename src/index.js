const body = (document.querySelector("body").style.backgroundColor = "black");

import LinkedList from "./modules/LinkedList.js";

const testLinkedList = new LinkedList();

testLinkedList.Prepend("1");
testLinkedList.Append("2");
testLinkedList.Append("3");
testLinkedList.Append("4");
console.log(testLinkedList.ToString());
