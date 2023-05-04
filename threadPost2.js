let upVote = document.querySelectorAll(".icon .up-vote-btn")
let downVote = document.querySelectorAll(".icon .down-vote-btn")
let upVoteCount = document.querySelectorAll(".icon.upvote p")
let downVoteCount = document.querySelectorAll(".icon.downvote p")
let messageBtn = document.querySelector(".message-btn")
let messages = document.querySelector(".messages-container")
let messagesHeader = document.querySelector(".messages-header")
let mainContent = document.querySelector(".main-content")
let leftBar = document.querySelector(".left-side-bar");
let rightBar = document.querySelector(".right-side-bar");
let navbar2 = document.querySelector(".navbar")
let moreBtn = document.querySelectorAll(".user-post-profile .fa-ellipsis")
let moreBox = document.querySelectorAll(".more-box")
let bookmarkBtn = document.querySelectorAll(".more-item.bookmark");
let bookmarkInfo = document.querySelector(".bookmark-notification-container")
let undoBtn = document.querySelector(".bookmark-notification .undo-btn")
let moreCommentBtns = document.querySelectorAll(".icon.more-comment")
let moreCommentMenus = document.querySelectorAll(".more-comment-container")
let deleteCommentBtns = document.querySelectorAll(".more-comment-item.delete-comment")
let commentConfirmation = document.querySelector(".comment-confirmation-container")
let comments = document.querySelectorAll(".comment-lists .comment-item")
let followBtn = document.querySelectorAll(".unfollow-btn");
let followering = document.querySelector(".follower-following .members")
let followeringMenu = document.querySelector(".follower-following-view-container")
let closeFollowering = document.querySelectorAll(".close-followering-box")
let moderatorBtn = document.querySelector(".community-moderators .view-all-btn")
let moderatorMenu = document.querySelector(".follower-following-view-container.moderators")


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

let moreBoxIndex = 0;
moreBtn.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        outsideClose()
        moreBox[moreBoxIndex].classList.remove("show")
        moreBox[index].classList.add("show")
        setTimeout(() => {
            navbar2.addEventListener("click", outsideClose)
            mainContent.addEventListener("click", outsideClose)
            leftBar.addEventListener("click", outsideClose)
            rightBar.addEventListener("click", outsideClose)
            moreBoxIndex = index    
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

let moreCommentIndex = 0;
moreCommentBtns.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        moreCommentMenus[moreCommentIndex].classList.remove("show")
        moreCommentMenus[index].classList.add("show");
        setTimeout(() => {
            navbar2.addEventListener("click", outsideClose)
            mainContent.addEventListener("click", outsideClose)
            leftBar.addEventListener("click", outsideClose)
            rightBar.addEventListener("click", outsideClose)
            moreCommentIndex = index
        }, 1)
    })
})

deleteCommentBtns.forEach((element, index) => {
    element.addEventListener("click", function(e) {
        moreCommentMenus[index].classList.remove("show");
        moreCommentIndex = index
        commentConfirmation.classList.add("show")
    })
})

document.querySelector(".confirmation-btn .cancel-btn").addEventListener("click", function(e) {
    commentConfirmation.classList.remove("show")   
})

document.querySelector(".confirmation-btn .delete-btn").addEventListener("click", function(e) {
    commentConfirmation.classList.remove("show")   
    threadAdded.classList.add("show2")
    document.querySelector(".thread-added p").innerHTML = "Comment Deleted"
    setTimeout(() => {
        threadAdded.classList.remove("show2")
        setTimeout(() => {
            document.querySelector(".thread-added p").innerHTML = "Thread Added Successfully"
        }, 500)
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
        moderatorMenu.classList.remove("show")
        document.querySelector(".contents").classList.remove("active")
        document.querySelector("body").classList.remove("active")
    })  
})

moderatorBtn.addEventListener("click", function(e) {
    moderatorMenu.classList.add("show")
    document.querySelector(".contents").classList.add("active");
    document.querySelector("body").classList.add("active");
})

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
    if(moreCommentMenus[moreCommentIndex].classList.contains("show")) {
        moreCommentMenus[moreCommentIndex].classList.remove("show")
    }
    setTimeout(() => {
        navbar2.removeEventListener("click", outsideClose)
        mainContent.removeEventListener("click", outsideClose)
        leftBar.removeEventListener("click", outsideClose)
        rightBar.removeEventListener("click", outsideClose)
        document.querySelector(".thread-box").removeEventListener("click", outsideClose)
    }, 1)
}

function checkComment() {
    comments.forEach(comment => {
        if(comment.querySelector(".comment-lists")) {
            comment.querySelector(".comment-lists").classList.add("child")
        }
    })
}

checkComment()


let followerFollowing = [
    {
        profileImg: "assets/followers(1).png",
        profileName: "Sean Hood",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(2).png",
        profileName: "Ermanower",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(3).png",
        profileName: "GloriaSteen",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(4).png",
        profileName: "SnoopyCool",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(5).png",
        profileName: "Tonyosto",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(6).png",
        profileName: "Ronseiard",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(7).png",
        profileName: "HaleParty",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
    {
        profileImg: "assets/followers(1).png",
        profileName: "Sean Hood(2)",
        profileDesc: "Stay happy, stay peaceful.<br>The posts and answers I write here make me happy. I have to love the piece before I can share with you.",
    },
]

let moderators = [
    {
        profileImg: "assets/moderator(1).png",
        profileName: "Haven",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(2).png",
        profileName: "Unnamed",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(3).png",
        profileName: "Devil",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(4).png",
        profileName: "Yuma",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(5).png",
        profileName: "XdeathX",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(6).png",
        profileName: "Roarra",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(7).png",
        profileName: "Hannah",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(8).png",
        profileName: "Bearra",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(9).png",
        profileName: "Toxin",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(10).png",
        profileName: "Overninja",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(11).png",
        profileName: "Hmmm123",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderator(12).png",
        profileName: "Kirito",
        joinDate: "15 Years ago",
        job: "Manage Everything",
    },
]


let moderatorImg = document.querySelectorAll(".follower-following-item .moderator-profile img")
let moderatorName = document.querySelectorAll(".follower-following-item .moderator-profile h3")
let moderatorDate = document.querySelectorAll(".become-moderator-date")
let moderatorJob = document.querySelectorAll(".moderator-job")

moderatorImg.forEach((element, index) => {
    element.src = moderators[index].profileImg
    moderatorName[index].innerHTML = moderators[index].profileName   
    moderatorDate[index].innerHTML = moderators[index].joinDate   
    moderatorJob[index].innerHTML = moderators[index].job
})


let moderatorImg2 = document.querySelectorAll(".moderators-list .moderators-item img")
let moderatorName2 = document.querySelectorAll(".moderators-list .moderators-item p")

moderatorImg2.forEach((element, index) => {
    element.src = moderators[index].profileImg
    moderatorName2[index].innerHTML = moderators[index].profileName
})


let profileImg = document.querySelectorAll(".follower-following-item img")
let profileName = document.querySelectorAll(".follower-following-desc h3")
let profileDesc = document.querySelectorAll(".follower-following-desc p")

profileName.forEach((element, index) => {
    profileImg[index].src = followerFollowing[index].profileImg
    profileName[index].innerHTML = followerFollowing[index].profileName   
    profileDesc[index].innerHTML = followerFollowing[index].profileDesc  
})


let posts = document.querySelectorAll(".post")
let unfollowBtn = document.querySelectorAll(".more-item.unfollow")
let followBtn2 = document.querySelectorAll(".post-profile .username span")
function checkFollow() {
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

checkFollow()