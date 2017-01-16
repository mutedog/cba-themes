var today = new Date();
var month = today.getMonth();
var day = today.getDate();
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
var monthlyThemes = [
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
];

//if it's after the first week of the month we likely want
//to know next month's theme
if (day > 7) {
  month = month+1;
}
var prevMonth;// = month == 0 ? 11 : month - 1;
var nextMonth;// = month == 11 ? 0 : month + 1;

function updateMonth(newMonth) {
  month = newMonth;
  prevMonth = newMonth == 0 ? 11 : newMonth - 1;
  nextMonth = newMonth == 11 ? 0 : newMonth + 1;  
  $('.month').html(months[newMonth]);
  $('.theme').html(monthlyThemes[newMonth]);
  $('.nav__prev').html(months[prevMonth]+'&rsquo;s Theme');
  $('.nav__next').html(months[nextMonth]+'&rsquo;s Theme');
}
$(document).ready(function() {
  updateMonth(month);

  $('.nav__prev').click(function() {
    updateMonth(prevMonth);
  });

  $('.nav__next').click(function() {
    updateMonth(nextMonth);
  });
});
