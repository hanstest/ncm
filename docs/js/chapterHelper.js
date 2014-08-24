(function() {
    var fs = require('fs');
    var path = require('path');

    module.exports.addChapter = function(chapterTitle, chapterFilename, chapterLatex, masterLatex) {
        var fileLatex = path.join('.', 'chapters', chapterFilename);
        fs.writeFileSync(fileLatex, chapterLatex);

        // Add the doc for this chapter to the main file.
        var masterLatexNewlyAdded = '\n';
        masterLatexNewlyAdded += '% Chapter "' + chapterTitle + '"\n';
        masterLatexNewlyAdded += '\\input{' + fileLatex + '}\n';

        // Append the current chapter to the file
        fs.appendFileSync(masterLatex, masterLatexNewlyAdded);

        console.log('Finished writing chapter: ' + chapterTitle);
    };

    module.exports.addListing = function(dir, file, title) {
        var filename = path.basename(file);
        title = '\\textit{' + title + '}';
        var caption = 'caption={' + title + '}';
        var label = 'label={' + filename + '}';
        var options = [caption, label].join(',');
        return '\\lstinputlisting[' + options + ']{' + file + '}\n';
    };
}());