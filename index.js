var theme = require('./theme/index.js');
var fs = require("fs");

var langs = ['fr', 'en'];
var defaultLang = 'fr';

langs.forEach(function(lang) {
    var resumeJson = require('./data/resume-' + lang + '.json');

    var fileName = 'index' + (lang == defaultLang ? '' : '-' + lang) + '.html';
    fs.writeFileSync(__dirname + '/dist/' + fileName, theme.render(resumeJson, lang));
});

