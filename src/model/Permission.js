class Permission {
	#user;
	#group;
	#others;
  
	constructor(user, group, others) {
	  this.#user = user;
	  this.#group = group;
	  this.#others = others;
	}
  
	getUser() {
	  return this.#user;
	}
  
	getGroup() {
	  return this.#group;
	}
  
	getOthers() {
	  return this.#others;
	}
  }

  export default Permission;
  