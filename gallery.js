window.onload = addTabFocus;

function addTabFocus() {
    console.log("Page loaded – adding tabindex attributes");

    const images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("focus", function() {
            console.log("Image focused");
            upDate(this);
        });

        images[i].addEventListener("blur", function() {
            console.log("Image lost focus");
            unDo();
        });
    }
}

function upDate(previewPic) {


    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("unDo triggered");

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}