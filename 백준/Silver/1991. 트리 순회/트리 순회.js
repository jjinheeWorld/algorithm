const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const BinaryTree = {};

for (let i = 1; i <= N; i++) {
  const [tree, leftSubTree, rightSubTree] = input[i].split(" ");
  BinaryTree[tree] = {
    leftSubTree: leftSubTree === "." ? null : leftSubTree,
    rightSubTree: rightSubTree === "." ? null : rightSubTree,
  };
}

let answer = "";

const preorder = (tree) => {
  if (!tree) return;

  answer += tree;
  preorder(BinaryTree[tree].leftSubTree);
  preorder(BinaryTree[tree].rightSubTree);
};

const inorder = (tree) => {
  if (!tree) return;

  inorder(BinaryTree[tree].leftSubTree);
  answer += tree;
  inorder(BinaryTree[tree].rightSubTree);
};

const postorder = (tree) => {
  if (!tree) return;

  postorder(BinaryTree[tree].leftSubTree);
  postorder(BinaryTree[tree].rightSubTree);
  answer += tree;
};

preorder("A");
console.log(answer);

answer = "";
inorder("A");
console.log(answer);

answer = "";
postorder("A");
console.log(answer);
