let N = 10;

function exemplo2(N){
    for(let i=0; i<N;i++){              //O(N)será executado n vezes
        for(let j=0;j<N;j++){           //O(N)
            if(i !== j) console.log(i,j);
        }
    }


}
exemplo2(N)
//complexidade O(N) * O(N) pq 1 for ta dentro do outro = O(N)²
//se fosse uma fora da outa seria O(N) + O(N)