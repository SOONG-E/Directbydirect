import { TYPE } from '../constants/Type';

class Tree {
  #name;
  #type;
  #depth;
  #child = null;
  #parent = null;

  constructor(name, type, depth = 0) {
    this.#name = name;
    this.#type = type;
    this.#depth = depth;
    if (type === TYPE.DIR) {
      this.#child = new Map();
    }
  }

  getName() {
    return this.#name;
  }

  getType() {
    return this.#type;
  }

  getDepth() {
    return this.#depth;
  }

  getChild() {
    return this.#child;
  }

  getParent() {
    return this.#parent;
  }

  setName(name) {
    this.#name = name;
  }

  setType(type) {
    this.#type = type;
  }

  setDepth(depth) {
    this.#depth = depth;
  }

  setParent(parent) {
    this.#parent = parent;
  }

  addChild(tree, force = false) {
    if (this.#type === TYPE.FILE) {
      // 에러 핸들링
    }
    const key = tree.getName();
    if (!force && this.#child.has(key)) {
      return false;
    }
    tree.setDepth(this.#depth + 1);
    this.#child.set(key, tree);
    return true;
  }
}

export default Tree;
