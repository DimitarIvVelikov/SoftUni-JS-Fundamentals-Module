function charactersInRange(char1 , char2) {
    let starChar = Math.min(char1.charCodeAt(),char2.charCodeAt());
    let lastChar = Math.max(char1.charCodeAt(),char2.charCodeAt());
    let charArray = [];

    for (let index = starChar+1; index < lastChar; index++) {
        charArray.push(String.fromCharCode(index));
        
    }
    console.log(charArray.join(" "));
}
charactersInRange('a','d');
charactersInRange('C','#');