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

function openCity(evt, laTab) {
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
