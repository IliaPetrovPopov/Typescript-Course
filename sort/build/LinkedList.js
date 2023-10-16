"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
        ++this._length;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Linked List is empty!");
        }
        let counter = 0;
        let nodeChecker = this.head;
        while (nodeChecker) {
            if (counter === index) {
                return nodeChecker;
            }
            nodeChecker = nodeChecker.next;
            counter++;
        }
        throw new Error("Index out of bounds!");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("Linked List is empty!");
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
