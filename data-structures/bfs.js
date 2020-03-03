import {Queue} from './queue';
import {Node, Graph} from './graph';

const graph = new Graph(true);
const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
];

nodes.forEach(node => {
  graph.addNode(node);
});
edges.forEach(edge => {
  graph.addEdge(...edge);
});

const breadthFirstSearch = (startingNodeKey, visitFn) => {
  const startingNode = graph.getNode(startingNodeKey);
  const visited = graph.nodes.reduce((acc, node) => {
    acc[node.key] = false;
    return acc;
  }, {});
  const queue = new Queue();
  queue.enqueue(startingNode);
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    if (!visited[currentNode.key]) {
      visitFn(currentNode);
      visited[currentNode.key] = true;
    }
    currentNode.children.forEach(node => {
      if (!visited[node.key]) {
        queue.enqueue(node);
      }
    });
  }
};


breadthFirstSearch('a', node => {
  console.log(node.key);
});