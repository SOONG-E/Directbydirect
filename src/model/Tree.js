import Permission from './Permission';
import { TYPE } from '../constants/Type';

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
      this.#child = new Map();
    }
  }

  getName() {
    return this.#name;
  }

  getType() {
    return this.#type;
  }

  getPermission() {
    return this.#permission;
  }

  getChild() {
    return this.#child;
  }

  setName(name) {
    this.#name = name;
  }

  setType(type) {
    this.#type = type;
  }

  setPermission(permission) {
    this.#permission = permission;
	}
 
  addChild(tree) {
    if (this.#type === TYPE.FILE) {
      // 에러 핸들링
    }
    const key = tree.getName();
    if (this.#child.has(key)) {
      return;
    }
    this.#child.set(key, tree);
  }
}

export default Tree;
