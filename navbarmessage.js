let contents = document.querySelector(".container")
let navbar = document.querySelector(".navbar")

let userBtn = document.querySelector(".nav-user");
let userMenu = document.querySelector(".user-menu-container")
let languageBtn = document.querySelector(".language-btn")
let languageMenu = document.querySelector(".language-menu-container")
let notificationBtn = document.querySelector(".notification-btn")
let notificationMenu = document.querySelector(".notification-menu-container")
let threadBox2 = document.querySelector(".thread-box-container")
let fontBtns = document.querySelectorAll(".thread-item.font-format")
let fontFormatMenus = document.querySelectorAll(".font-format-list")
let closeFontFormats = document.querySelectorAll(".font-format-item.arrow")
let createThreads = document.querySelectorAll(".thread-btn")
let threadBox = document.querySelector(".thread-box-container")
let closeThread = document.querySelector(".close-thread-box")
let choosePostBtn = document.querySelector(".choose-post-btn")
let choosePostMenu = document.querySelector(".choose-post-container")
let postThreadBtn = document.querySelector(".thread-footer .post-btn")
let threadAdded = document.querySelector(".thread-added-container")
console.log(createThreads);
console.log('test');

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

fontBtns.forEach((fontBtn, index) => {
    fontBtn.addEventListener("click", function(e) {
        fontFormatMenus[index].classList.add("show");
    })
})

closeFontFormats.forEach((closeFontFormat, index) => {
    closeFontFormat.addEventListener("click", function(e) {
        fontFormatMenus[index].classList.remove("show");
    })
})

createThreads.forEach(createThread => {
    createThread.addEventListener("click", function(e) {
        console.log('clicked');
        threadBox.classList.add("show");
        // document.querySelector(".contents").classList.add("active");
        document.querySelector("body").classList.add("active");
        document.querySelector(".thread-title input").value = ""
        document.querySelector(".thread-content textarea").value = ""
    })
})

closeThread.addEventListener("click", function(e) {
    threadBox.classList.remove("show");
    document.querySelector(".contents").classList.remove("active");
    document.querySelector("body").classList.remove("active");
})

choosePostBtn.addEventListener("click", function(e) {
    choosePostMenu.classList.add("show");
    choosePostMenu.querySelector(".search-bar input").value = ""
    setTimeout(() => {
        navbar2.addEventListener("click", outsideClose)
        mainContent.addEventListener("click", outsideClose)
        leftBar.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose)
        document.querySelector(".thread-box").addEventListener("click", outsideClose)
    }, 1)
})

postThreadBtn.addEventListener("click", function(e) {
    threadBox.classList.remove("show");
    document.querySelector(".contents").classList.remove("active");
    document.querySelector("body").classList.remove("active");
    threadAdded.classList.add("show")
    setTimeout(() => {
        threadAdded.classList.remove("show")
    }, 2000)
})

