(function () {
    var fs = require('fs');
    var path = require('path');
    var helper = require('../js/chapterHelper');

    module.exports.writeChapter = function (latexDoc) {
        var filename = path.basename(__filename).replace('.js', '.tex');
        var chapterTitle = 'File System';
        var docChapter = '\n';
        docChapter += '\\chapter{' + chapterTitle + '}\n\n';
        docChapter += '\\section{Introduction}\n';

        // TODO Add a new section here.

        // Add the doc for this chapter to the main file.
        helper.addChapter(chapterTitle, filename, docChapter, latexDoc);
    }
}());