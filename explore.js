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


let bookmarkNotif;
let bookmarkMessage = document.querySelector(".bookmark-notification .notification-message")
let bookmarkNotifImg = document.querySelector(".bookmark-notification img")
let moreBoxIndex = 0;

function addClick() {
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

    moreBtn.forEach((element, index) => {
        element.addEventListener("click", function(e) {
            outsideClose()
            moreBox[moreBoxIndex].classList.remove("show")
            moreBox[index].classList.add("show")
            setTimeout(() => {
                navbar2.addEventListener("click", outsideClose)
                mainContent.addEventListener("click", outsideClose)
                rightBar.addEventListener("click", outsideClose)
                moreBoxIndex = index    
            }, 1)
        })
    })
    
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
}


messageBtn.addEventListener("click", function(e) {
    outsideClose()
    messages.classList.add("show")
    setTimeout(() => {
        navbar2.addEventListener("click", outsideClose)
        mainContent.addEventListener("click", outsideClose)
        leftBar.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose)
    }, 1)
})

messagesHeader.addEventListener("click", function(e) {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
        setTimeout(() => {
            navbar2.removeEventListener("click", outsideClose)
            mainContent.removeEventListener("click", outsideClose)
            leftBar.removeEventListener("click", outsideClose)
            rightBar.removeEventListener("click", outsideClose)
            document.querySelector(".thread-box").removeEventListener("click", outsideClose)
        }, 1)
    }
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

function bottomPost() {
    if(posts.length > 1) {
        posts[posts.length - 2].classList.remove("bottom")
    }
    posts[posts.length - 1].classList.add("bottom")
}

bottomPost()

function outsideClose() {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
    }
    if(moreBox[moreBoxIndex].classList.contains("show")) {
        moreBox[moreBoxIndex].classList.remove("show")
    }
    if(choosePostMenu.classList.contains("show")) {
        choosePostMenu.classList.remove("show")
    }
    setTimeout(() => {
        navbar2.removeEventListener("click", outsideClose)
        mainContent.removeEventListener("click", outsideClose)
        leftBar.removeEventListener("click", outsideClose)
        rightBar.removeEventListener("click", outsideClose)
        document.querySelector(".thread-box").removeEventListener("click", outsideClose)
    }, 1)
}

let postsAssets = [
    {   
        posterPic: "assets/gamernewgames.png",
        posterName: "Gamer New Games",
        postDate: "Posted by Casey · 5h",
        postDesc: "Your final Metascore prediction for Hogwarts Legacy ?",
        postImg: "assets/postImageExplore(1).png",
        postRef: "threadPost2.html",
    },
    {   
        posterPic: "assets/filmmakers.png",
        posterName: "Filmmakers",
        postDate: "Posted by Casey · 5h",
        postDesc: "Does anyone know what sort of light bank was used for certain night scenes in Django Unchained? Or in other night scenes? I was told massive boxes like the one pictured were used. I’d like to know the company who makes them and/or where I could find more pictures of them.",
        postImg: "assets/postImageExplore(2).png",
        postRef: "threadPostGeneral.html?1&1",
    },
    {   
        posterPic: "assets/oldtv.png",
        posterName: "Old TV",
        postDate: "Posted by last_grabow · Feb 1",
        postDesc: "Saw these two in a commercial last night and made me sad seeing them aged.",
        postImg: "assets/postImageExplore(3).png",
        postRef: "threadPostGeneral.html?1&2",
    },
    {   
        posterPic: "assets/wholesome.png",
        posterName: "Wholesome",
        postDate: "Posted by Onepen99 · Dec 18, 2022",
        postDesc: "The world needs to know about and celebrate such people",
        postImg: "assets/postImageExplore(4).png",
        postRef: "threadPostGeneral.html?1&3",
    },
]

function checkFollow() {
    let unfollowBtn = document.querySelectorAll(".more-item.unfollow")
    let followBtn2 = document.querySelectorAll(".post-profile .username span")
    let temp = 0;
    posts.forEach((post, index) => {
        if(post.classList.contains("follow")) {
            followBtn2[temp].remove()
            temp++
            followBtn2[temp].remove()
            temp++
        } else {
            unfollowBtn[index].remove();
        }
    })
}

let postIndex = 0

function addPost() {
    let newPost = posts[0].cloneNode(true)
    mainContent.appendChild(newPost)
    
    postIndex += 1
    if(postIndex >= postsAssets.length) {
        postIndex = 0
    }

    let posterPic = newPost.querySelector(".user-profile-img img")
    let posterName = newPost.querySelector(".post-profile .username a")
    let postDate = newPost.querySelector(".post-profile .post-time")
    let postDesc = newPost.querySelector(".post-content p")
    let postImg = newPost.querySelector(".post-content .post-img")
    let postRef = newPost.querySelector(".post-content")
    posterPic.src = postsAssets[postIndex].posterPic
    posterName.innerHTML = postsAssets[postIndex].posterName
    postDate.innerHTML = postsAssets[postIndex].postDate
    postDesc.innerHTML = postsAssets[postIndex].postDesc
    postRef.href = postsAssets[postIndex].postRef
    if(postsAssets[postIndex].postImg == "") {
        postImg.remove()
    } else {
        postImg.src = postsAssets[postIndex].postImg
    }
    posts = document.querySelectorAll(".post")
    upVote = document.querySelectorAll(".icon .up-vote-btn")
    downVote = document.querySelectorAll(".icon .down-vote-btn")
    upVoteCount = document.querySelectorAll(".icon.upvote p")
    downVoteCount = document.querySelectorAll(".icon.downvote p")
    moreBtn = document.querySelectorAll(".post .fa-ellipsis");
    moreBox = document.querySelectorAll(".more-box");
    bookmarkBtn = document.querySelectorAll(".more-item.bookmark");
    bottomPost()
}

for(let i = 0; i < 3; i++) {
    addPost()
}
checkFollow()
addClick()
