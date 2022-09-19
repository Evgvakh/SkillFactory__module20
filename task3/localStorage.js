window.onload = function() {
    const lastVisit = localStorage.getItem('lastVisit');
    const visitTime = localStorage.getItem('visitTime');
    const fullName = localStorage.getItem('userName');
    console.log(lastVisit);
    if (lastVisit) {
    alert(`Добрый день, ${fullName}! Давно не виделись. В последний раз вы были у нас ${lastVisit} в ${visitTime}`);
    localStorage.clear();
    } else {
    let name = prompt('Type your name');
    localStorage.setItem("userName", name);
    let date = new Date ();
    let fullDate = `0${date.getDay()}.0${date.getMonth()}.${date.getFullYear()}`;
    let minutes = `${date.getHours()}:${date.getMinutes()}`;
    localStorage.setItem("lastVisit", fullDate);    
    localStorage.setItem("visitTime", minutes);
    }
};
