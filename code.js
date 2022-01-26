function startTime(date) {
    
    var goal = new Date(date);
    var time = new Date();
    var gYears = goal.getFullYear() * 365;
    var gDays = (gYears + goal.getDate()) * 24;
    var gHours = goal.getHours() + gDays;
    var gMinutes = goal.getMinutes();
    var gSeconds = goal.getSeconds();
    var years = time.getFullYear() * 365;
    var days = (years + time.getDate()) * 24;
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
    if (gHours < 0) {
        if (date == "June 1, 2023 00:00:00") {
            return;
        }
        else if false {
            date = "June 1, 2023 00:00:00";
            var elem = document.createElement("img")
            elem.setAttribute("src", "https://www.jing.fm/clipimg/detail/129-1292081_padlock-clipart-key-clip-art-lock.png");
            elem.setAttribute("class", "d")
            document.getElementById("blackcox").appendChild(elem);

            const descs = [...document.getElementsByClassName("desc")];
            descs[0].innerHTML = "this joke is locked, it will unlock in";
            descs[1].innerHTML = "the second semester of 12th grade";

            const texts = [...document.getElementsByClassName("text")];
            texts[0].innerHTML = "TIME UNTIL WE HAND IN 12TH GRADE CYBER PROJECTS:";
            texts[1].innerHTML = "PREPARE TO DIE.... EVEN MORE :)";

            startTime(date);
            return;
        }
    }
    gSeconds = checkTime(gSeconds);
    gMinutes = checkTime(gMinutes);
    gHours = checkTime(gHours);
    document.getElementById("clock").innerHTML =  gHours + ":" + gMinutes + ":" + gSeconds;
    var t = setTimeout(startTime, 1000, date);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
