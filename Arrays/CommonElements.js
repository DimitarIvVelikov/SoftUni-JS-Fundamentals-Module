function commonElements(dataOne, dataTwo) {
    for (let i = 0; i < dataOne.length; i++) {
        for (let y = 0; y < dataTwo.length; y++) {
            if (dataOne[i] === dataTwo[y]) {
                console.log(dataOne[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);