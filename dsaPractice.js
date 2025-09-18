
//BASIC LINKED LIST OPERATIONS 

//Singly Linked List
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        let node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head
            this.head=node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty())return false
        let curr=this.head;
        let ans="";
        while(curr){
            ans+=`${curr.value}=>`
            curr=curr.next
        }
        console.log(ans+null)
    }
    traversalUsingRecursion(head=this.head){
        if(head===null)return
        console.log(head.value);
        this.traversalUsingRecursion(head.next)
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node
        }
        this.size++
    }
    searchElement(value){
        if(this.isEmpty())return false;
        if(this.head.value===value)return true;
        let curr=this.head.next;
        while(curr){
            if(curr.value===value){
                return true
            }
            curr=curr.next
        }
        return false;
    }
    insertAt(index,value){
        if(index<0||index>this.size)return false
        if(index===0){
            this.prepend(value)
        }else if(index===this.size){
            this.append(value)
        }else{
            let curr=this.head
            let node=new Node(value)
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            node.next=curr.next
            curr.next=node
            this.size++
        }
    }
    deleteAtBegining(){
        if(this.isEmpty()){
            return null
        }else{
            this.head=this.head.next;
            this.size--
        }
    }
    deleteAtEnd(){
        if(this.isEmpty()){
            return null
        }else if(this.size===1){
            this.deleteAtBegining()
        }else{
            let curr=this.head;
            while(curr.next.next){
                curr=curr.next;
            }
            curr.next=null
            this.size--
        }
    }
    deleteAtIndex(index){
        if(index<0 || index>this.size){
            return
        }else if(index==0){
            this.deleteAtBegining()
        }else if(index==this.size){
            this.deleteAtEnd()
        }else{
            let curr=this.head;
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            curr.next=curr.next.next;
            this.size--;
        }
    }
    deleteByValue(value){
        if(this.isEmpty()){
            return null
        }else if(this.head.value===value){
            this.deleteAtBegining()
        }else{
            let curr=this.head;
            while(curr.next){
                if(curr.next.value===value){
                    curr.next=curr.next.next
                    this.size--
                    return true
                }else{
                    curr=curr.next
                }
  
            }
        }
    }
    modifyByValue(modVal,val){
        if(this.isEmpty()){
            return null
        }else if(this.head.value===modVal){
            this.head.value=val;
        }else{
            let curr=this.head;
            while(curr){
                if(curr.value===modVal){
                    curr.value=val;
                }
                curr=curr.next;
            }
        }
    }
    modifyByIndex(index,value){
        if(index<0|| index>this.size){
            return null
        }else if(index===0){
            this.head.value=value
        }else{
            let curr=this.head;
            for(let i=0;i<index;i++){
                curr=curr.next;
            }
            curr.value=value
        }
    }
    reverse(){
        if(this.isEmpty())return null
        let curr=this.head
        let next=null;
        let prev=null;
        while(curr){
            next=curr.next;
            curr.next=prev
            prev=curr;
            curr=next;
        }
        this.head=prev
    }
}
let linked=new LinkedList()
linked.prepend(20)
linked.prepend(30)
linked.prepend(40)
linked.prepend(50)
linked.prepend(60)
linked.print()
linked.append(10)
console.log("=== this is log after append() === ")
linked.print()
console.log(linked.searchElement(10))
console.log(linked.size)
// linked.traversalUsingRecursion()
linked.insertAt(2,4)
linked.print()
// linked.deleteAtBegining()
linked.print()
// linked.deleteAtEnd()
// linked.print()
// linked.deleteAtIndex(2)
// linked.deleteByValue(50)
linked.modifyByValue(10,70)
linked.print()
linked.modifyByIndex(2,10)
linked.print()
linked.reverse()
linked.print()

//Linked list leet code problem Questions :
 
// 206. Reverse Linked List
// 21. Merge Two Sorted Lists
// 83. Remove Duplicates from Sorted List
// 876. Middle of the Linked List
// 203. Remove Linked List Elements
// 142. Linked List Cycle II
// 141. Linked List Cycle
// 234. Palindrome Linked List
// 19. Remove Nth Node From End of List
// 160. Intersection of Two Linked Lists
// 25. Reverse Nodes in k-Group
// 148. Sort List



// =================================================================================================


//Doubly Linked List 

