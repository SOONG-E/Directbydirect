import Permission from "./Permission";

const TYPE = Object.freeze({
  DIR: 0,
  FILE: 1,
});

class Tree {
  #name;
  #type;
  #permission;
  #child = null;

  constructor(name, type, permission = new Permission('rw-', 'r--', 'r--')) {
    this.#name = name;
    this.#type = type;
    this.#permission = permission;
    if (type === TYPE.DIR) {
      this.#child = {};
    }
  }

  getName() {
    return this.#name;
  }

  getType() {
    return this.#type;
  }

  addChild(tree) {
    if (tree.getType() === TYPE.FILE) {
      // 에러 핸들링
    }
    if (this.child.has(tree.getName()) {
      return;
    }
    this.child.add(tree);
  }
}

export default Tree;
