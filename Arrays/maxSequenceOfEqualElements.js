function maxSequenceOfEqualElements(arr){
    let bestSeq= 0;
    let arrTemp=[];
    let seqCounter = 1;
    let starOfBestSeq = 0;
    for (let i = 0; i < arr.length; i++) {//O(N)
        let y = i+1;    //O(1)
        while (arr[i] === arr[y]) {//O(N)
            y++; //O(1)
            seqCounter++; //O(1)
           }
           if(seqCounter > bestSeq && seqCounter !== 1){//O(1)
                starOfBestSeq=i; //O(1)
                bestSeq = seqCounter; //O(1)
                i+=bestSeq-1; //O(1)
                         
           }
           seqCounter=1; //O(1)
    }
    for (let z = starOfBestSeq; z < bestSeq+starOfBestSeq; z++) { //O(N)
        arrTemp.push(arr[z]);
    }
    console.log( arrTemp.join(" ")); //O(1)
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3] );
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);