/*function zodiac(year){
    let num =year%12
    switch(num){
    case 0 :  console.log('monkey')
    break;
    case 0 :  console.log('rooster')
    break;
    case 0 :  console.log('dog')
    break;
    case 0 :  console.log('pig')
    break;
    case 0 :  console.log('rat')
    break;
    case 0 :  console.log('ox')
    break;
    case 0 :  console.log('tiger')
    break;
    case 0 :  console.log('rabbit')
    break;
    case 0 :  console.log('dragon')
    break;
    case 0 :  console.log('snake')
    break;
    case 0 :  console.log('horse')
    break;
    case 0 :  console.log('sheep')
    break;
}return zodiac;
}*/



function zodiac(year) {

    let zodiac = ['monkey','rooster','dog','pig','rat','ox','tiger','rabbit','dragon','snake','horses','sheep']

    let date = new Date;

    year = date.getFullYear() < year?year - 543:year;

    return zodiac[year%12];

}

console.log(zodiac(2001));

console.log(zodiac(2544));


  
  