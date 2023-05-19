function thePyramidOfKingDjoser(base,increment) {
    let stepsCount = 0;
    let baseForSteps = base;
    while(baseForSteps > 0 ){
        stepsCount++;
        baseForSteps-=2;
    }
    baseForSteps = base;
    let outsideLayer = 0;
    let stoneCount = 0;
    let goldCount = 0;
    let marbelCount = 0;
    let lapizCount = 0;
    for (let step = 1; step <= stepsCount; step++) {
        if (step === stepsCount) {
            goldCount += baseForSteps*baseForSteps;
            break;
        }
        outsideLayer = baseForSteps*baseForSteps -((baseForSteps-2)*(baseForSteps-2));
        if(step % 5 === 0){
            lapizCount+=outsideLayer;
        }else{
            marbelCount+=outsideLayer;
        }
        stoneCount +=((baseForSteps-2)*(baseForSteps-2));
        baseForSteps-=2;
    }
console.log(`Stone required: ${Math.ceil(increment *stoneCount)}`);
console.log(`Marble required: ${Math.ceil(increment *marbelCount)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(increment *lapizCount)}`);
console.log(`Gold required: ${Math.ceil(increment *goldCount)}`);
console.log(`Final pyramid height: ${Math.floor(increment * stepsCount)}`);

}
thePyramidOfKingDjoser(11,1);
thePyramidOfKingDjoser(11,0.75);
thePyramidOfKingDjoser(12,1);
thePyramidOfKingDjoser(23,0.5);