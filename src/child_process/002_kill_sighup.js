var spawn = require('child_process').spawn;
var grep = spawn('grep', ['ssh']);

grep.on('close', function (code, signal) {
    console.log('The child process is killed after receiving signal ' + signal);
});

grep.kill('SIGHUP');
