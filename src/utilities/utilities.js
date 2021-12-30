export function capitalizeFirstLetter(word){
    return word[0].toUpperCase() + word.substring(1)
}

export function roundNumber(num){
    if(num<1000) {
        return num
    } else {
        const k = Math.floor(num/1000)
        const decimal = Math.round((num-k*1000)/100)
        return `${k}.${decimal}k`
    }
}