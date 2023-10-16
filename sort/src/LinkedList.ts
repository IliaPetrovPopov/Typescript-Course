import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  private _length: number = 0;

  get length(): number {
    return this._length;
  }

  add(value: number): void {
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

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Linked List is empty!");
    }

    let counter = 0;
    let nodeChecker: Node | null = this.head;

    while (nodeChecker) {
      if (counter === index) {
        return nodeChecker;
      }

      nodeChecker = nodeChecker.next;
      counter++;
    }

    throw new Error("Index out of bounds!");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("Linked List is empty!");
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
