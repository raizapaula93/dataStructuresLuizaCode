function exemplo1(N){
    for(let i=0; i<N;i++){              //O(N)
        if(i%2 === 0) console.log(i);   //O(1)
    }
}
//O(N)*(O1) = O(N)