let contents = document.querySelector(".contents")
let navbar = document.querySelector(".navbar")

let userBtn = document.querySelector(".nav-user");
let userMenu = document.querySelector(".user-menu-container")
let languageBtn = document.querySelector(".language-btn")
let languageMenu = document.querySelector(".language-menu-container")
let notificationBtn = document.querySelector(".notification-btn")
let notificationMenu = document.querySelector(".notification-menu-container")
let threadBox2 = document.querySelector(".thread-box-container")

userBtn.addEventListener("click", function(e) {
    userMenu.classList.add("show");
    setTimeout(() => {
        navbar.addEventListener("click", navbarClose)
    }, 1)
})

languageBtn.addEventListener("click", function(e) {
    languageMenu.classList.add("show");
    setTimeout(() => {
        navbar.addEventListener("click", navbarClose)
    }, 1)
})

notificationBtn.addEventListener("click", function(e) {
    notificationMenu.classList.add("show");
    setTimeout(() => {
        navbar.addEventListener("click", navbarClose)
    }, 1)
})

contents.addEventListener("click", function(e) {
    if(userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
    }   
    if(languageMenu.classList.contains("show")) {
        languageMenu.classList.remove("show");
    }
    if(notificationMenu.classList.contains("show")) {
        notificationMenu.classList.remove("show");
    }  
})

threadBox2.addEventListener("click", function(e) {
    if(userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
    }   
    if(languageMenu.classList.contains("show")) {
        languageMenu.classList.remove("show");
    }
    if(notificationMenu.classList.contains("show")) {
        notificationMenu.classList.remove("show");
    }
})

function navbarClose() {
    if(userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
    }   
    if(languageMenu.classList.contains("show")) {
        languageMenu.classList.remove("show");
    }  
    if(notificationMenu.classList.contains("show")) {
        notificationMenu.classList.remove("show");
    } 
    setTimeout(() => {
        navbar.removeEventListener("click", navbarClose);
    }, 1)
}



