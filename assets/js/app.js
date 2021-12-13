const burger = document.getElementById("burger-icon")
const mobileMenu = document.getElementById("mobile-menu")

burger.addEventListener("click", (e) => {
    if(mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden")
    }else{
        mobileMenu.classList.add("hidden")
    }
})