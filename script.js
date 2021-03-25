let age = 0
let day = 1 

document.getElementById('button').addEventListener('click', button)

function button () {
  age = document.getElementById('ages').value 
  day = document.getElementById('days').value

  if ((age < 18 && day === 'Sunday') || (age < 18 && day === 'Saturday')) {
    document.getElementById('para').innerHTML = ('Its the weekend Relax!')

  } else if ((age < 18 && day === 'Monday') || (age < 18 && day === 'Tuesday') || (age < 18 && day === 'Wednesday') || (age < 18 && day === 'Thursday') || (age < 18 && day === 'Friday')) {
    document.getElementById('para').innerHTML = ('Its time to go to School!')

  } else if ((age > 17 && day === 'Sunday') || (age > 17 && day === 'Saturday') || (age > 17 && day === 'Monday') || (age > 17 && day === 'Tuesday') || (age > 17 && day === 'Wednesday') || (age > 17 && day === 'Thursday') || (age > 17 && day === 'Friday')) {
    document.getElementById('para').innerHTML = ('Time to go to Work or University/College!')
  }

}