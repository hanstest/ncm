var spawn = require('child_process').spawn;
var ls  = spawn('ls', ['-l']);

console.log('Spawned child pid: ' + ls.pid); /*@\label{line_child_pid}@*/
