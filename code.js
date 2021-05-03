function startTime() {
    var goal = new Date('May 26, 2021 00:00:00');
    var time = new Date();
    var gDays = goal.getDate() * 24;
    var gHours = goal.getHours() + gDays;
    var gMinutes = goal.getMinutes();
    var gSeconds = goal.getSeconds();
    var days = time.getDate() * 24;
    var hours = time.getHours() + days;
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    gHours -= hours;
    gMinutes -= minutes;
    if (gMinutes < 0) {
        gHours--;
        gMinutes += 60;
    }
    gSeconds -= seconds;
    if (gSeconds < 0) {
        gMinutes--;
        if (gMinutes < 0) {
            gHours--;
            gMinutes += 60;
        }
        gSeconds += 60;
    }
    gSeconds = checkTime(gSeconds)
    gMinutes = checkTime(gMinutes)
    gHours = checkTime(gHours)
    document.getElementById("clock").innerHTML =  gHours + ":" + gMinutes + ":" + gSeconds;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}