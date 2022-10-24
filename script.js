function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("buttonOpen").style.opacity="0%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("buttonOpen").style.opacity="100%"
    var a=document.getElementsByClassName("closebtn");
    a.href="javascript:void(0)";
  }

function homeSiteFunction() {
    var a = document.getElementById("homeSite");
    a.href ="index.html"
}

function resumeSiteFunction() {
    var a = document.getElementById("resumeSite");
    a.href ="resume.html"
}

function contactSiteFunction() {
    var a = document.getElementById("contactSite");
    a.href ="contact.html"
}

var LoadFunction = document.querySelector(".loader-wrapper");
window.addEventListener("load", vanish);


function vanish() {
    LoadFunction.classList.add("disappear");
}

