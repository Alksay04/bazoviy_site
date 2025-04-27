var lastImageClick = document.getElementById('firstImage')
function clickImage(event) {
    const target = event.target
    const mainImage = document.getElementById("mainImage")

    const newImageURL = target.getAttribute('src')

    mainImage.setAttribute('src', newImageURL)

    target.classList.add('active')
    lastImageClick.classList.remove('active')
    target.classList.add('active')
    lastImageClick = target
}