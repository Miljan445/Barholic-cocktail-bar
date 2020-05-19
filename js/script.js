

  var allDaysDiv = document.getElementsByClassName('weekDay');

  // hide all div 
  allDaysDiv[0].style.display = 'none';
  allDaysDiv[1].style.display = 'none';
  allDaysDiv[2].style.display = 'none';
  allDaysDiv[3].style.display = 'none';
  allDaysDiv[4].style.display = 'none';
  allDaysDiv[5].style.display = 'none';
  allDaysDiv[6].style.display = 'none';
  
  // get numeric for today
  var day = new Date().getDay();
  
  // display today's div
  var show = document.getElementById(day).style.display = 'block';