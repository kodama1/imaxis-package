var exec = require("child_process").exec;

exec("bower init", function(error, stdout, stderr) {
    if (error !== null) {
        console.log("Error: " + error);
    }
    done();
});