

var llist = new SinglyLinkedListNode()
console.log(llist)


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    var count = 0;
    var new_list = new SinglyLinkedList()
    var pointer = llist
    while (pointer.next != null){
        if (count == position){
            new_list.insertNode(data)
        }
        new_list.insertNode(pointer.data)
        pointer = pointer.next
        count ++
    } 
    if (pointer.next == null &&  count == position){
        new_list.insertNode(data)
        new_list.insertNode(pointer.data)
    } else if (pointer.next == null){
        new_list.insertNode(pointer.data)
    }
    return new_list.head
 }