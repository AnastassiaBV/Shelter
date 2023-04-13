let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let body = document.querySelector("body")
let burgerWindow = document.querySelector(".burger_window")
function showBurger() {

    if (nav.classList.contains("active_burger")) {

        setTimeout(() => {
            nav.classList.remove("active_burger")
        }, 100)
        nav.classList.add("no_active_burger")
        burger.style.transform = "rotate(0deg)"
        body.classList.remove("no_scroll")
    } else {

        burgerWindow.style.opacity = 1
        nav.classList.remove("no_active_burger")
        nav.classList.add("active_burger")
        burger.style.transform = "rotate(90deg)"
        body.classList.add("no_scroll")
    }
}
function closeBurger(event) {
    if (event.target.dataset.content != "close") {
        setTimeout(() => {
            nav.classList.remove("active_burger")
        }, 100)
        nav.classList.add("no_active_burger")
        burger.style.transform = "rotate(0deg)"
        document.body.classList.remove("no_scroll")
        burgerWindow.style.opacity = 0
    }
    console.log(event.target.dataset.content)
}

burger.addEventListener('click', showBurger)
body.addEventListener("click", closeBurger)