const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits:2,
})
export default function formatDuration(duration) {
    let seconds = Math.floor(duration % 60);
    let minutes = Math.floor((duration / 60) % 60);
    let hours = Math.floor((duration / (60 * 60)) % 24);
    
    if (hours ===0){
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    }else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
    }
  }
