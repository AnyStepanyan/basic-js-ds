const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
        this.array = []
      }
      root() {
        this.data === 'iuohoi'
      }
      
      add( data) {
       this.array.push(data)
      }
    
      has( data ) {
      return this.array.includes(data)
      }
    
      find(data ) {
    return this.array.find(element => element === data? data: null)
      }
    
      remove(data) {
       this.array.splice(this.array.indexOf(data),1) 
      }
    
      min() {
    if(this.array.length=== 0){
          return null
        } else{
            return Math.min(...this.array)
        }
      }
    
      max() {
        if(this.array.length=== 0){
          return null
        } else{
            return Math.max(...this.array)
        }
      }
}

module.exports = {
  BinarySearchTree
};