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

export function timeAgo(epoch,comparedEpoch=Date.now()/1000){
    const ago = comparedEpoch - epoch
    let time
    let suffix
    //less than 5 minutes ago
    if (ago<300) {
        time = ''
        suffix = 'just now'

    } else if (ago < 3600 ) { //less than 60 minutes ago
        time = Math.round(ago/60)
        suffix = ' minutes ago'
    } else if (ago < 172800) { //less than 2 days ago 
        time = Math.round(ago/3600)
        suffix = time > 1 ? ' hours ago' : ' hour ago'
    } else {
        time=Math.round(ago/86400)
        suffix = ' days ago'
    }
    
    return time + suffix
}