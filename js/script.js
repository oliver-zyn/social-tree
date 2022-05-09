document.addEventListener('DOMContentLoaded', () => {
    if (isDarkModeSystem()) {
        darkModeToggle()
    }
})

function darkModeToggle() {
    let html = document.querySelector('html')
    html.classList.toggle('dark-mode')
}

function isDarkModeSystem() {
    return matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
}