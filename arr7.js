class ArrayQueue {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.data = new Array(capacity + 1).fill(null);
    this.head = 0;
    this.tail = 0;
  }

  size() {
    return (this.tail - this.head + this.data.length) % this.data.length;
  }

  isEmpty() {
    return this.head === this.tail;
  }

  isFull() {
    return this.size() === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log(`Черга переповнена, елемент ${value} не додано`);
      return false;
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.data.length;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Черга порожня, видаляти нічого");
      return undefined;
    }
    const value = this.data[this.head];
    this.data[this.head] = null;
    this.head = (this.head + 1) % this.data.length;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Черга: [порожня]");
      return;
    }
    const items = [];
    for (let i = this.head; i !== this.tail; i = (i + 1) % this.data.length) {
      items.push(this.data[i]);
    }
    console.log("Черга: " + items.join(" <- "));
  }
}
const queue = new ArrayQueue(5);

console.log("1) Нова черга");
queue.print();
console.log("Розмір:", queue.size());

console.log("\n2) Додаємо елементи 6, 4, 6, 2, 7");
[6, 4, 6, 2, 7].forEach((x) => queue.enqueue(x));
queue.print();
console.log("Розмір:", queue.size());

console.log("\n3) Спроба додати 9 у повну чергу");
queue.enqueue(9);

console.log("\n4) Видаляємо два елементи");
console.log("Видалено:", queue.dequeue());
console.log("Видалено:", queue.dequeue());
queue.print();
console.log("Розмір:", queue.size());

console.log("\n5) Додаємо 8 і 5 (черга використовує звільнені комірки)");
queue.enqueue(8);
queue.enqueue(5);
queue.print();
console.log("Розмір:", queue.size());

console.log("\n6) Видаляємо все");
while (!queue.isEmpty()) {
  console.log("Видалено:", queue.dequeue());
}
queue.print();
console.log("Розмір:", queue.size());

console.log("\n7) Видалення з порожньої черги");
queue.dequeue();
