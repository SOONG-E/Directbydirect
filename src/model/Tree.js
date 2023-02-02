import { TYPE } from '../constants/Type';

class Tree {
  #name;
  #type;
  #child = null;
  #parent = null;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
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
    this.#child.set(key, tree);
    return true;
  }
}

export default Tree;
