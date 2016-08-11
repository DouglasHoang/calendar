import { DayProto } from './create-days';

export class Node {
    year: number;
    month: number;
    days: DayProto[];
    next = null;
    prev = null;

    constructor(year, month, days) {
        this.year = year;
        this.month = month;
        this.days = days;
    }
}

export class DoublyList {
    length: number = 0;
    head:Node = null;
    tail:Node = null;

    addToHead(year, month, days) {
        var node = new Node(year, month, days);
        if (this.length) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.length++
        return node;
    }

    addToTail(year, month, days) {
        var node = new Node(year, month, days);
        if (this.length) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.length++;

        return node;
    }


    searchNodeAt(position) {
        var currentNode = this.head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in the list'};

        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }


}

