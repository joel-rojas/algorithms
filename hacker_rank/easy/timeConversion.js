/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    const splitData = s.split(':');
    let hours = parseInt(splitData[0], 10);
    const minutes = splitData[1];
    const dTimeRegex = /^(\d{2})(AM|PM)*$/;
    const dayTimeTest = dTimeRegex.exec(splitData[2]);
    const seconds = dayTimeTest[1];
    const dayTime = dayTimeTest[2];
    if (dayTime === 'PM' && hours < 12) {
        hours += 12;
    }
    if (dayTime === 'AM') {
        if (hours === 12) {
            hours = '00';
        } else if (hours < 10) {
            hours = '0' + hours;
        }
    }
    return hours + ':' + minutes + ':' + seconds;
}