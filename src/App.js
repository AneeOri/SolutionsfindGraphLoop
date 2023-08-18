import "./styles.css";

export default function App() {
  function loop_size68(node) {
    let nodes = new Map();

    while (!nodes.has(node)) {
      nodes.set(node, nodes.size);
      node = node.getNext();
    }

    return nodes.size - nodes.get(node);
  }

  function loop_size(node) {
    var map = new WeakMap(),
      i = 0;

    while (map.get(node) === void 0) {
      map.set(node, ++i);
      node = node.getNext();
    }

    return i - map.get(node) + 1;
  }

  function loop_size22(node) {
    let lastIndex = 0;
    let indices = new WeakMap();
    while (indices.get(node) == null) {
      indices.set(node, lastIndex++);
      node = node.next;
    }
    return lastIndex - indices.get(node);
  }

  function loop_size33(node) {
    var len = 2,
      current = node;
    while (true) {
      for (var i = 1; i <= len; i++) {
        node = node.getNext();
        if (node == current) {
          return i;
        }
      }
      current = node;
      len *= 2;
    }
  }

  function loop_size44(node) {
    let nodes = new Map();

    while (!nodes.has(node)) {
      nodes.set(node, nodes.size);
      node = node.getNext();
    }

    return nodes.size - nodes.get(node);
  }

  function loop_size55(node) {
    let nodes = new Map();

    while (!nodes.has(node)) {
      nodes.set(node, nodes.size);
      node = node.getNext();
    }

    return nodes.size - nodes.get(node);
  }

  return (
    <div className="App">
      <input />
    </div>
  );
}