class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
        }
        this.size++
    }
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++ 
    }
    printFromEnd(){
        if(this.isEmpty()){
            console.log("Doubly linked list is empty : )")
        }else{
            let curr=this.tail
            let ans=""
            while(curr){
                ans += `${curr.value} ⇄ `
                curr=curr.prev
            }
            console.log(ans+"null")
        }
    }
    printFromFront(){
        if(this.isEmpty()){
            console.log("the doubly Linked list is empty : )")
        }else{
            let curr=this.head
            let ans=""
            while(curr){
                ans += `${curr.value} ⇄ ` 
                curr=curr.next
            }
            console.log(ans+'null')
        }
    }
    insertAtIndex(index,value){
        if(index<0||index>this.size)return
        if(index===0){
            this.prepend(value)
            return
        }else if(index===this.size){
            this.append(value)
            return
        }else{
            let node=new Node(value)
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            node.next=curr.next
            node.prev=curr
            curr.next=node
            node.next.prev=node
            this.size++
        }
    }
    deleteFromFront(){
        if(this.isEmpty()){
            return 
        }else if(this.size===1){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
        this.size--
    }
    deleteFromEnd(){
        if(this.isEmpty()){
            return 
        }else if(this.size===1){
            this.tail=null
            this.head=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
        this.size--
    }
    deleteAt(index){
        if(index<0 || index>=this.size){
            return
        }else if(index===0){
            this.deleteFromFront()
        }else if(index===this.size-1){
            this.deleteFromEnd()
        }else{
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            curr.next=curr.next.next
            curr.next.prev=curr
            this.size--
        }
    }
    reverse(){
        if(this.isEmpty()){
            return
        }else{
            let temp=null
            let curr=this.head
            while(curr){
                temp=curr.prev
                curr.prev=curr.next
                curr.next=temp
                curr=curr.prev
            }
            temp=this.head
            this.head=this.tail
            this.tail=temp
        }
        
    }
}
let dLinked=new DoublyLinkedList()
dLinked.prepend(10)
dLinked.prepend(20)
dLinked.prepend(30)
dLinked.prepend(40)
// dLinked.append(50)
// dLinked.printFromEnd()
dLinked.printFromFront()
dLinked.insertAtIndex(2,7)
dLinked.insertAtIndex(5,7)
dLinked.printFromFront()
dLinked.deleteAt(2)
dLinked.printFromFront()
dLinked.reverse()
dLinked.printFromFront()

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class CircularLinkedList{
    constructo(){
        this.head=null
        this.size=0
        this.tail=null
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            node.next=this.head
        }else{
            node.next=this.head
            this.head=node
            this.tail.next=this.head
        }
        this.size++
    }

}

//Stack
//Basic implementation of stack
class Stack{
    constructor(size){
        this.size=size
        this.top=-1
        this.stack=new Array(size)
    }
    isEmpty(){
        return this.top===-1
    }
    push(item){
        if(this.top>=this.size-1){
            console.log("Stack overflow ")
            return false
        }else{
             this.stack[++this.top]=item
             return true
        }
    }
    pop(){
        if(this.top===-1){
            console.log("stack underflow")
            return false
        }else{
            return this.stack[this.top--]
        }
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return false
        }else{
            return this.stack[this.top]
        }
    }
    toReverse(){
        if(this.isEmpty()){
            console.log("stack is empty")
            return false
        }else{
            let dum=this.top
            let arr=[]
            while(dum>=0){
                arr.push(this.stack[dum])
                dum--
            }
            console.log(arr)
        }
    }
}

const stack=new Stack(5)
stack.push("a")
stack.push("p")
stack.push("p")
stack.push("l")
stack.push("e")
console.log(stack.stack)
stack.toReverse()

//leetcode problem:

// 155. Min Stack
// 1047. Remove All Adjacent Duplicates In String
// 20. Valid Parentheses

//Queue Datastructure


class Queue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length===0
    }
    enqueue(value){
        this.queue.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return false
        }else{
          this.queue.shift()
          return true
        }
    }
    getFront(){
        if(this.isEmpty()){
            console.log("queue is empty")
        }else{
            console.log(this.queue[0])
        }
    }
    display(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }else{
            console.log(this.queue.join(' '))
        }
    }
}
const q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.display()
q.dequeue()
q.display()
q.getFront()

//Hash table


 class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    _hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index=this._hash(key)
        let bucket=this.table[index]
        if(!bucket){
           this.table[index]=[[key,value]]
        }else{

            let sameKeyValue=bucket.find((itm)=>itm[0]===key)
            if(sameKeyValue){
                sameKeyValue[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index=this._hash(key)
        let bucket=this.table[index]
        if(!bucket){
            return undefined
        }else{
            let sameKey=bucket.find((itm)=>itm[0]===key)
            if(sameKey){
                return sameKey[1]
            }else{
                return undefined
            }
        }
    }
    remove(key){
        let index=this._hash(key)
        let bucket=this.table[index]
        if(!bucket){
            return undefined
        }else{
            let sameKey=bucket.find((itm)=>itm[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
    
}

const hashTable=new HashTable(10)
hashTable.set("name","sangeeth")
hashTable.set("mane","san")
hashTable.set("age","22")
hashTable.set("place","kannur")
console.log(hashTable.get("mane"))
hashTable.display()








