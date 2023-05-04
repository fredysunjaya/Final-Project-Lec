let messageBtn = document.querySelector(".message-btn")
let messages = document.querySelector(".messages-container")
let messagesHeader = document.querySelector(".messages-header")
let mainContent = document.querySelector(".main-content")
let contents2 = document.querySelector(".contents")
let rightBar = document.querySelector(".right-side-bar");
let navbar2 = document.querySelector(".navbar")
let followBtn = document.querySelectorAll(".unfollow-btn");
let followering = document.querySelector(".follower-following .members")
let followeringMenu = document.querySelector(".follower-following-view-container")
let closeFollowering = document.querySelectorAll(".close-followering-box")
let moreCommunityBtn = document.querySelector(".community-btn .fa-ellipsis")
let moreCommunityMenu = document.querySelector(".more-community-container")


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

function outsideClose() {
    if(messages.classList.contains("show")) {
        messages.classList.remove("show")
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


let moderators = [
    {
        profileImg: "assets/moderatorCommunity(1).png",
        profileName: "Steve",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(2).png",
        profileName: "Alex",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(3).png",
        profileName: "Herobrine",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(4).png",
        profileName: "Notch",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(5).png",
        profileName: "Villager",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(6).png",
        profileName: "Pillager",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(7).png",
        profileName: "Zombie",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(8).png",
        profileName: "Vex",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(9).png",
        profileName: "Soldier",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(10).png",
        profileName: "Bat",
        joinDate: "7 Years ago",
        job: "Manage Everything",
    },
    {
        profileImg: "assets/moderatorCommunity(11).png",
        profileName: "PumpkinHead",
        joinDate: "7 Years ago",
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