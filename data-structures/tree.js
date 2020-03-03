export class Node {
  constructor(key) {
    this.children = [];
    this.key = key;
  }
  addChild(key) {
    const childNode = new Node(key);
    this.children.push(childNode);
    return childNode;
  }
}

export class Tree {
  constructor(rootKey) {
    this.root = new Node(rootKey);
  }
  print() {
    let result = '';
    function traverse(node, visitFn, depth) {
      visitFn(node, depth);
      if (node.children.length) {
        node.children.forEach(child => {
          traverse(child, visitFn, depth + 1);
        });
      }
    }
    function addKeyToResult(node, depth) {
      result += 
        result.length === 0 ?
          node.key :
          `\n${' '.repeat(depth * 2)}${node.key}`;
    }
    traverse(this.root, addKeyToResult, 1);
    return result;
  }
}

const dom = new Tree('html');
const head = dom.root.addChild('head');
const body = dom.root.addChild('body');
const title = head.addChild('title - Egghead - Tree lesson');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');
const h1 = header.addChild('h1 - Tree lesson');
const p = main.addChild('p - Learn about trees!');
const copyright = footer.addChild(`Copyright @${new Date().getFullYear()}`);

console.log(dom.print());