function binarySearch(list, start, end, item){
    const mid = start+ Math.floor((end -start)/2);
    if(start <= end){
        if(list[mid] == item){
            return mid;
        }
        if(item < list[mid]){
            return binarySearch(list, start, mid - 1, item);
        }
        if(item >list[mid]){
            return binarySearch(list, start, mid + 1, item);
        }
    }
    return null;
};