import Node from "./Node.js";
export default class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	Append(value) {
		//Check if empty
		if (!this.head) {
			this.head = new Node(value);
			return this;
		}
		let tail = this.findTail();
		tail.next = new Node(value);
		return tail;
	}

	Prepend(value) {
		if (!this.head) {
			this.head = new Node(value);
			return this;
		}
		let previousHead = this.head;
		this.head = new Node(value, previousHead);
	}

	Size() {
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}

	Head() {
		return this.head;
	}

	At(index) {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		for (let i = 0; i < index; i++) {
			node = node.next;
		}
		if (node) {
			return node;
		} else {
			return null;
		}
	}

	Pop() {
		if (!this.head) {
			return null;
		}
		//if the list only has one node
		if (!this.head.next) {
			return;
		}
		let current = this.head;
		let previous = null;

		while (current.next) {
			previous = current;
			current = current.next;
		}
		previous.next = null;
	}

	Contains(value) {}

	Find(value) {}

	toString() {}

	findTail() {
		if (!this.head) {
			return null;
		}
		let tail = this.head;
		while (tail.next != null) {
			tail = tail.next;
		}
		return tail;
	}
}
