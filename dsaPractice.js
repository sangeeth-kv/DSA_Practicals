
//BASIC LINKED LIST OPERATIONS 

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


// =================================================================================================
