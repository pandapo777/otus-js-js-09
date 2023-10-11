// function hello (name) {
//     console.log('Hello, ', name)
//   }
  
//   hello('Alena')
//   hello('Vasiliy')
  
//   function kolobok (name) {
//         switch (name) {
// case 'дедушка':
//     console.log( 'Я от дедушки ушел' );
//     break;
//   case 'заяц':
//     console.log( 'Я от зайца ушел' );
//     break;
//   case 'лиса':
//     console.log( 'Меня съели' );
//     break;
//   default:
//     console.log( 'Покатился дальше' );
//         }
//     }

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
//     console.log(`${nameWinter}! ${nameWinter}! ${nameWinter}!`)
//   }
  
const newYear = nameWinter => {
    console.log(`${nameWinter}! ${nameWinter}! ${nameWinter}!`)
  }

  newYear('Дед Мороз')
  newYear('Снегурочка')