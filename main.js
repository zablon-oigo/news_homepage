const initApp=()=>{
const open=document.querySelector('#open')
const close=document.querySelector('#closeBtn')
const menu=document.querySelector('#menuBtn')

const toggleMenu=()=>{
    menu.classList.toggle('hidden')
    menu.classList.toggle('block')

}
open.addEventListener('click',toggleMenu)
close.addEventListener('click',toggleMenu)
}
document.addEventListener('DOMContentLoaded',initApp)

// Image
function updateImageBasedOnScreenSize() {
const image=document.querySelector('#image')
const desktopImage='assests/images/image-web-3-desktop.jpg'
const mobileImage='assests/images/image-web-3-mobile.jpg'
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (screenWidth < 768) {
    image.src = mobileImage;
    console.log("Small screen detected.");
} else if (screenWidth < 1024) {
    image.src = desktopImage;
    console.log("Medium screen detected.");
} else {
    image.src = desktopImage;
    console.log("Large screen detected.");
}
}
updateImageBasedOnScreenSize()
// Set up an interval to check and update the screen size every 1 seconds
setInterval(updateImageBasedOnScreenSize, 1000);



