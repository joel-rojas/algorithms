export class Node {
  constructor(key) {
    this.key = key;
    this.children = [];
  }
  addChild(node) {
    this.children.push(node);
  }
}

export class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.nodes = [];
    this.edges = [];
  }
  addNode(key) {
    this.nodes.push(new Node(key));
  }
  getNode(key) {
    return this.nodes.find(n => n.key === key);
  }
  addEdge(node1Key, node2Key) {
    const node1 = this.getNode(node1Key);
    const node2 = this.getNode(node2Key);

    node1.addChild(node2);

    if (!this.directed) {
      node2.addChild(node1);
    }

    this.edges.push(`${node1Key}${node2Key}`);
  }
  print() {
    return this.nodes
      .map(({ children, key }) => {
        let result = `${key}`;

        if (children.length) {
          result += ` => ${children
            .map(node => node.key)
            .join(' ')}`;
        }

        return result;
      })
      .join('\n');
  }
}

const graph = new Graph(true);

graph.addNode('Emerson');
graph.addNode('Tefy');
graph.addNode('Isabella');
graph.addNode('Chiquititi');


graph.addEdge('Emerson', 'Tefy');
graph.addEdge('Tefy', 'Emerson');
graph.addEdge('Emerson', 'Isabella');
graph.addEdge('Tefy', 'Isabella');
graph.addEdge('Isabella', 'Emerson');
graph.addEdge('Isabella', 'Tefy');
graph.addEdge('Tefy', 'Chiquititi');
graph.addEdge('Isabella', 'Chiquititi');
graph.addEdge('Chiquititi', 'Tefy');

console.log(graph.print());
