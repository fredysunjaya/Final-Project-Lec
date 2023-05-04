let upVote = document.querySelectorAll(".icon .up-vote-btn")
let downVote = document.querySelectorAll(".icon .down-vote-btn")
let upVoteCount = document.querySelectorAll(".icon.upvote p")
let downVoteCount = document.querySelectorAll(".icon.downvote p")
let messageBtn = document.querySelector(".message-btn")
let messages = document.querySelector(".messages-container")
let messagesHeader = document.querySelector(".messages-header")
let posts = document.querySelectorAll(".post")
let mainContent = document.querySelector(".main-content")
let contents2 = document.querySelector(".contents")
let rightBar = document.querySelector(".right-side-bar");
let navbar2 = document.querySelector(".navbar")
let moreBtn = document.querySelectorAll(".post .fa-ellipsis");
let moreBox = document.querySelectorAll(".more-box");
let bookmarkBtn = document.querySelectorAll(".more-item.bookmark");
let bookmarkInfo = document.querySelector(".bookmark-notification-container")
let undoBtn = document.querySelector(".bookmark-notification .undo-btn")
let followBtn = document.querySelectorAll(".unfollow-btn");
let followering = document.querySelector(".follower-following .members")
let followeringMenu = document.querySelector(".follower-following-view-container")
let closeFollowering = document.querySelectorAll(".close-followering-box")
let moreCommunityBtn = document.querySelector(".community-btn .fa-ellipsis")
let moreCommunityMenu = document.querySelector(".more-community-container")


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
                contents2.addEventListener("click", outsideClose)
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
        contents2.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose)
    }, 1)
})

messagesHeader.addEventListener("click", function(e) {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
        setTimeout(() => {
            navbar2.removeEventListener("click", outsideClose)
            contents2.removeEventListener("click", outsideClose)
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
    console.log("asd")
    bookmarkNotif = setTimeout(() => {
        bookmarkInfo.classList.remove("show");
    }, 2000)
})

followBtn.forEach((element) => {
    if(element.innerHTML == "Follow") {
        element.classList.add("no-active")
    } else if(element.innerHTML == "Unfollow") {
        element.classList.remove("no-active")
    }
    element.addEventListener("click", function(e) {
        if(element.innerHTML == "Follow") {
            element.classList.remove("no-active")
            element.innerHTML = "Unfollow"
        } else if(element.innerHTML == "Unfollow") {
            element.classList.add("no-active")
            element.innerHTML = "Follow"
        }
    })
})

followering.addEventListener("click", function(e) {
    followeringMenu.classList.add("show")
    document.querySelector(".contents").classList.add("active");
    document.querySelector("body").classList.add("active");
})

closeFollowering.forEach((element) => {
    element.addEventListener("click", function(e) {
        followeringMenu.classList.remove("show")
        document.querySelector(".contents").classList.remove("active")
        document.querySelector("body").classList.remove("active")
    })  
})

moreCommunityBtn.addEventListener("click", function(e) {
    outsideClose()
    moreCommunityMenu.classList.add("show")
    setTimeout(() => {
        navbar2.addEventListener("click", outsideClose)
        contents2.addEventListener("click", outsideClose)
        rightBar.addEventListener("click", outsideClose) 
    }, 1)
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
    if(moreCommunityMenu.classList.contains("show")) {
        moreCommunityMenu.classList.remove("show")
    }
    setTimeout(() => {
        navbar2.removeEventListener("click", outsideClose)
        contents2.removeEventListener("click", outsideClose)
        rightBar.removeEventListener("click", outsideClose)
        document.querySelector(".thread-box").removeEventListener("click", outsideClose)
    }, 1)
}


let postsAssets = [
    {   
        posterPic: "assets/Community/minecraft.png",
        posterName: "Minecraft",
        postDate: "Posted by Cheetus_Deleteus · 14h",
        postDesc: "They never forget",
        postImg: "assets/communityPosts(1).png",
        postRef: "threadPostGeneral.html?3&0",
    },
    {   
        posterPic: "assets/Community/minecraft.png",
        posterName: "Minecraft",
        postDate: "Posted by campus735 · 11h",
        postDesc: "I started playing one version at a time. This one came with fire physics update",
        postImg: "assets/communityPosts(2).png",
        postRef: "threadPostGeneral.html?3&1",
    },
    {   
        posterPic: "assets/Community/minecraft.png",
        posterName: "Minecraft",
        postDate: "Posted by Jacobrk1025 · 10h",
        postDesc: "I started playing one version at a time. This one came with fire physics update",
        postImg: "assets/communityPosts(3).png",
        postRef: "threadPostGeneral.html?3&2",
    },
    {   
        posterPic: "assets/Community/minecraft.png",
        posterName: "Minecraft",
        postDate: "Posted by Cheetus_Deleteus · 2d",
        postDesc: "I was experimenting with amethyst and I created this",
        postImg: "assets/communityPosts(4).png",
        postRef: "threadPostGeneral.html?3&3",
    },
]

function checkFollow() {
    let unfollowBtn = document.querySelectorAll(".more-item.unfollow")
    let followBtn2 = document.querySelectorAll(".post-profile .username span")
    let temp = 0;
    posts.forEach((post, index) => {
        if(!post.classList.contains("follow")) {
            unfollowBtn[index].remove();
        } else {
            followBtn2[temp].remove()
            temp++
            followBtn2[temp].remove()
            temp++
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

// Init
for(let i = 0; i < 3; i++) {
    addPost()
}
checkFollow()
addClick()
posts[0].classList.add("top")

