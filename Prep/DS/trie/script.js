console.clear();
console.log("Trie");

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(input) {
    let node = this.root;
    for (let i = 0; i < input.length; i++) {
      let charToInsert = input[i];
      if (!(charToInsert in node.children)) {
        node.children[charToInsert] = new Node();
      }
      node = node.children[charToInsert];
    }

    node.isWordEnd = true;
  }

  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in node.children)) {
        return false;
      }
      node = node.children[charToFind];
    }

    return node.isWordEnd;
  }

  startsWithPrefix(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in node.children)) {
        return false;
      }
      node = node.children[charToFind];
    }

    return true;
  }

  printWords() {
    let words = new Array();
    let search = (node = this.root, string) => {
      if (node.children !== 0) {
        for (let letter in node.children) {
          search(node.children[letter], string.concat(letter));
        }
        if (node.isWordEnd) words.push(string);
      }
    };

    search(this.root, new String());

    return words.length > 0 ? words : null;
  }
}

const trie = new Trie();
trie.insert("vamsi");
trie.insert("vamsam");
trie.insert("charan");
trie.insert("adari");
console.log(trie.startsWithPrefix("ch"));
console.log(trie.contains("vamsam"));
console.log(trie.contains("char"));
console.log(trie.printWords());
