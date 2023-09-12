class Node {
    constructor(note) {
      this.note = note;
      this.next = null;
    }
  }

  class MusicalScale {
    constructor() {
      this.root = null;
    }

    // Append a note to the end of the scale
    append(note) {
      const newNode = new Node(note);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      let current = this.root;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    // Print the scale
    print() {
      let current = this.root;
      while (current) {
        console.log(current.note);
        current = current.next;``
      }
    }

    // Transpose the scale up by a semitone
    transposeUp() {
      let current = this.root;
      const notesOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

      while (current) {
        let index = notesOrder.indexOf(current.note);
        current.note = notesOrder[(index + 1) % 12]; // Use modulo to wrap around the array
        current = current.next;
      }
    }
  }

  // Example: Constructing the C Major scale
  const cMajor = new MusicalScale();
  cMajor.append("C");
  cMajor.append("D");
  cMajor.append("E");
  cMajor.append("F");
  cMajor.append("G");
  cMajor.append("A");
  cMajor.append("B");

  cMajor.print();

  console.log('Transposing up by a semitone...');
  cMajor.transposeUp();
  cMajor.print();
