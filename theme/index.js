var fs = require("fs");
var Handlebars = require("handlebars");
var I18n = require('i18n-js');
var moment = require('moment');

I18n.translations["en"] = {
  title: {
    work: 'Work',
    education: 'Education',
    skills: 'Skills',
    language: 'Languages',
    interest: 'Interest'
  },
  now: 'Now'
};

I18n.translations["fr"] = {
  title: {
    work: 'Expériences',
    education: 'Formations',
    skills: 'Compétences',
    language: 'Langues',
    interest: 'Loisirs'
  },
  now: 'Aujourd\'hui'
};

Handlebars.registerHelper('I18n',
  function(str){
    return I18n.t(str);
  }
  );

Handlebars.registerHelper('datePeriod',
  function(startDate, endDate){
    if (!endDate) {
      endDate = I18n.t('now');

      return moment(startDate).format('MM/YYYY') + ' - ' + endDate;
    }

    var startDate = moment(startDate);
    var endDate = moment(endDate);
    if (endDate.diff(startDate, 'months') > 8) {
      return startDate.format('YYYY') + ' - ' + endDate.format('YYYY');
    } else {
      return startDate.format('MM/YYYY') + ' - ' + endDate.format('MM/YYYY');
    }
  }
  );

function render(resume, locale) {
  if (!locale) {
    locale = 'fr';
  }

  I18n.locale = locale;

  var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
  var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");

  return Handlebars.compile(tpl)({
    css: css,
    resume: resume
  });
}

module.exports = {
  render: render
};
