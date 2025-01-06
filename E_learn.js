let treeImage = document.querySelector("#about-img");

treeImage.addEventListener("click", function () {
    treeImage.classList.toggle("glow");

    document.querySelector('#about').classList.toggle("glowBack");
})
