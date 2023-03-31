//MATERIALIZE INITIATIONS'
var elem1 = document.querySelectorAll('.sidenav');
document.addEventListener("DOMContentLoaded" , () => {
    var instances = M.Sidenav.init(elem1, {});
})


const body = document.getElementById("any");
var elem2 = document.querySelectorAll('.modal');
document.addEventListener("DOMContentLoaded" , () => {
    var instances = M.Modal.init(elem2  , {})
})
var elem3 = document.querySelectorAll('.dropdown-trigger');
document.addEventListener('DOMContentLoaded', function() {
    var instances = M.Dropdown.init(elem3, {
        coverTrigger:false,
        constrainWidth	: false,
    });
  });


//SIGNUP MODAL ANIMNATION ---------
let changerLeft = document.getElementsByClassName('changer-left')[0];
let changerRight = document.getElementsByClassName('changer-right')[0];
let leftCover = document.getElementsByClassName('left-cover')[0];
let leftDef = document.getElementsByClassName('left-def')[0];
let rightCover = document.getElementsByClassName('right-cover')[0];
let rightDef = document.getElementsByClassName('right-def')[0];
let signupoption = document.getElementsByClassName('activate-at-left')[0];
let signinoption = document.getElementsByClassName('activate-at-right')[0];
const LeftSignUpBtn = document.getElementsByClassName("left-signup-btn")[0];
const modalCloseIndicator = document.getElementsByClassName("modal-close-indicator")[0];  




changerRight.addEventListener("click" , () => {
    leftDef.style.animation = `slide-logo-to-right 1s both`;
    signupoption.style.animation = `fadeout 1s both`;
    signinoption.style.animation = `fadein 1s both`;
    rightDef.style.animation = `right-left-signin 1.5s both`
    leftCover.style.animation = `right-left-signup 1.5s both`;
})


changerLeft.addEventListener("click" , () => {
    console.log("hii");
    leftDef.style.animation = `slide-logo-to-left 1s both`;
    signupoption.style.animation = `fadein 1s both`;
    signinoption.style.animation = `fadeout 1s both`;
    rightDef.style.animation = `left-right-signin 1.5s both`;
    leftCover.style.animation = `left-right-signup 1.5s both`;

})




// Fucntion to close authentication modal
function AuthModalClose() {
    elem2[0].M_Modal.close();  
}
function UpdateModalClose() {
    elem2[1].M_Modal.close();  
}

//Closing sidenav on clicking any iption n the mobile sidenav 
const moboptions = document.getElementsByClassName("mob-close");
for(let i = 0 ; i< 5 ; ++i){
    moboptions[i].addEventListener("click" , () => {
        elem1[0].M_Sidenav.close();
    })
}

//Slider animation
const slide1 = document.getElementsByClassName("slider-1")[0];
const slide2 = document.getElementsByClassName("slider-2")[0];
const slide3 = document.getElementsByClassName("slider-3")[0];
function animateSlider(previmg , nowImg){
    previmg.style.display ="none";
    nowImg.style.display ="inline";
}
