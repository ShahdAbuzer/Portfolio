document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".viewSection")
    const navLinks = document.querySelectorAll(".options a")

    function onScroll() {
        let scrollPos = window.scrollY || document.documentElement.scrollTop

        sections.forEach((section) => {
            const top = section.offsetTop - 40
            const bottom = top + section.scrollHeight
            const hash = section.getAttribute("id")
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach((link) => {
                    link.classList.remove("active")
                    if (link.getAttribute("href").endsWith(hash)) {
                        console.log(link)
                        link.classList.add("active")
                    }
                })
            }
        })
    }
    window.addEventListener("scroll", onScroll)
})