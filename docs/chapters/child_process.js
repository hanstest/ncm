(function () {
    var fs = require('fs');
    var path = require('path');
    var helper = require('../js/chapterHelper');
    var dir = path.join('..', 'src', path.basename(__filename).replace('.js', ''));

    module.exports.writeChapter = function (latexDoc) {
        var chapterTitle = 'Child Process';
        var doc = '\n';
        doc += '\\chapter{' + chapterTitle + '}\n\n';

        doc += '\\section{Introduction}\n';

        /**
         * A new section.
         */
        doc += '\\section{child.pid}\n';
        doc += 'This property is an integer, indicating the process ';
        doc += 'identifier (normally referred to as the PID) of a ';
        doc += 'child process. This PID is used to uniquely identify ';
        doc += 'a process.\n';

        var title1 = 'The PID of a child process is written to the console';
        var filename1 = '001_pid.js';
        var file1 = path.join(dir, filename1);
        doc += helper.addListing(dir, file1, title1);
        doc += 'Line \\ref{line_child_pid} in Listing \\ref{listing_child_pid} prints ';
        doc += 'the process ID to the console.\n';

        /**
         * A new section.
         */
        doc += '\\section{child.kill}\n';
        doc += 'We can use this function to send a signal to a child ';
        doc += 'process. A default signal \\texttt{SIGTERM} will be ';
        doc += 'sent if no argument is provided as shown in Listing ';
        doc += '\\ref{listing_kill_default}.\n';

        doc += 'When running the above code, it is verified that the ';
        doc += 'process is terminated by signal \\texttt{SIGTERM}.\n';
        doc += '\n';

        var title2 = 'A child process is terminated by the default signal \\texttt{SIGTERM}';
        var filename2 = '002_kill_default.js';
        var file2 = path.join(dir, filename2);
        doc += helper.addListing(dir, file2, title2);

        doc += 'Now we send a signal \\texttt{SIGHUP} to the child ';
        doc += 'process as shown in Listing \\ref{listing_kill_sighup}. ';
        doc += 'When running the above code, it is verified that the ';
        doc += 'process is terminated by signal \\texttt{SIGHUP}.\n';
        doc += '\n';

        var title3 = 'A child process is terminated by signal \\texttt{SIGHUP}';
        var filename3 = '002_kill_sighup.js';
        var file3 = path.join(dir, filename3);
        doc += helper.addListing(dir, file3, title3);

        doc += 'What if sending an invalid signal to a child process? ';
        doc += 'A signal \\texttt{NOOP} is sent to a child process ';
        doc += 'as demonstrated in Listing ';
        doc += '\\ref{listing_kill_noop}. ';
        doc += 'When running the above code, it is verified that an ';
        doc += 'error is thrown and it complains about the unknown ';
        doc += 'signal \\texttt{NOOP}.\n';

        var title4 = 'An invalid signal \\texttt{NOOP} is sent to a child process';
        var fname4 = '002_kill_noop.js';
        var file4 = path.join(dir, fname4);
        doc += helper.addListing(dir, file4, title4);

        doc += 'Finally if \\texttt{child.kill()} is not called and ';
        doc += 'a child process exits gracefully, a \\texttt{null} ';
        doc += 'signal is expected. It is verified by the code in ';
        doc += 'Listing \\ref{listing_finish_null_signal}. ';

        var title5 = 'No signal is sent to a child process and it exits cleanly';
        var fname5 = '002_finish_null_signal.js';
        var file5 = path.join(dir, fname5);
        doc += helper.addListing(dir, file5, title5);

        /**
         * A new section.
         */
        doc += '\\section{child\\_process.spawn}\n';
        doc += 'This function allows us to ';
        doc += 'launch a new process with the given command. The code ';
        doc += 'in Listing \\ref{listing_spawn_simple} lists all files ';
        doc += 'under the current directory and prints the file list ';
        doc += 'to the console. \n';

        var title6 = 'Spawn a new process to list files under the current directory';
        var fname6 = '003_spawn_simple.js';
        var file6 = path.join(dir, fname6);
        doc += helper.addListing(dir, file6, title6);

        // TODO A new section here.

        // Add the doc for this chapter to the main file.
        var filename = path.basename(__filename).replace('.js', '.tex');
        helper.addChapter(chapterTitle, filename, doc, latexDoc);
    }
}());
