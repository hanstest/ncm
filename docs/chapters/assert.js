(function () {
    var cp = require('child_process');
    var fs = require('fs');
    var path = require('path');
    var helper = require('../js/chapterHelper');

    var dir = path.join('..', 'src', path.basename(__filename).replace('.js', ''));

    module.exports.writeChapter = function (latexDoc) {
        var chapterTitle = 'Assertion Testing';
        var doc = '\n';
        doc += '\\chapter{' + chapterTitle + '}\n\n';
        doc += '\\section{Introduction}\n';
        doc += 'This module is used for writing unit tests for your applications, you can access ';
        doc += 'it with \\texttt{require(\'assert\')}.';

        /**
         * A new section.
         */
        doc += '\\section{assert.fail}\n';

        doc += '\\subsection*{Syntax:}\n';
        doc += '\\begin{center}';
        doc += '\\texttt{assert.fail(actual, expected, message, operator)}\n\n';
        doc += '\\end{center}';
        doc += 'where\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item \\texttt{actual}: the actual value returned by your function\n';
        doc += '\\item \\texttt{expected}: the value you expect your function returns\n';
        doc += '\\item \\texttt{message}: the message you want to display when an exception ';
        doc += 'is thrown\n';
        doc += '\\item \\texttt{operator}: the operator is used to separate the values for ';
        doc += '\\texttt{actual} and \\texttt{expected} when \\texttt{message} is falsy.\n';
        doc += '\\end{itemize}\n';
        doc += 'This function throws an exception that displays the message your provided ';
        doc += 'via parameter \\texttt{message} or the values for \\texttt{actual} and ';
        doc += '\\texttt{expected} separated by the delimiter you provide via parameter ';
        doc += '\\texttt{separator}.\n';
        doc += '\n';

        /**
         * A new section.
         */
        doc += '\\subsection{Three Arguments}\n';

        // ***************************************************************************
        var scriptFileName1 = '001_fail_with_message.js';
        var scriptFile1 = path.join(dir, scriptFileName1);
        var title1 = 'An exception is thrown with customized message';
        doc += 'Let\'s start with an example with three arguments: \\texttt{actual}, ';
        doc += '\\texttt{expected} and \\texttt{message}, which is also used most often ';
        doc += 'in practice. It is shown in \\textit{Listing~\\ref{' + scriptFileName1 + '}}.\n';
        doc += helper.addListing(dir, scriptFile1, title1);

        // Run the example script and write the error to log file.
        var logFileName1 = scriptFileName1.replace('.js', '.log');
        var logFile1 = scriptFile1.replace('.js','.log');
        cp.exec('node ' + scriptFile1, {}, function(err, stdout, stderr) {
            fs.writeFile(logFile1, stderr);
        });

        var logTitle1 = 'The error messages of running script in Listing~\\ref{' + scriptFileName1 + '}';
        doc += 'Running the code in \\textit{Listing~\\ref{' + scriptFileName1 + '}} produces the ';
        doc += 'log as shown in \\textit{Listing~\\ref{' + logFileName1 + '}}.';
        doc += helper.addListing(dir, logFile1, logTitle1);

        doc += 'A few takeaways from the error messages in ';
        doc += '\\textit{Listing~\\ref{' + logFileName1 + '}}.\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item the exception thrown by \\texttt{assert.fail} is an instance of ';
        doc += '\\texttt{assert.AssertionError}, which inherits from Javascript\'s ';
        doc += '\\texttt{Error} object.\n';
        doc += '\\item the error message \\texttt{"1 is not equal to 2"} is the ';
        doc += 'customized message provided by you.\n';
        doc += '\\end{itemize}\n';

        // ***************************************************************************
        var scriptFileName2 = '001_fail_with_message_catch.js';
        var scriptFile2 = path.join(dir, scriptFileName2);
        var title2 = 'An exception is thrown and caught';
        doc += 'We can also put the function call into a \\texttt{try...catch} statement ';
        doc += 'as shown in \\textit{Listing~\\ref{' + scriptFileName2 + '}}.\n';
        doc += helper.addListing(dir, scriptFile2, title2);

        /**
         * A new section.
         */
        doc += '\\subsection{Four Arguments}\n';

        // ***************************************************************************
        var scriptFileName3 = '001_fail_truthy_message.js';
        var scriptFile3 = path.join(dir, scriptFileName3);
        var title3 = 'An exception is thrown with truthy message';
        doc += 'The fourth argument \\texttt{operator} will be used to separate the ';
        doc += 'the actual value and expected value when the third argument ';
        doc += '\\texttt{message} is falsy. We add the fourth argument as shown in ';
        doc += '\\textit{Listing~\\ref{' + scriptFileName3 + '}}.\n';
        doc += helper.addListing(dir, scriptFile3, title3);

        // Run the example script and write the error to log file.
        var logFileName3 = scriptFileName3.replace('.js', '.log');
        var logFile3 = scriptFile3.replace('.js','.log');
        cp.exec('node ' + scriptFile3, {}, function(err, stdout, stderr) {
            fs.writeFile(logFile3, stderr);
        });

        var logTitle3 = 'The error messages of running script in Listing~\\ref{' + scriptFileName3 + '}';
        doc += 'Running the code in \\textit{Listing~\\ref{' + scriptFileName3 + '}} produces the ';
        doc += 'error stack trace as shown in \\textit{Listing~\\ref{' + logFileName3 + '}}.';
        doc += helper.addListing(dir, logFile3, logTitle3);

        doc += 'An astute reader will notice that the error message in ';
        doc += '\\textit{Listing~\\ref{' + logFileName3 + '}} is the same as the one in ';
        doc += '\\textit{Listing~\\ref{' + logFileName1 + '}}, which indicates ';
        doc += 'that the fourth argument \\texttt{operator} is not used when the third ';
        doc += 'argument \\texttt{message} is truthy. Let\'s see what will happen if ';
        doc += 'the third argument is falsy. ';

        // ***************************************************************************
        var scriptFileName4 = '001_fail_empty_message.js';
        var title4 = 'An exception is thrown with falsy message';
        doc += 'The code snippet in \\textit{Listing~\\ref{' + scriptFileName4 + '}} shows the changes.';
        doc += helper.addListing(dir, path.join(dir, scriptFileName4), title4);

        // Run the example script and write the error to log file.
        var logFileName4 = scriptFileName4.replace('.js', '.log');
        var logFile4 = path.join(dir, logFileName4);
        cp.exec('node ' + path.join(dir, scriptFileName4), {}, function(err, stdout, stderr) {
            fs.writeFile(logFile4, stderr);
        });

        var logTitle4 = 'The error messages of running script in Listing~\\ref{' + scriptFileName4 + '}';
        doc += 'The error message in \\textit{Listing~\\ref{' + logFileName3 + '}} shows that the ';
        doc += 'the \\texttt{operator} we provided is used to separate the actual value and the ';
        doc += 'expected value.';
        doc += helper.addListing(dir, logFile4, logTitle4);

        /**
         * A new section.
         */
        doc += '\\section{assert.ok}\n';
        doc += '\\label{sec:assert.ok}\n';

        doc += '\\subsection*{Syntax:}\n';
        doc += '\\begin{center}';
        doc += '\\texttt{assert.ok(value, [message])}\n\n';
        doc += '\\end{center}';
        doc += 'where\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item \\texttt{value}: check whether the value is truthy\n';
        doc += '\\item \\texttt{message}: the message you want to display when an exception is thrown\n';
        doc += '\\end{itemize}\n';
        doc += '\n';

        doc += 'This function is equivalent to function \\texttt{assert.equal(!!value, true, message);} ';
        doc += 'in Section~\\ref{sec:assert.equal}.\n';

        // TODO Add more description here.

        doc += '\\subsection{One Argument}\n';

        // ***************************************************************************
        var scriptFileName5 = '002_ok_empty_message.js';
        var logFileName5 = scriptFileName5.replace('.js', '.log');
        var scriptFile5 = path.join(dir, scriptFileName5);
        var title5 = 'One is Okay and the other is not Okay';
        doc += 'The script in \\textit{Listing~\\ref{' + scriptFileName5 + '}} shows two simple ';
        doc += 'examples of using this function. The error message in ';
        doc += '\\textit{Listing~\\ref{' + logFileName5 + '}} shows operator \"\\texttt{==}\" ';
        doc += 'is used to separate the actual value and the expected value.\n';
        doc += helper.addListing(dir, scriptFile5, title5);

        // Run the example script and write the error to log file.
        var logFile5 = path.join(dir, logFileName5);
        cp.exec('node ' + path.join(dir, scriptFileName5), {}, function(err, stdout, stderr) {
            fs.writeFile(logFile5, stderr);
        });

        var logTitle5 = 'The error messages of running script in Listing~\\ref{' + scriptFileName5 + '}';
        doc += helper.addListing(dir, logFile5, logTitle5);

        doc += '\\subsection{Two Arguments}\n';

        // ***************************************************************************
        var scriptFileName6 = '002_ok_with_message.js';
        var logFileName6 = scriptFileName5.replace('.js', '.log');
        var scriptFile6 = path.join(dir, scriptFileName6);
        var title6 = 'One is Okay and the other is not Okay: with optional truthy message';
        doc += 'The script in \\textit{Listing~\\ref{' + scriptFileName6 + '}} shows two ';
        doc += 'examples with customized message. The customized message shows up in the ';
        doc += 'error log in \\textit{Listing~\\ref{' + logFileName6 + '}}.\n';
        doc += helper.addListing(dir, scriptFile6, title6);

        // Run the example script and write the error to log file.
        var logFile6 = path.join(dir, logFileName6);
        cp.exec('node ' + path.join(dir, scriptFileName6), {}, function(err, stdout, stderr) {
            fs.writeFile(logFile6, stderr);
        });

        var logTitle6 = 'The error messages of running script in Listing~\\ref{' + scriptFileName6 + '}';
        doc += helper.addListing(dir, logFile6, logTitle6);

        /**
         * A new section.
         */
        doc += '\\section{assert}\n';
        doc += '\\subsection*{Syntax:}\n';
        doc += '\\begin{center}';
        doc += '\\texttt{assert(value, [message])}\n\n';
        doc += '\\end{center}';
        doc += 'where\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item \\texttt{value}: check whether the value is truthy\n';
        doc += '\\item \\texttt{message}: the message you want to display when an exception is thrown\n';
        doc += '\\end{itemize}\n';
        doc += '\n';

        doc += 'This function is exactly the same as function \\texttt{assert.ok}. ';
        doc += 'In fact, in the source code for module \\texttt{assert}, you can see the line below:\n\n';
        doc += '\\lstinline$var assert = module.exports = ok;$';
        doc += '\n';

        /**
         * A new section.
         */
        doc += '\\section{assert.equal}\n';
        doc += '\\label{sec:assert.equal}\n';
        doc += '\\subsection*{Syntax:}\n';
        doc += '\\begin{center}';
        doc += '\\texttt{assert.equal(actual, expected, [message])}\n\n';
        doc += '\\end{center}';
        doc += 'where\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item \\texttt{actual}: the actual value returned by your function\n';
        doc += '\\item \\texttt{expected}: the value you expect your function returns\n';
        doc += '\\item \\texttt{message}: the message you want to display when an exception ';
        doc += 'is thrown\n';
        doc += '\\end{itemize}\n';
        doc += '\n';

        doc += 'The \\lstinline$assert.equal$ method is implemented in Node.js as follows:\n';
        var scriptFileName7 = 'src.assert.equal.js';
        var scriptFile7 = path.join(dir, scriptFileName7);
        var title7 = 'The implementation of \\lstinline$assert.equal$ in Node.js';
        doc += helper.addListing(dir, scriptFile7, title7);

        doc += 'It is clear to see in \\textit{Listing~\\ref{' + scriptFileName7;
        doc += '}} that \\lstinline$assert.equal$ performs shallow, coercive ';
        doc += 'equality test with the equal comparison operator (==). Let\'s ';
        doc += 'verify this with a few examples.';

        var scriptFileName8 = '003_equal_passed.js';
        var scriptFile8 = path.join(dir, scriptFileName8);
        var title8 = 'Passing examples of \\lstinline$assert.equal$';
        doc += helper.addListing(dir, scriptFile8, title8);

        var scriptFileName9 = '003_equal_failed.js';
        doc += 'All examples in \\textit{Listing~\\ref{' + scriptFileName8 + '}} pass. ';
        doc += '\\textit{Listing~\\ref{' + scriptFileName9  + '}} provides a few ';
        doc += 'failing examples. You may wonder why the assertion in ';
        doc += 'Line \\ref{line_equal_failed} fails. Though the two objects have the ';
        doc += 'same properties and values, they refer to two physically different ';
        doc += 'objects. In another word, \\lstinline$assert.equal$ checks whether \n';
        doc += '\\lstinline$actual$ and \\lstinline$expected$ points two the same ';
        doc += 'object when both of them are objects.';
        var scriptFile9 = path.join(dir, scriptFileName9);
        var title9 = 'Failing examples of \\lstinline$assert.equal$';
        doc += helper.addListing(dir, scriptFile9, title9);

        /**
         * A new section.
         */
        doc += '\\section{assert.notEqual}\n';
        doc += '\\label{sec:assert.notEqual}\n';
        doc += '\\subsection*{Syntax:}\n';
        doc += '\\begin{center}';
        doc += '\\texttt{assert.notEqual(actual, expected, [message])}\n\n';
        doc += '\\end{center}';
        doc += 'where\n';
        doc += '\\begin{itemize}\n';
        doc += '\\item \\texttt{actual}: the actual value returned by your function\n';
        doc += '\\item \\texttt{expected}: the value you expect your function returns\n';
        doc += '\\item \\texttt{message}: the message you want to display when an exception ';
        doc += 'is thrown\n';
        doc += '\\end{itemize}\n';
        doc += '\n';

        // TODO Add a new section here.

        // Add the doc for this chapter to the main doc.
        var filename = path.basename(__filename).replace('.js', '.tex');
        helper.addChapter(chapterTitle, filename, doc, latexDoc);
    }
}());