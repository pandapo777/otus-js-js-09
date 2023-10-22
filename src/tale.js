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
// console.log(`${nameWinter}! ${nameWinter}! ${nameWinter}!`)
return `${nameWinter}! ${nameWinter}! ${nameWinter}!`
}

console.log (newYear('Дед Мороз') )
console.log (newYear('Снегурочка') )
console.log (newYear('Алёна') )
// newYear('Снегурочка')

// const newYear = nameWinter => {
//   return `${nameWinter}! ${nameWinter}! ${nameWinter}!`
//   }

// const character = newYear('Ak`yf')
// console.log(character) //  'Алёна! Алёна! Алёна!'