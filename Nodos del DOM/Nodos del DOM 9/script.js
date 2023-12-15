function changeImage(imageSrc, description) {
    var mainImg = document.getElementById('mainImg');
    var imageDescription = document.getElementById('imageDescription');

    mainImg.src = imageSrc;
    imageDescription.innerText = description;
}
