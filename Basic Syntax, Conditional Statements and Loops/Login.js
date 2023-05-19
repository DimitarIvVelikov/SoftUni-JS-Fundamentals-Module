function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let correctPassword = username.split("").reverse().join("");
    let currentPassword = input[index];
    index++;
    let isLoggedIn = false;
    let counter = 0;
    while (isLoggedIn === false) {
        if (currentPassword === correctPassword) {
            isLoggedIn = true;
            console.log(`User ${username} logged in.`);
            break;
        }
        counter++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);

        currentPassword = input[index];
        index++;
    }

}
login(['Acer','login','go','let me in','recA']);
login(['momo','omom'] );
login(['sunny','rainy','cloudy','sunny','not sunny']);