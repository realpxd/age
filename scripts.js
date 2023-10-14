
var settingsIcon = document.getElementById('settingsIcon');
var settings = document.getElementById('settings');
var darkMode = document.getElementById('darkMode');
var wrapper = document.getElementById('wrapper');
var stylesheet = document.getElementById('stylesheet');

settingsIcon.addEventListener('click', function () {
    settings.style.display = 'block';
});
wrapper.addEventListener('click', function () {
    settings.style.display = 'none';
});
if (localStorage.getItem('darkMode') == 'true') {
    darkMode.checked = true;
    stylesheet.href = 'dark.css';
} else {
    darkMode.checked = false;
    stylesheet.href = 'style.css';
}
darkMode.addEventListener('click', function () {
    if (darkMode.checked) {
        stylesheet.href = 'dark.css';
        localStorage.setItem('darkMode', 'true');
    } else {
        stylesheet.href = 'style.css';
        localStorage.setItem('darkMode', 'false');
    }
});


var bday;
if (localStorage.getItem('bday')) {
    document.getElementById('dateIn').value = localStorage.getItem('bday');
    firstLaunch.style.display = 'none';
    wrapper.style.display = 'flex';
    bday = localStorage.getItem('bday')
    updateAge();
}
var ageForm = document.getElementById('ageForm');
ageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    firstLaunch.style.display = 'none';
    wrapper.style.display = 'flex';
    bday = document.getElementById('dateIn').value;
    updateAge();
});
var settingsForm = document.getElementById('settingsForm');
settingsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    bday = document.getElementById('dateInUpdate').value;
    settings.style.display = 'none';
    updateAge();
});

function updateAge() {
    settingsIcon.style.display = 'block';
    var time = new Date();
    // var bday = new Date("2004-01-18");
    var bdayVal = new Date(bday);
    localStorage.setItem('bday', bday);
    var year = time.getFullYear() - bdayVal.getFullYear();
    var msec = time.getTime() - bdayVal.getTime();
    var msecString = msec.toString();
    var decimalPart = msecString.slice(0, 2);
    var fractionalPart = msecString.slice(2);
    document.getElementById('monitor').textContent = year;
    document.getElementById('monitor2').textContent = '.' + decimalPart + fractionalPart;
    requestAnimationFrame(updateAge);
}
// updateAge();