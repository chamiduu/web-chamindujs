const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (pageYOffset > 100) {
        nav.style.backgroundColor = "var(--nav)"
    } else {
        nav.style.backgroundColor = "var(--nav)"
    }
})
