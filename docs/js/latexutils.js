(function () {

    var MINT_OPTIONS = [
        'frame=leftline',
        'bgcolor=bg',
        'framesep=3mm',
        'fontfamily=courier',
        'fontsize=\\scriptsize',
        'linenos',
        'mathescape'
    ].join(',');

    exports.mintit = function (code) {
        var output = '';
        output += '\\begin{minted}[' + MINT_OPTIONS + ']{javascript}\n';
        output += code;
        output += '\\end{minted}\n';
        return output;
    }

}());