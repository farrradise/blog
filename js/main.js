// FONCTION POUR MONTRER LE ALT

function imgHover(th) {
  var art = "art" + th.id.substr(3);
  var artcontent = document.getElementById(art).innerText;
  var img = "img" + th.id.substr(3);

  var alt = document.getElementById(img).alt;
  document.getElementById(art).innerHTML = alt;
  document.getElementById(img).alt = artcontent;

}


// FONCTION POUR CONFIRMATION

function confirmComm(th) {
  confirm("êtes-vous sûr de vouloir publier ce commentaire ?");
}



// FONCTION POUR TABS
/*
function testTab(evt, laTab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
*/



//FONCTION POUR LHEURE

function pourDate() {
    var d = new Date();
    d.setHours(1);
    document.getElementById("laDate").innerHTML = d;
}


// FONCTION POUR LE TEMPS PASSE

var active = false;

function start_timer() {
  if (active) {
    var timer = document.getElementById("my_timer").innerHTML;
    var arr = timer.split(":");

    var hour = arr[0];
    var min = arr[1];
    var sec = arr[2];

    if (sec == 59) {
      if (min == 59) {
        hour++;
        min = 0;
        if (hour < 10) hour = "0" + hour;
      } else {
        min++;
      }
      if (min < 10) min = "0" + min;
      sec = 0;
    } else {
      sec ++;
      if (sec < 10) sec = "0" + sec;
    }

  document.getElementById("my_timer").innerHTML = hour + ":" + min + ":" + sec;
  setTimeout(start_timer,1000);

  }
}


function changeState() {
  if (active == false) {
    active = true;
    start_timer();
    console.log("ça commence!");
  }

}
