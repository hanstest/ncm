(function () {
    var cp = require('child_process');
    var fs = require('fs');
    var path = require('path');
    var helper = require('../js/chapterHelper');
    var dir = path.join('..', 'src', path.basename(__filename).replace('.js', ''));

    module.exports.writeChapter = function (latexDoc) {
        var filename = path.basename(__filename).replace('.js', '.tex');
        var chapterTitle = 'Events';
        var doc = '\n';
        doc += '\\chapter{' + chapterTitle + '}\n\n';
        doc += '\\section{Introduction}\n';

        // TODO Add a new section here.

        // Add the doc for this chapter to the main file.
        var filename = path.basename(__filename).replace('.js', '.tex');
        helper.addChapter(chapterTitle, filename, doc, latexDoc);
    }
}());