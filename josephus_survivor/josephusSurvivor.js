const CircularLinkedList = require('./CircularLinkedList');

function josephusSurvivor(n, k) {
  const list = new CircularLinkedList();

  // Populate the circular linked list with people numbered from 1 to n
  for (let i = 1; i <= n; i++) {
    list.add(i);
  }

  let current = list.head;

  while (list.length > 1) {
    // Move k-1 steps forward
    for (let i = 0; i < k - 1; i++) {
      current = current.next;
    }

    // Remove the k-th person
    const next = current.next;
    list.remove(current);
    current = next;
  }

  return list.head.value;
}

module.exports = josephusSurvivor;
