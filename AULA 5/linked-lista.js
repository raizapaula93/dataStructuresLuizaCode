class Node { //cria um espaço de memória para colocar o dado e o ponteiro
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
/---------------------------------------------------------------------------------------------------------------------  
  class SimpleList {
    constructor(size=0, head=null){//a lista inicia com 0
      this.size = size;//o tamano da lista começa indefinido
      this.head = null;//a cabeça do nó começa nula
    }
    
    add(value) {
      // inicia lista com valores
      let currentNode = this.head;//pega a referência da cabeça do nó/final da lista
  
      // cria um novo nó
      let node = new Node(value);//tudo q for colocado em currenteNode, vai bater no atributo this.head
      
      // verifica se o nó atual está vazio/nulo
      if(!currentNode) {
        this.head = node;
        this.size++;
        return node;
      }
  
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
  
      currentNode.next = node;
      this.size++;
      return node;
    }
//----------------------------------------------------------------------------imprime a lista  
    printList(list) {
      if (list == null) {
        console.log('is empty');
        return false;//porque retornar false
      }
      else {
        let temp = list.head;
        let str_list = ''
        
        while(temp != null)  {
          str_list += temp.data + "->";
          temp = temp.next;
        }
  
        console.log(str_list);
        return true;//porque retornar true
      }
    }
  }
  
  const list = new SimpleList();
  list.add(5);
  list.add(8);
  list.add(10);
  list.add(1);
  list.printList(list);