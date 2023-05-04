let navbar2 = document.querySelector(".navbar")
let mainContent = document.querySelector(".container")
let moreBtn = document.querySelectorAll(".fa-ellipsis");
let moreBox = document.querySelectorAll(".more-box");
let bookmarkBtn = document.querySelectorAll(".more-item.bookmark");
let bookmarkInfo = document.querySelector(".bookmark-notification-container")
let undoBtn = document.querySelector(".bookmark-notification .undo-btn")
let leftBar = document.querySelector(".left-side-bar");
let rightBar = document.querySelector(".right-side-bar");


let moreBoxIndex;
moreBtn.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        moreBox[index].classList.add("show")
        moreBoxIndex = index    
        setTimeout(() => {
            navbar2.addEventListener("click", outsideClose)
            mainContent.addEventListener("click", outsideClose)
            leftBar.addEventListener("click", outsideClose)
            rightBar.addEventListener("click", outsideClose)
        }, 1)
    })
})

let bookmarkNotif;
let bookmarkMessage = document.querySelector(".bookmark-notification .notification-message")
let bookmarkNotifImg = document.querySelector(".bookmark-notification img")

bookmarkBtn.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        bookmarkInfo.classList.add("show");
        if(bookmarkMessage.innerHTML == "Thread Bookmarked") {
            bookmarkMessage.innerHTML = "Thread Deleted From BookMark"
            bookmarkNotifImg.src = "assets/notbookmarkWhite.png"
        } else {
            bookmarkMessage.innerHTML = "Thread Bookmarked"
            bookmarkNotifImg.src = "assets/bookmarkWhite.png"
        }
        bookmarkNotif = setTimeout(() => {
            bookmarkInfo.classList.remove("show");
        }, 2000)
    })
})

undoBtn.addEventListener("click", function(e) {
    bookmarkMessage.classList.remove("notification-active");
    bookmarkNotifImg.classList.remove("notification-active");
    setTimeout(() => {
        if(bookmarkMessage.innerHTML == "Thread Bookmarked") {
            bookmarkMessage.innerHTML = "Thread Deleted From BookMark"
            bookmarkNotifImg.src = "assets/notbookmarkWhite.png"
        } else {
            bookmarkMessage.innerHTML = "Thread Bookmarked"
            bookmarkNotifImg.src = "assets/bookmarkWhite.png"
        }
        bookmarkMessage.classList.add("notification-active");
        bookmarkNotifImg.classList.add("notification-active");
    }, 500)


    clearTimeout(bookmarkNotif);
    bookmarkNotif = setTimeout(() => {
        bookmarkInfo.classList.remove("show");
    }, 2000)
})

function outsideClose() {
    if(moreBox[moreBoxIndex].classList.contains("show")) {
        moreBox[moreBoxIndex].classList.remove("show")
    } 
    setTimeout(() => {
        navbar2.removeEventListener("click", outsideClose)
        mainContent.removeEventListener("click", outsideClose)
        leftBar.removeEventListener("click", outsideClose)
        rightBar.removeEventListener("click", outsideClose)
        document.querySelector(".thread-box").removeEventListener("click", outsideClose)
    }, 1)
}