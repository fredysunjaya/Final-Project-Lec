let messageBtn = document.querySelector(".message-btn")
let messages = document.querySelector(".messages-container")
let messagesHeader = document.querySelector(".messages-header")
let posts = document.querySelectorAll(".post")
let mainContent = document.querySelector(".main-content")
let leftBar = document.querySelector(".left-side-bar");
let rightBar = document.querySelector(".right-side-bar");
let navbar2 = document.querySelector(".navbar")


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


let yourCommunityAssets = [
    {
        profileImg: "assets/Community/pingpong.png",
        bannerImg: "assets/Community/pingpongBanner.png",
        communityName: "Ping Pong",
        communityDesc: "The place to talk all about ping pong",
        communityRef: "communityPostsGeneral.html?0&0",
    },
    {
        profileImg: "assets/Community/figma.png",
        bannerImg: "assets/Community/figmaBanner.png",
        communityName: "Figma",
        communityDesc: "The place to talk about Figma, Tips, and Tricks",
        communityRef: "communityPostsGeneral.html?0&1",
    },
]

let discoverCommunityAssets = [
    {
        profileImg: "assets/Community/minecraft.png",
        bannerImg: "assets/Community/minecraftBanner.png",
        communityName: "Minecraft",
        communityDesc: "The place to talk about minecraft game, lore, and others",
        communityRef: "communityPosts.html",
    },
    {
        profileImg: "assets/Community/pubg.png",
        bannerImg: "assets/Community/pubgBanner.png",
        communityName: "PUBG",
        communityDesc: "The place to talk about pubg game, lore, and others",
        communityRef: "communityPostsGeneral.html?1&1",
    },
    {
        profileImg: "assets/Community/fortnite.png",
        bannerImg: "assets/Community/fortniteBanner.png",
        communityName: "Fortnite",
        communityDesc: "The place to talk about fortnite game, lore, and others ",
        communityRef: "communityPostsGeneral.html?1&2",
    },
    {
        profileImg: "assets/Community/naruto.png",
        bannerImg: "assets/Community/narutoBanner.png",
        communityName: "Naruto",
        communityDesc: "The place to talk about Naruto game, lore, and others",
        communityRef: "communityPostsGeneral.html?1&3",
    },
    {
        profileImg: "assets/Community/gamerzone.png",
        bannerImg: "assets/Community/gamerzoneBanner.png",
        communityName: "Gamer Zone",
        communityDesc: "The place to talk about all game, lore, and others",
        communityRef: "communityPostsGeneral.html?1&4",
    },
    {
        profileImg: "assets/Community/mcureport.png",
        bannerImg: "assets/Community/mcureportBanner.png",
        communityName: "MCU REPORT",
        communityDesc: "The place to talk about MCU game, lore, and others.",
        communityRef: "communityPostsGeneral.html?1&5",
    },
    {
        profileImg: "assets/Community/pics.png",
        bannerImg: "assets/Community/picsBanner.png",
        communityName: "Pics",
        communityDesc: "The place to talk about picture and story behind it",
        communityRef: "communityPostsGeneral.html?1&6",
    },
    {
        profileImg: "assets/Community/wholesome.png",
        bannerImg: "assets/Community/wholesomeBanner.png",
        communityName: "Wholesome",
        communityDesc: "The place to talk about wholesome moment in life",
        communityRef: "communityPostsGeneral.html?1&7",
    },
    {
        profileImg: "assets/Community/oldtv.png",
        bannerImg: "assets/Community/oldtvBanner.png",
        communityName: "Old TV",
        communityDesc: "The place to talk about old fil, tv series, and others",
        communityRef: "communityPostsGeneral.html?1&8",
    },
    {
        profileImg: "assets/Community/filmmakers.png",
        bannerImg: "assets/Community/filmmakersBanner.png",
        communityName: "Filmmakers",
        communityDesc: "The place to talk about filming technique and concept",
        communityRef: "communityPostsGeneral.html?1&9",
    },
    {
        profileImg: "assets/Community/mobilelegends.png",
        bannerImg: "assets/Community/mobilelegendsBanner.png",
        communityName: "Mobile Legends",
        communityDesc: "The place to talk about Mobile Legends game, lore, and others",
        communityRef: "communityPostsGeneral.html?1&10",
    },
    {
        profileImg: "assets/Community/programming.png",
        bannerImg: "assets/Community/programmingBanner.png",
        communityName: "Programming",
        communityDesc: "The place to talk about programming stuff",
        communityRef: "communityPostsGeneral.html?1&11",
    },
]

let yourCommunityProfiles = document.querySelectorAll(".your-community .community-item img")
let yourCommunityBanner = document.querySelectorAll(".your-community .community-item")
let yourCommunityName = document.querySelectorAll(".your-community .community-info-name")
let yourCommunityDesc = document.querySelectorAll(".your-community .community-info-desc")
let discoverCommunityProfiles = document.querySelectorAll(".discover-community .community-item img")
let discoverCommunityBanner = document.querySelectorAll(".discover-community .community-item")
let discoverCommunityName = document.querySelectorAll(".discover-community .community-info-name")
let discoverCommunityDesc = document.querySelectorAll(".discover-community .community-info-desc")
let communityRef1 = document.querySelectorAll(".your-community .community-list .community-item")
let communityRef2 = document.querySelectorAll(".discover-community .community-list .community-item")

yourCommunityProfiles.forEach((element, index) => {
    element.src = yourCommunityAssets[index].profileImg
    yourCommunityBanner[index].style.backgroundImage = "url(" + yourCommunityAssets[index].bannerImg + ")"
    yourCommunityName[index].innerHTML = yourCommunityAssets[index].communityName
    yourCommunityDesc[index].innerHTML = yourCommunityAssets[index].communityDesc
    communityRef1[index].href = yourCommunityAssets[index].communityRef
})

discoverCommunityProfiles.forEach((element, index) => {
    element.src = discoverCommunityAssets[index].profileImg
    discoverCommunityBanner[index].style.backgroundImage = "url(" + discoverCommunityAssets[index].bannerImg + ")"
    discoverCommunityName[index].innerHTML = discoverCommunityAssets[index].communityName
    discoverCommunityDesc[index].innerHTML = discoverCommunityAssets[index].communityDesc
    communityRef2[index].href = discoverCommunityAssets[index].communityRef
})