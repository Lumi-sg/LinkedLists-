import Node from "./Node.js";
export default class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	Append(value) {
		if (this.head == null) this.Prepend(value);
		else {
			let current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = new Node(value);
		}
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

	Tail() {
		if (!this.head) {
			return null;
		}
		let tail = this.head;
		while (tail.next != null) {
			tail = tail.next;
		}
		return tail;
	}

	At(index) {
		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
			if (!current) {
				return "There is no data at index " + index + ".";
			}
		}
		return current;
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

	Contains(value) {
		if (!value) {
			return;
		}
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	Find(value) {
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.value === value) {
				return index;
			}
			current = current.next;
			index++;
		}
	}

	ToString() {
		let current = this.head;
		let string = "";

		while (current) {
			string += `(${current.value}) -> `;
			current = current.next;
		}
		return (string += "null");
	}
}
