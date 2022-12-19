function openNav() {
    document.getElementById("mySidebar").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "40vw";
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

function projectSiteFunction() {
    var a = document.getElementById("projectSite");
    a.href ="projects.html"
}


function randomball() {
    let sayings = ["Don't Bother", "It isn't worth it", "Be bold in your endeavors", "Today is your day!", "Don't even try", "JUST DO IT", "Are you sure about that?", "Trust your gut on this one", "go for it", "take caution", "reevaluate", "come back later", "figure it out yourself", "Don't ask me", "You know the right answer", "That would not be wise", "yes", "The computer says no", "Why even ask?", "no, just no","Absolutely not", "Don't Hesitate", "figure it out yourself", "over my dead body", "this is really really really really long I lets check to; se if this kharya works"]
    let fonts = ["Arial", "Georgia", "Garamond", "Cursive", "Fantasy", "Sans-serif", "Monospace","Times New Roman", "Helvetica", "Verdana", "Candara", "Geneva", "Calibri", "Optima", "Cambria", "Monaco", "Brush Script", "Copperplate", "Comic Sans", "American Typewriter", "Impact", "Luminari", "Chalkduster", "Trattatello", "Snell Roundhand"]
    let colors = ["#fe4a49", "#2ab7ca", "#f6abb6", "#005b96", "#03396c", "#f6cd61", "#4a4e4d", "#f9caa7", "#009688", "#1e1f26", "#d2e7ff", "#4f372d", "#eb6841", "#3d1e6d", "#4f5b66", "#cbdadb"]
    

    check = Math.floor(Math.random()*sayings.length)
    mate = Math.floor(Math.random()*fonts.length)
    match = Math.floor(Math.random()*colors.length)
    
    console.log(sayings[check])
    console.log(sayings.length)
    console.log(fonts.length)
    console.log(colors.length)
    var lgth = 0;
    var longest;

    for (var i = 0; i < sayings.length; i++) {
        if (sayings[i].length > lgth) {
            var lgth = sayings[i].length;
            longest = sayings[i];
        }         
    }
    
    
    console.log(longest);
    console.log(lgth)
    var a = document.getElementById("textoutput")
    const img = document.querySelector("img"); 
    a.style.fontFamily = fonts[mate]
    a.innerHTML = sayings[check]
    a.style.backgroundColor = colors[match]

   
}


function randompassword() {
    let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let specialchar = ['!', '@', '#', '$', '%', '&', '*', '?', '/' ]
    var password = ''
    magicposhun = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4) ]
    console.log(magicposhun)
    for (var i = 0; i < 12; i++) {
           if (magicposhun[i] == 0) {
                password += lowercase[Math.floor(Math.random()* lowercase.length)]
                console.log("lowercase")

          }  else if (magicposhun[i] == 1) {
                password += uppercase[Math.floor(Math.random()* uppercase.length)]
                console.log("uppercase")

          } else if (magicposhun[i]== 2) {
                password += numbers[Math.floor(Math.random()* numbers.length)]
                console.log("number")
          } else {
            password += specialchar[Math.floor(Math.random()* specialchar.length)]
            console.log("special character")
          }
    }
    box = document.getElementById("passwordoutput")
    
    box.innerHTML = password
    box.style.backgroundColor = "#fe4a49"
    console.log("password:  " + password)
    
}
