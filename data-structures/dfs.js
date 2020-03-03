import {Graph} from './graph';

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

const depthFirstSearch = (startingNodeKey, visitFn) => {
  const startingNode = graph.getNode(startingNodeKey);
  const visited = graph.nodes.reduce((acc, cur) => {
    acc[cur.key] = false;
    return acc;
  }, {});

  function explore(node) {
    if (visited[node.key]) {
      return;
    }

    visitFn(node);
    visited[node.key] = true;

    node.children.forEach(child => {
      explore(child);
    });
  }

  explore(startingNode);
};

depthFirstSearch('a', node => {
  console.log(node.key);
});