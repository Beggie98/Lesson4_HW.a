let imya = prompt('Введите своё имя')
let birth = prompt('Введите год рождения')
let year = prompt('Введите нынешний год')

function result(){
    let age = year - birth
    return age
}

console.log(imya + ', Ваш возраст ' + result(birth, year));