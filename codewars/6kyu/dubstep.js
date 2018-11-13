function songDecoder(song) {
    return song.split("WUB").filter(function (val) {
        return val.length;
    }).join(" ");
}
console.log(songDecoder('WUBLOVEWUBWUBISWUBALLWUB')); //'LOVE IS ALL'