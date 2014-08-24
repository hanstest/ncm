var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-l']);

ls.on('close', function (code, signal) {
    console.log('The child process gracefully exits with signal ' + signal);
});
