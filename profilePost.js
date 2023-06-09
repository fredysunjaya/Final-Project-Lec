let navbar2 = document.querySelector(".navbar")
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



let upVote = document.querySelectorAll(".icon .up-vote-btn")
let downVote = document.querySelectorAll(".icon .down-vote-btn")
let upVoteCount = document.querySelectorAll(".icon.upvote p")
let downVoteCount = document.querySelectorAll(".icon.downvote p")
let posts = document.querySelectorAll(".post")
let mainContent = document.querySelector(".leftSide ")

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
}

function bottomPost() {
    if(posts.length > 1) {
        posts[posts.length - 2].classList.remove("bottom")
    }
    posts[posts.length - 1].classList.add("bottom")
}

function topPost() {
    if(posts.length > 1) {
        posts[posts.length - 1].classList.remove("top")
    }
    posts[0].classList.add("top")
}

function outsideClose() {
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
        posterPic: "assets/users(2).png",
        posterName: "User404",
        postDate: "5h",
        postDesc: "Best Game No Doubt!",
        postImg: "assets/postimg1.png",
        postRef: "threadPost.html?5&0",
    },
    {   
        posterPic: "assets/gamernewgames.png",
        posterName: "Gamer New Games",
        postDate: "Posted by User404 · 3d",
        postDesc: "Always Big Fan of Pokemon",
        postImg: "assets/postimg2.png",
        postRef: "threadPostGeneral.html?5&1",
    },
    {   
        posterPic: "assets/gamerzone.png",
        posterName: "Gamer Zone",
        postDate: "Posted by User404 · 5d",
        postDesc: "Time for Gaming",
        postImg: "assets/postimg3.png",
        postRef: "threadPostGeneral.html?5&2",
    },
    {   
        posterPic: "assets/harrypotter.png",
        posterName: "Harry Potter Fan",
        postDate: "Posted by User404 · Jan 28",
        postDesc: "Start to love it!",
        postImg: "assets/postimg4.png",
        postRef: "threadPostGeneral.html?5&3",
    },
]

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
    topPost()
}

for(let i = 0; i < 3; i++) {
    addPost()
}

addClick()