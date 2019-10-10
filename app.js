const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showDialog = () => {
    rl.question('Enter expression (for example 5+5-2): ', (answer) => {
        try {
            const val = eval(answer);
            console.log("Answer is: " + val);
            rl.close();
        } catch(exp) {
            console.log("Wrong expression :(");
            console.log("Try again..")
            console.log("------");
    
            showDialog();
        }
    
    });
}

showDialog();