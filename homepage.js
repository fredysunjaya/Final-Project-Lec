let upVote = document.querySelectorAll(".icon .up-vote-btn")
let downVote = document.querySelectorAll(".icon .down-vote-btn")
let upVoteCount = document.querySelectorAll(".icon.upvote p")
let downVoteCount = document.querySelectorAll(".icon.downvote p")
let messageBtn = document.querySelector(".message-btn")
let messages = document.querySelector(".messages-container")
let messagesHeader = document.querySelector(".messages-header")
let posts = document.querySelectorAll(".post")
let mainContent = document.querySelector(".main-content")
let leftBar = document.querySelector(".left-side-bar");
let rightBar = document.querySelector(".right-side-bar");
let navbar2 = document.querySelector(".navbar")
let moreBtn = document.querySelectorAll(".fa-ellipsis");
let moreBox = document.querySelectorAll(".more-box");
let bookmarkBtn = document.querySelectorAll(".more-item.bookmark");
let bookmarkInfo = document.querySelector(".bookmark-notification-container")
let undoBtn = document.querySelector(".bookmark-notification .undo-btn")
let fontBtn = document.querySelector(".thread-item.font-format")
let fontFormatMenu = document.querySelector(".font-format-list")
let closeFontFormat = document.querySelector(".font-format-item.arrow")
let createThreads = document.querySelectorAll(".thread-btn")
let threadBox = document.querySelector(".thread-box-container")
let closeThread = document.querySelector(".close-thread-box");
let choosePostBtn = document.querySelector(".choose-post-btn")
let choosePostMenu = document.querySelector(".choose-post-container")

upVote.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        if(element.classList.contains("fill")) {
            element.src = "assets/upvote.png"; 
            upVoteCount[index].innerHTML = parseInt(upVoteCount[index].innerHTML) - 1;
            element.classList.remove("fill")
        } else {
            element.src = "assets/upvotefill.png";
            upVoteCount[index].innerHTML = parseInt(upVoteCount[index].innerHTML) + 1;
            element.classList.add("fill")
        }
    })
})

downVote.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        if(element.classList.contains("fill")) {
            element.src = "assets/downvote.png"; 
            downVoteCount[index].innerHTML = parseInt(downVoteCount[index].innerHTML) - 1;
            element.classList.remove("fill")
        } else {
            element.src = "assets/downvotefill.png"; 
            downVoteCount[index].innerHTML = parseInt(downVoteCount[index].innerHTML) + 1;
            element.classList.add("fill")
        }
    })
})

messageBtn.addEventListener("click", function(e) {
    messages.classList.add("show")
    setTimeout(() => {
        navbar2.addEventListener("click", outsideClose)
        mainContent.addEventListener("click", outsideClose)
        leftBar.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose)
    }, 10)
})

messagesHeader.addEventListener("click", function(e) {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
    }
})

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

fontBtn.addEventListener("click", function(e) {
    fontFormatMenu.classList.add("show");
})

closeFontFormat.addEventListener("click", function(e) {
    fontFormatMenu.classList.remove("show");
})

createThreads.forEach(createThread => {
    createThread.addEventListener("click", function(e) {
        threadBox.classList.add("show");
        document.querySelector(".contents").classList.add("active");
        document.querySelector("body").classList.add("active");
    })
})

closeThread.addEventListener("click", function(e) {
    threadBox.classList.remove("show");
    document.querySelector(".contents").classList.remove("active");
    document.querySelector("body").classList.remove("active");
})

choosePostBtn.addEventListener("click", function(e) {
    choosePostMenu.classList.add("show");
    setTimeout(() => {
        navbar2.addEventListener("click", outsideClose)
        mainContent.addEventListener("click", outsideClose)
        leftBar.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose)
        document.querySelector(".thread-box").addEventListener("click", outsideClose)
    }, 1)
})

function bottomPost() {
    posts[posts.length - 1].classList.add("bottom")
}

bottomPost()

function outsideClose() {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
    } else if(moreBox[moreBoxIndex].classList.contains("show")) {
        moreBox[moreBoxIndex].classList.remove("show")
    } else if(choosePostMenu.classList.contains("show")) {
        choosePostMenu.classList.remove("show")
    }
    setTimeout(() => {
        navbar2.removeEventListener("click", outsideClose)
        mainContent.removeEventListener("click", outsideClose)
        leftBar.removeEventListener("click", outsideClose)
        rightBar.removeEventListener("click", outsideClose)
        document.querySelector(".thread-box").removeEventListener("click", outsideClose)
    }, 10)
}