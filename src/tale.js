export function kolobok(hero){
    console.log(`calling kolobok(${hero}) function : `)
    switch (hero) {
        case "дедушка":
            console.log("Я от дедушки ушёл");
            break;
        case "заяц":
            console.log("Я от зайца ушёл");
            break;
        case "лиса":
            console.log("Меня съели");
            break;
        default:
            console.log("Проверьте введенное имя персонажа");
    }

}

export function newYear(hero){
    console.log(`calling newYear(${hero}) function : `)
    const str = hero === "Дед Мороз" || hero === "Снегурочка" ? `${hero}! ${hero}! ${hero}!` : `Проверьте введенное имя персонажа`;
    console.log(str);
}