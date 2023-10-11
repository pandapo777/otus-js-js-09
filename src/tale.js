// function kolobok (name) {
  const kolobok = (name) => {
  switch (name) {
case 'дедушка':
console.log( 'Я от дедушки ушел' );
break;
case 'заяц':
console.log( 'Я от зайца ушел' );
break;
case 'лиса':
console.log( 'Меня съели' );
break;
default:
console.log( 'Покатился дальше' );
  }
}


kolobok('дедушка')
kolobok('заяц')
kolobok('лиса')
kolobok('цпекпц')

// function newYear (nameWinter) {
  const newYear = nameWinter => {
console.log(`${nameWinter}! ${nameWinter}! ${nameWinter}!`)
}

newYear('Дед Мороз')
newYear('Снегурочка')