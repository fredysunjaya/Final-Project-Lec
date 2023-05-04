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





let communityAssets = [
    [
        {
            profileImg: "assets/Community/pingpong.png",
            bannerImg: "assets/Community/pingpongBanner(2).jpg",
            communityName: "Ping Pong",
            communityDesc: "The place to talk all about ping pong",
            communityRef: "communityPostsGeneral.html?0&0",
            communityAboutRef: "communityAbout.html?0&0",
            communityRulesRef: "communityRules.html?0&0",
            communityModRef: "communityModerators.html?0&0",
        },
        {
            profileImg: "assets/Community/figma.png",
            bannerImg: "assets/Community/figmaBanner(2).png",
            communityName: "Figma",
            communityDesc: "The place to talk about Figma, Tips, and Tricks",
            communityRef: "communityPostsGeneral.html?0&1",
            communityAboutRef: "communityAbout.html?0&1",
            communityRulesRef: "communityRules.html?0&1",
            communityModRef: "communityModerators.html?0&1",
        },
    ],
    [
        {
            profileImg: "assets/Community/minecraft.png",
            bannerImg: "assets/Community/minecraftBanner.png",
            communityName: "Minecraft",
            communityDesc: "The place to talk about minecraft game, lore, and others",
            communityRef: "communityPosts.html",
        },
        {
            profileImg: "assets/Community/pubg.png",
            bannerImg: "assets/Community/pubgBanner(2).jpg",
            communityName: "PUBG",
            communityDesc: "The place to talk about pubg game, lore, and others",
            communityRef: "communityPostsGeneral.html?1&1",
            communityAboutRef: "communityAbout.html?1&1",
            communityRulesRef: "communityRules.html?1&1",
            communityModRef: "communityModerators.html?1&1",
        },
        {
            profileImg: "assets/Community/fortnite.png",
            bannerImg: "assets/Community/fortniteBanner(2).jpeg",
            communityName: "Fortnite",
            communityDesc: "The place to talk about fortnite game, lore, and others ",
            communityRef: "communityPostsGeneral.html?1&2",
            communityAboutRef: "communityAbout.html?1&2",
            communityRulesRef: "communityRules.html?1&2",
            communityModRef: "communityModerators.html?1&2",
        },
        {
            profileImg: "assets/Community/naruto.png",
            bannerImg: "assets/Community/narutoBanner(2).jpg",
            communityName: "Naruto",
            communityDesc: "The place to talk about Naruto game, lore, and others",
            communityRef: "communityPostsGeneral.html?1&3",
            communityAboutRef: "communityAbout.html?1&3",
            communityRulesRef: "communityRules.html?1&3",
            communityModRef: "communityModerators.html?1&3",
        },
        {
            profileImg: "assets/Community/gamerzone.png",
            bannerImg: "assets/Community/gamerzoneBanner(2).jpeg",
            communityName: "Gamer Zone",
            communityDesc: "The place to talk about all game, lore, and others",
            communityRef: "communityPostsGeneral.html?1&4",
            communityAboutRef: "communityAbout.html?1&4",
            communityRulesRef: "communityRules.html?1&4",
            communityModRef: "communityModerators.html?1&4",
        },
        {
            profileImg: "assets/Community/mcureport.png",
            bannerImg: "assets/Community/mcureportBanner(2).png",
            communityName: "MCU REPORT",
            communityDesc: "The place to talk about MCU game, lore, and others.",
            communityRef: "communityPostsGeneral.html?1&5",
            communityAboutRef: "communityAbout.html?1&5",
            communityRulesRef: "communityRules.html?1&5",
            communityModRef: "communityModerators.html?1&5",
        },
        {
            profileImg: "assets/Community/pics.png",
            bannerImg: "assets/Community/picsBanner(2).jpeg",
            communityName: "Pics",
            communityDesc: "The place to talk about picture and story behind it",
            communityRef: "communityPostsGeneral.html?1&6",
            communityAboutRef: "communityAbout.html?1&6",
            communityRulesRef: "communityRules.html?1&6",
            communityModRef: "communityModerators.html?1&6",
        },
        {
            profileImg: "assets/Community/wholesome.png",
            bannerImg: "assets/Community/wholesomeBanner(2).jpeg",
            communityName: "Wholesome",
            communityDesc: "The place to talk about wholesome moment in life",
            communityRef: "communityPostsGeneral.html?1&7",
            communityAboutRef: "communityAbout.html?1&7",
            communityRulesRef: "communityRules.html?1&7",
            communityModRef: "communityModerators.html?1&7",
        },
        {
            profileImg: "assets/Community/oldtv.png",
            bannerImg: "assets/Community/oldtvBanner(2).png",
            communityName: "Old TV",
            communityDesc: "The place to talk about old fil, tv series, and others",
            communityRef: "communityPostsGeneral.html?1&8",
            communityAboutRef: "communityAbout.html?1&8",
            communityRulesRef: "communityRules.html?1&8",
            communityModRef: "communityModerators.html?1&8",
        },
        {
            profileImg: "assets/Community/filmmakers.png",
            bannerImg: "assets/Community/filmmakersBanner(2).jpeg",
            communityName: "Filmmakers",
            communityDesc: "The place to talk about filming technique and concept",
            communityRef: "communityPostsGeneral.html?1&9",
            communityAboutRef: "communityAbout.html?1&9",
            communityRulesRef: "communityRules.html?1&9",
            communityModRef: "communityModerators.html?1&9",
        },
        {
            profileImg: "assets/Community/mobilelegends.png",
            bannerImg: "assets/Community/mobilelegendsBanner(2).jpg",
            communityName: "Mobile Legends",
            communityDesc: "The place to talk about Mobile Legends game, lore, and others",
            communityRef: "communityPostsGeneral.html?1&10",
            communityAboutRef: "communityAbout.html?1&10",
            communityRulesRef: "communityRules.html?1&10",
            communityModRef: "communityModerators.html?1&10",
        },
        {
            profileImg: "assets/Community/programming.png",
            bannerImg: "assets/Community/programmingBanner(2).png",
            communityName: "Programming",
            communityDesc: "The place to talk about programming stuff",
            communityRef: "communityPostsGeneral.html?1&11",
            communityAboutRef: "communityAbout.html?1&11",
            communityRulesRef: "communityRules.html?1&11",
            communityModRef: "communityModerators.html?1&11",
        },
    ],
]

let position = parent.document.URL.substring(parent.document.URL.indexOf('?') + 1, parent.document.URL.length).split("&");
let postIndex1 = position[0]
let postIndex2 = position[1]

let bannerImg = document.querySelector(".banner-image")
let communityName = document.querySelectorAll(".communityName")
let communityProfilePic = document.querySelectorAll(".communityProPic")
bannerImg.style.backgroundImage = "url(\"" + communityAssets[postIndex1][postIndex2].bannerImg + "\")"
document.querySelector(".community-menu-item.about").href = communityAssets[postIndex1][postIndex2].communityAboutRef
document.querySelector(".community-menu-item.posts").href = communityAssets[postIndex1][postIndex2].communityRef
document.querySelector(".community-menu-item.rules").href = communityAssets[postIndex1][postIndex2].communityRulesRef
document.querySelector(".community-menu-item.moderators").href = communityAssets[postIndex1][postIndex2].communityModRef
communityName.forEach((element, index) => {
    communityName[index].innerHTML = communityAssets[postIndex1][postIndex2].communityName
    communityProfilePic[index].src = communityAssets[postIndex1][postIndex2].profileImg
})
