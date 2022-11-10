console.log("hello world");

let menuActive = (tag , classAdd)=>{
    let list = document.querySelectorAll(tag);

    function active (){
        list.forEach((item)=>
        item.classList.remove(classAdd));
        this.classList.add(classAdd);
    }
    list.forEach((item)=>
    item.addEventListener("click", active));
}

menuActive(".nav-bar .main-nav li a","nav-active")

menuActive(".nav-bar .travel-list li a" ,"tra-nav-active")

menuActive(".media-main-nav li a","medai-nav-active")

let travel = document.querySelector(".travel");
travel.addEventListener("click", e =()=>{
    let travelSpan = document.querySelector(".travel span");
    travelSpan.classList.toggle("travel-span-animate");
})
let travelTechnology = document.querySelector(".travel-technology");
travelTechnology.addEventListener("click", e =()=>{
    let travelTechnologySpan = document.querySelector(".travel-technology span");
    console.log(travelTechnologySpan)
    travelTechnologySpan.classList.toggle("travel-span-animate");
})




$(document).ready(e=()=>{
    $(".travel").click(e=()=>{
        $(".travel-list").animate({
            height : "toggle"
        })
    })
    $(".travel-technology").click(e=()=>{
        $(".travel-technology-list").animate({
            height : "toggle"
        })
    })

})
let mediaListFun = (btn , tranClass,show,showDisplay)=>{
    let touchBtn = document.querySelector(btn);
    touchBtn.classList.toggle(tranClass);
    let showList = document.querySelector(show);
    showList.classList.toggle(showDisplay);
}


let menuBth = document.querySelector(".slide-btn")
menuBth.addEventListener("click", e=()=>{
    mediaListFun(".slide-btn","slide-btn-tran",".media-main-nav","media-main-nav-active")
})

let mediaTravel = document.querySelector(".media-travel div span");

mediaTravel.addEventListener("click" , e =()=>{
    mediaListFun(".media-travel div span i","travel-span-animate",".media-travel-list","media-list-display")
})

let mediaTravelTechnology = document.querySelector(".media-travel-technology div span");

mediaTravelTechnology.addEventListener("click" , e=()=>{
    mediaListFun(".media-travel-technology div span i","travel-span-animate",".media-travel-technology-list","media-list-display")
})

let instagramCasoulContainer = document.querySelector(".instagram-casoul-container");
console.log(instagramCasoulContainer);

let thirdRightInstargramItemContainer = document.getElementById("third-right-instargram-item-container");
let instagramContainer = Array.from(thirdRightInstargramItemContainer.children);

instagramContainer.forEach((items)=>
items.addEventListener("click" , e=(event)=>{
    let instagramCasoulContainer = document.querySelector(".instagram-casoul-container");
    instagramCasoulContainer.classList.add("carsoulActive");
}))


let instagramCloseBtn = document.querySelector(".casoul-close-btn");
instagramCloseBtn.addEventListener("click" , e=()=>{
    let instagramCasoulContainer = document.querySelector(".instagram-casoul-container");
    instagramCasoulContainer.classList.remove("carsoulActive");
})