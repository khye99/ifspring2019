function openMenu() {
    document.getElementById('menu').style.width = '600px';
    document.getElementById('navBar_content').style.marginLeft = '600px';
}

function closeMenu() {
    document.getElementById('menu').style.width = '0';
    document.getElementById('navBar_content').style.marginLeft = '0';
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    slideIndex += n;
    showDivs(slideIndex);
}

function showDivs(n) {
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}

function replace( hide, show ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
}