var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var S = require('string');


/**
 * Add LaTex header.
 */
var latexDoc = path.join(__dirname, 'book.tex');
var latexHeader = path.join('.', 'template', 'header.tex');
fs.writeFileSync(latexDoc, '\n\\input{' + latexHeader + '}\n');
console.log('Finished writing LaTex header');


/**
 * Add all chapters here.
 */
require('./chapters/assert').writeChapter(latexDoc);
//require('./chapters/child_process').writeChapter(latexDoc);
//require('./chapters/cluster').writeChapter(latexDoc);
//require('./chapters/fs').writeChapter(latexDoc);
// TODO Add more chapters


/**
 * Add LaTex footer.
 */
var latexFooter = path.join('.', 'template', 'footer.tex');
fs.appendFileSync(latexDoc, '\n\\input{' + latexFooter + '}\n');
console.log('Finished writing LaTex footer');


/**
 * Compile the LaTex file to PDF and delete all unnecessary temporary files.
 */
var pdflatex = spawn('/usr/texbin/pdflatex', ['-shell-escape', latexDoc]);
pdflatex.on('close', function (code) {
    var filesToDelete = getFilesToDelete();
    filesToDelete.forEach(function (file) {
        deleteFile(file);
    });

});

function getFileContent(srcPath, callback) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            callback(data);
        }
    );
}

function getFilesToDelete() {
    var extNames = ['log', 'aux', 'toc', 'gz(busy)'];
    // TODO Do not delete any temp files
    extNames = [];
    var files = fs.readdirSync(__dirname);
    var filesToDelete = [];
    files.forEach(function (file) {
        for (var i = 0; i < extNames.length; i++) {
            var extName = extNames[i];
            if (S(file).endsWith(extName)) {
                filesToDelete.push(path.join(__dirname, file));
            }
        }

    });
    return filesToDelete;
}

function deleteFile(targetFile) {
    fs.unlink(targetFile, function (err) {
        if (err) throw err;
        console.log('Successfully deleted ' + targetFile);
    });
}