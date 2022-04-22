function exemplo4(N,M){
    let a =0;

        //O(N²)
    for (let i=0; i<N; i++){ //O(N)
        for(let j=0; j<N; j++){ //O(N)
            if(i!==j) a++;
        }
    }

    //
        //O(N)
    let b= 0;
    for(let i=0; i<N; i++){ //O(N)
        if(i !== j) b= i+j;
    }

    //
        //O(N)
    let c= 0;
    for(let i=0; i<N; i++){
        if(i%2 ==0) c += i;
    }


    return a+b+c

//O(N²)+O(N)+O(N)
//O(N²)+2O(N) -> ignora constante
//O(N²)+O(N)
//O(N²) -> pega o maior valor






}