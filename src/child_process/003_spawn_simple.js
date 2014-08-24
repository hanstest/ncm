var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-lh', '.']);

ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

ls.on('close', function (code) {
    console.log('child process exited with code ' + code);
});
