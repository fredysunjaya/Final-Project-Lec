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
let followering = document.querySelectorAll(".follower-following p")
let followeringMenu = document.querySelector(".follower-following-view-container")
let closeFollowering = document.querySelector(".close-followering-box")


let postsAssets = [
    [
        {   
            posterPic: "assets/users(3).png",
            posterName: "Lucy",
            postDate: "Jan 13",
            postDesc: "Do anyone know where is this?",
            postImg: "assets/postImageHome(1).png",
            postRef: "threadPost.html",
        },
        {   
            posterPic: "assets/userHome(2).png",
            posterName: "Photography",
            postDate: "Posted by NeverMindMyDiary · 3d",
            postDesc: "When does it makes sense for a beginner to shoot RAW?",
            postImg: "",
            postRef: "threadPostGeneral.html?0&1",
        },
        {   
            posterPic: "assets/userHome(3).png",
            posterName: "Programming",
            postDate: "Posted by Max · Jan 27",
            postDesc: "I love programming",
            postImg: "assets/postImageHome(2).png",
            postRef: "threadPostGeneral.html?0&2",
        },
        {   
            posterPic: "assets/userHome(4).png",
            posterName: "Mobile Legends",
            postDate: "Posted by ruitachi · Jan 13",
            postDesc: "This Is It The Final Version Of Yin's JJK Ultimate",
            postImg: "assets/postImageHome(3).png",
            postRef: "threadPostGeneral.html?0&3",
        },
    ],
    [
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
    ],
    [
        {   
            posterPic: "assets/gamerzone.png",
            posterName: "Gamer Zone",
            postDate: "Posted by SrGrafo · Mar 31, 2018",
            postDesc: "Legend!!!",
            postImg: "assets/postImageTrending(1).png",
            postRef: "threadPostGeneral.html?2&0",
        },
        {   
            posterPic: "assets/piliourisdani.png",
            posterName: "Piliourisdani",
            postDate: "44m",
            postDesc: "Ronaldo kept his promise",
            postImg: "assets/postImageTrending(2).png",
            postRef: "threadPostGeneral.html?2&1",
        },
        {   
            posterPic: "assets/mcureport.png",
            posterName: "MCU Report",
            postDate: "Posted by John · Jan 31",
            postDesc: "When you meet your variants",
            postImg: "assets/postImageTrending(3).png",
            postRef: "threadPostGeneral.html?2&2",
        },
        {   
            posterPic: "assets/pics.png",
            posterName: "Pics",
            postDate: "Posted by ReallyRickAstley · Oct 30, 2020",
            postDesc: "I was experimenting with amethyst and I created thisI’ve found a few funny memories during lockdown. This is from my 1st tour in 89, backstage in Vegas.",
            postImg: "assets/postImageTrending(4).png",
            postRef: "threadPostGeneral.html?2&3",
        },
    ],
    [
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
    ],
    [
        {   
            posterPic: "assets/users(3).png",
            posterName: "Lucy",
            postDate: "Jan 13",
            postDesc: "Do anyone know where is this?",
            postImg: "assets/postImageHome(1).png",
            postRef: "threadPostGeneral.html?4&0",
        },
        {   
            posterPic: "assets/users(3).png",
            posterName: "Lucy",
            postDate: "July 1, 2010",
            postDesc: "10 years ago my last trip to Japan. I miss traveling, do it while you can!",
            postImg: "assets/otherUserImage(1).png",
            postRef: "threadPostGeneral.html?4&1",
        },
        {   
            posterPic: "assets/users(3).png",
            posterName: "Lucy",
            postDate: "Jan 13",
            postDesc: "Just read \"Breakfast at Tiffany's: A Short Novel and Three Stories\" and I can't believe I didn't read it sooner",
            postImg: "",
            postRef: "threadPostGeneral.html?4&2",
        },
        {   
            posterPic: "assets/travel.png",
            posterName: "Travel",
            postDate: "Posted by Lucy ·Jan 11",
            postDesc: "Annecy, France",
            postImg: "assets/otherUserImage(2).png",
            postRef: "threadPostGeneral.html?4&3",
        },
    ],
]

let position = parent.document.URL.substring(parent.document.URL.indexOf('?') + 1, parent.document.URL.length).split("&");
// console.log(position)
let postIndex1 = position[0]
let postIndex2 = position[1]
let post = document.querySelector(".post")
let back = document.querySelector(".arrow-back")


if(postIndex1 == 0) {
    back.href = "homepage.html";
} else if(postIndex1 == 1) {
    back.href = "explore.html";
} else if(postIndex1 == 2) {
    back.href = "trending.html";
} else if(postIndex1 == 3) {
    back.href = "communityPosts.html";
} else if(postIndex1 == 4) {
    back.href = "otherUserProfile.html";
}

let posterPic = document.querySelectorAll(".poster-img")
let posterName = document.querySelectorAll(".poster-name")
let postDate = post.querySelector(".post-profile .post-time")
let postDesc = post.querySelector(".post-content p")
let postImg = post.querySelector(".post-content .post-img")
let postRef = post.querySelector(".post-content")
posterPic.forEach((element, index) => {
    posterPic[index].src = postsAssets[postIndex1][postIndex2].posterPic
    posterName[index].innerHTML = postsAssets[postIndex1][postIndex2].posterName
})
postDate.innerHTML = postsAssets[postIndex1][postIndex2].postDate
postDesc.innerHTML = postsAssets[postIndex1][postIndex2].postDesc
postRef.href = postsAssets[postIndex1][postIndex2].postRef
if(postsAssets[postIndex1][postIndex2].postImg == "") {
    postImg.remove()
} else {
    postImg.src = postsAssets[postIndex1][postIndex2].postImg
}


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

followering.forEach((element) => {
    element.addEventListener("click", function(e) {
        followeringMenu.classList.add("show")
        document.querySelector(".contents").classList.add("active");
        document.querySelector("body").classList.add("active");
    })
})

closeFollowering.addEventListener("click", function(e) {
    followeringMenu.classList.remove("show");
    document.querySelector(".contents").classList.remove("active");
    document.querySelector("body").classList.remove("active");
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


let profileImg = document.querySelectorAll(".follower-following-item img")
let profileName = document.querySelectorAll(".follower-following-desc h3")
let profileDesc = document.querySelectorAll(".follower-following-desc p")

profileImg.forEach((element, index) => {
    element.src = followerFollowing[index].profileImg   
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