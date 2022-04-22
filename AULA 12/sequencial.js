function linearSearch(list,item){
    for(var i =0; i<list.length; i++){
        if (list[i] == item){
            return i;
        }
    }
    return null;
}