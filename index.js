const theme = require('./theme/index.js');
const fs = require("fs");

const langs = ['fr', 'en'];
const defaultLang = 'fr';

langs.forEach(function(lang) {
  const resumeJson = require(`./data/resume-${lang}.json`);

  const fileName = (lang == defaultLang ? 'index' : lang) + '.html';
  fs.writeFileSync(__dirname + `/dist/${fileName}`, theme.render(resumeJson, lang));
});

