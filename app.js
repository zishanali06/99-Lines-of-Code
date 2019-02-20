let friends = ['Ashley', 'Anam', 'Fehzan', 'James', 'John'];

let i = 0;
while (i < friends.length) {
    let upper = friends[i].toUpperCase();
    console.log(upper + ':');
    for (count = 99; count >= 0; count--) {
        let oneless = count - 1;
        console.log(count + " lines of code in the file, " + count + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + oneless + " lines of code in the file");
    };
    i++;
};

