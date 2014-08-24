(function () {
    var fs = require('fs');
    var path = require('path');
    var helper = require('../js/chapterHelper');

    module.exports.writeChapter = function (latexDoc) {
        var title;
        var file;
        var caption;
        var label;
        var options = {};

        var filename = path.basename(__filename).replace('.js', '.tex');
        var chapterTitle = 'Child Process';
        var docChapter = '\n';
        docChapter += '\\chapter{' + chapterTitle + '}\n\n';

        docChapter += '\\section{Introduction}\n';

        /**
         * A new section.
         */
        docChapter += '\\section{child.pid}\n';
        docChapter += 'This property is an integer, indicating the process ';
        docChapter += 'identifier (normally referred to as the PID) of a ';
        docChapter += 'child process. This PID is used to uniquely identify ';
        docChapter += 'a process.\n';

        title = 'The PID of a child process is written to the console';
        file = '../src/child_process/001_pid.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_child_pid}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}';
        docChapter += 'Line \\ref{line_child_pid} in Listing ';
        docChapter += '\\ref{listing_child_pid} prints the process ID ';
        docChapter += 'to the console.\n';

        /**
         * A new section.
         */
        docChapter += '\\section{child.kill}\n';
        docChapter += 'We can use this function to send a signal to a child ';
        docChapter += 'process. A default signal \\texttt{SIGTERM} will be ';
        docChapter += 'sent if no argument is provided as shown in Listing ';
        docChapter += '\\ref{listing_kill_default}.\n';

        title = 'A child process is terminated by the default signal \\texttt{SIGTERM}';
        docChapter += 'When running the above code, it is verified that the ';
        docChapter += 'process is terminated by signal \\texttt{SIGTERM}.\n';
        docChapter += '\n';

        file = '../src/child_process/002_kill_default.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_kill_default}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}\n';

        docChapter += 'Now we send a signal \\texttt{SIGHUP} to the child ';
        docChapter += 'process as shown in Listing \\ref{listing_kill_sighup}. ';
        docChapter += 'When running the above code, it is verified that the ';
        docChapter += 'process is terminated by signal \\texttt{SIGHUP}.\n';
        docChapter += '\n';

        title = 'A child process is terminated by signal \\texttt{SIGHUP}';
        file = '../src/child_process/002_kill_sighup.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_kill_sighup}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}\n';

        docChapter += 'What if sending an invalid signal to a child process? ';
        docChapter += 'A signal \\texttt{NOOP} is sent to a child process ';
        docChapter += 'as demonstrated in Listing ';
        docChapter += '\\ref{listing_kill_noop}. ';
        docChapter += 'When running the above code, it is verified that an ';
        docChapter += 'error is thrown and it complains about the unknown ';
        docChapter += 'signal \\texttt{NOOP}.\n';

        title = 'An invalid signal \\texttt{NOOP} is sent to a child process';
        file = '../src/child_process/002_kill_noop.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_kill_noop}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}\n';

        docChapter += 'Finally if \\texttt{child.kill()} is not called and ';
        docChapter += 'a child process exits gracefully, a \\texttt{null} ';
        docChapter += 'signal is expected. It is verified by the code in ';
        docChapter += 'Listing \\ref{listing_finish_null_signal}. ';

        title = 'No signal is sent to a child process and it exits cleanly';
        file = '../src/child_process/002_finish_null_signal.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_finish_null_signal}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}\n';


        /**
         * A new section.
         */
        docChapter += '\\section{child\\_process.spawn}\n';
        docChapter += 'This function allows us to ';
        docChapter += 'launch a new process with the given command. The code ';
        docChapter += 'in Listing \\ref{listing_spawn_simple} lists all files ';
        docChapter += 'under the current directory and prints the file list ';
        docChapter += 'to the console. \n';

        title = 'Spawn a new process to list files under the current directory';
        file = '../src/child_process/003_spawn_simple.js';
        caption = 'caption={' + title + '}';
        label = 'label={listing_spawn_simple}';
        options = [caption, label].join(',');
        docChapter += '\\lstinputlisting[' + options + ']{' + file + '}\n';

        // TODO A new section here.

        // Add the doc for this chapter to the main file.
        helper.addChapter(chapterTitle, filename, docChapter, latexDoc);
    }
}());
