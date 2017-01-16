var today = new Date();
var month = today.getMonth();
var monthlyThemes = {
  'Fermentation/Yeast',
  'Hops',
  'Malts',
  'Adjunct',
  'Fermentation/Yeast',
  'Hops',
  'Malts',
  'Adjunct',
  'Fermentation/Yeast',
  'Hops',
  'Malts',
  'Adjunct'
};

$(document).ready(function() {
  $('.theme').html(monthlyThemes[month]);
});