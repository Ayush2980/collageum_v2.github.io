var elems = document.querySelectorAll('.modal');
document.addEventListener('DOMContentLoaded', function() {
  var instances = M.Modal.init(elems, {
    onCloseEnd : function(data){
  //Reset Tool 2
  dynamicLabel1.innerHTML = "0";
  range1.value = 0;
  dynamicLabel2.innerHTML = "0";
  range2.value = 0;
  dynamicLabel3.innerHTML = "0";
  range3.value = 0;
  dynamicLabel4.innerHTML = "0";
  range4.value = 0;
  targetImg.style.filter = `invert(0%)`
  targetImg.style.filter = `brightness(0)`
  targetImg.style.filter = `saturation(0)`
  targetImg.style.filter = `grayscale(0)`

  //Reset Tool 1
  targetImgcontSS.style.backgroundColor = "white";
  console.log(targetImg.src);
  targetImg.src = "";
  targetImg.style.height = "100%";
  heightVal.innerHTML = "100%"
  heightRange.value = 100
  targetImg.style.width = "100%";
  widthVal.innerHTML = "100%"
  widthRange.value = 100;
  targetImgcontSS.style.transform = `rotateZ(0deg)`;
    }
  });
});

document.addEventListener("DOMContentLoaded" , () => {
  var el = document.querySelectorAll('.tabs');
  var instance = M.Tabs.init(el, {});
})


//Modal Features
const targetImg = document.getElementById("target-img");
const targetImgcontSS = document.getElementsByClassName("img-cont")[0];
const buttons = document.getElementsByClassName("save");
const saveimgBtn1 = document.getElementsByClassName("save")[0];
const saveimgBtn2 = document.getElementsByClassName("save")[1];

//Functions 
// // 1 => Modal and browse btn trigger
function browseTrigger(icon , browse , target , ss , modalBtn , buttons ,maintarget ,index ){
  icon.addEventListener("click" , ()=> {
    browse.click();
  })
  browse.addEventListener("change" , () =>{
    modalBtn.click();
    let file = browse.files[0];
    target.src = URL.createObjectURL(file);
    buttons[index].style.display = "inline";
  })
  buttons[index].addEventListener("click" , () => {
    html2canvas(ss).then((canvas) => {
      console.log("into html");
      maintarget.style.display = "inline";
      icon.style.display = "none";
      maintarget.src = canvas.toDataURL();
      console.log(maintarget.src);
      closeModal.click();
      buttons[index].style.display = "none";
    })
  });
}

// // 2 => Control the value
function Filters(filter , btn , labelAndRange1 , labelAndRange2, labelAndRange3,labelAndRange4 ,dynamicLabel , range , target , maxVal){
  btn.addEventListener("click" , () => {
    labelAndRange1.style.display = "inline"
    labelAndRange2.style.display = "none"
    labelAndRange3.style.display = "none"
    labelAndRange4.style.display = "none"
  })
  if(filter === "inversion"){
    console.log("Other code");
  }
  else{
    range.oninput = function(){
      let val = (maxVal * range.value)/100;
      dynamicLabel.innerHTML = range.value + "%";
      target.style.filter = `${filter}(${val})`
    }
  }
}




//Controlliing The height of the image 
const heightData = document.getElementsByClassName("height-data")[0]
const widthData = document.getElementsByClassName("width-data")[0]
const heightVal = document.getElementsByClassName("indi-val-5")[0]
const widthVal = document.getElementsByClassName("indi-val-6")[0]
const heightRange = document.getElementById("height-range");
const widthRange = document.getElementById("width-range");

heightRange.oninput = function(){
  heightVal.innerHTML = heightRange.value;
  targetImg.style.height = heightRange.value + "%";
}
widthRange.oninput = function(){
  widthVal.innerHTML = widthRange.value;
  targetImg.style.width = widthRange.value + "%";
}



//Filters
// // Assigning the buttons 
const brightBtn  = document.getElementsByClassName("brightness")[0];
const SatBtn  = document.getElementsByClassName("saturation")[0];
const inversionBtn  = document.getElementsByClassName("inversion")[0];
const grayscaleBtn  = document.getElementsByClassName("grayscale")[0];
// // Assigning the labelAndRange {total form (label + range + value)}
const brightnessLabel = document.getElementsByClassName("brightness-data")[0];
const saturationLabel = document.getElementsByClassName("saturation-data")[0];
const inversionLabel = document.getElementsByClassName("inversion-data")[0];
const grayscaleLabel = document.getElementsByClassName("grayscale-data")[0];
// //Assigning the Dynamic labels
const dynamicLabel1 = document.getElementsByClassName("indi-val-1")[0]
const dynamicLabel2 = document.getElementsByClassName("indi-val-2")[0]
const dynamicLabel3 = document.getElementsByClassName("indi-val-3")[0]
const dynamicLabel4 = document.getElementsByClassName("indi-val-4")[0]
// // Assingning the ranges
const range1 = document.getElementById("brightness-range");
const range2 = document.getElementById("saturation-range");
const range3 = document.getElementById("inversion-range");
const range4 = document.getElementById("grayscale-range");



// //ShowTime
Filters("brightness" , brightBtn , brightnessLabel , saturationLabel , inversionLabel , grayscaleLabel , dynamicLabel1 , range1 , targetImg , 5)
Filters("saturation" , SatBtn , saturationLabel , brightnessLabel , inversionLabel , grayscaleLabel , dynamicLabel2 , range2 , targetImg , 5)
Filters("inversion" , inversionBtn , inversionLabel , saturationLabel , brightnessLabel , grayscaleLabel , dynamicLabel3 , range3 , targetImg , 100)
// For inversion
range3.oninput = function(){
  console.log("hii");
  dynamicLabel3.innerHTML = range3.value + "%";
  targetImg.style.filter = `invert(${range3.value}%)`
  
}
Filters("grayscale" , grayscaleBtn , grayscaleLabel , saturationLabel , inversionLabel , brightnessLabel , dynamicLabel4 , range4 , targetImg , 1)

//Closing the modal with the close button
const closeModal = document.getElementsByClassName("close-modal-edit")[0]
closeModal.addEventListener("click" , () => {
  elems[0].M_Modal.close();
})

//First Layout
const leftImgIcon = document.getElementsByClassName("left-img-1")[0]
const rightImgIcon = document.getElementsByClassName("right-img-1")[0]
const leftimgBrowse = document.getElementById("left-img-1-I")
const rightimgBrowse = document.getElementById("right-img-1-I")
const modalBtn = document.getElementById("modal1-trigger");


browseTrigger(rightImgIcon , rightimgBrowse ,targetImg ,targetImgcontSS , modalBtn , buttons ,imgMem1right ,0)
browseTrigger(leftImgIcon , leftimgBrowse ,targetImg ,targetImgcontSS  , modalBtn , buttons ,imgMem1left , 1)
//Second Layout
const leftImg2icon = document.getElementsByClassName("left-img-2")[0];
const leftImg2browse = document.getElementById("left-img-2-I");
const centerImg2icon = document.getElementsByClassName("mid-img-2")[0];
const centerImg2browse = document.getElementById("center-img-2-I");
const rightImg2icon = document.getElementsByClassName("right-img-2")[0];
const rightImg2browse = document.getElementById("right-img-2-I");



browseTrigger(leftImg2icon , leftImg2browse , targetImg ,targetImgcontSS  , modalBtn , buttons ,imgMem2left , 2 )
browseTrigger(centerImg2icon , centerImg2browse , targetImg ,targetImgcontSS  , modalBtn , buttons ,imgMem2center, 3 )
browseTrigger(rightImg2icon , rightImg2browse , targetImg ,targetImgcontSS  , modalBtn , buttons , imgMem2right , 4)

//Third Layout 
const topleftImg3icon = document.getElementsByClassName("top-left-img-3")[0]
const topleftImg3browse = document.getElementById("top-left-img-3-I");
const toprightImg3icon = document.getElementsByClassName("top-right-img-3")[0]
const toprightImg3browse = document.getElementById("top-right-img-3-I");
const downleftImg3icon = document.getElementsByClassName("down-left-img-3")[0]
const downleftImg3browse = document.getElementById("down-left-img-3-I");
const downrightImg3icon = document.getElementsByClassName("down-right-img-3")[0]
const downrightImg3browse = document.getElementById("down-right-img-3-I");

const imgParentModal = document.getElementsByClassName("img-parent-cont")[0]

browseTrigger(topleftImg3icon , topleftImg3browse , targetImg , targetImgcontSS , modalBtn , buttons ,imgMem3topleft , 5)
browseTrigger(toprightImg3icon , toprightImg3browse , targetImg , targetImgcontSS , modalBtn , buttons , imgMem3topright , 6)
browseTrigger(downleftImg3icon , downleftImg3browse , targetImg , targetImgcontSS , modalBtn , buttons , imgMem3downleft, 7)
browseTrigger(downrightImg3icon , downrightImg3browse , targetImg , targetImgcontSS , modalBtn , buttons , imgMem3downright , 8)


// remove image 
const btnremove = document.getElementsByClassName("remove");
const btncancel = document.getElementsByClassName("cancel");

// imgcont  == imgMem1left
// btnremove
// btncancel
// imgicon

function Imagination(imgcont , btnremove , btncancel , imgicon) {
  console.log("Imagination");
  imgcont.addEventListener("click" , () => {
    imgcont.style.filter = "blur(24px)";
    btnremove.style.position = "absolute"
    btnremove.style.top = "39%"
    btnremove.style.right = "28.5%"
    btncancel.style.position = "absolute"
    btncancel.style.top = "61%"
    btncancel.style.right = "37.5%"
  
    btnremove.addEventListener("click" , () => {
      imgcont.src = "";
      imgicon.style.display = "inline";
      btnremove.style.display = "none"
      btncancel.style.display = "none"
      imgcont.style.display = "none"
      imgcont.style.filter = "blur(0px)";
    })
    btncancel.addEventListener("click" , () => {
      imgcont.style.filter = "blur(0px)";
      
      btnremove.style.display = "none"
      btncancel.style.display = "none"
    })
    btnremove.style.display = "inline"
    btncancel.style.display = "inline"
    
  })
  
}
//First layout
Imagination(imgMem1left , btnremove[0] , btncancel[0] , leftImgIcon )
Imagination(imgMem1right , btnremove[1] , btncancel[1] , rightImgIcon )
//Second Layout
Imagination(imgMem2left , btnremove[2] , btncancel[2] , leftImg2icon )
Imagination(imgMem2center , btnremove[3] , btncancel[3] , centerImg2icon )
Imagination(imgMem2right , btnremove[4] , btncancel[4] , rightImg2icon )
//Third Layout
Imagination(imgMem3topleft , btnremove[5] , btncancel[5] ,topleftImg3icon   )
Imagination(imgMem3topright , btnremove[6] , btncancel[6] ,toprightImg3icon   )
Imagination(imgMem3downleft , btnremove[7] , btncancel[7] ,downleftImg3icon   )
Imagination(imgMem3downright , btnremove[8] , btncancel[8] ,downrightImg3icon  )



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {});
});


console.log("Mobile Working");

















//MOBILE SOFTWARE 
//Switching tabs for editing 
const brush = document.getElementsByClassName("bottom-brush")[0];
const layout = document.getElementsByClassName("bottom-layout")[0];
const layoutSel = document.getElementsByClassName("layout-selector")[0];
const otherProp = document.getElementsByClassName("other-prop")[0];

layout.addEventListener("click" , () => {
    layoutSel.style.display = 'inline'
    otherProp.style.display = 'none'
    
    layout.style.borderBottom = '3px white solid'
    brush.style.borderBottom = 'none'
    console.log("layout");
  })
brush.addEventListener("click" , () => {
    layoutSel.style.display = 'none'
    otherProp.style.display = 'inline'
    brush.style.borderBottom = '3px white solid'
    layout.style.borderBottom = 'none'
    console.log("brush");
})



//Switching layouts
const layoutmob1 = document.getElementsByClassName("layout-mob-1")[0];
const layoutmob2 = document.getElementsByClassName("layout-mob-2")[0];
const layoutmob3 = document.getElementsByClassName("layout-mob-3")[0];
const showcaseMob1 = document.getElementsByClassName("layout-1-mob")[0];
const showcaseMob2 = document.getElementsByClassName("layout-2-mob")[0];
const showcaseMob3 = document.getElementsByClassName("layout-3-mob")[0];

const downloadBtndiv = document.getElementsByClassName("download-mob");
const uploadbtnDiv = document.getElementsByClassName("upload-mob");

uploadbtnDiv[0].style.display = "inline";

function showcaseLayout(actualLayout , showcase1 , showcase2 , showcase3 , layout2 , layout3 , index){
  actualLayout.addEventListener("click" , () => {
    for(let i =0 ; i< downloadBtndiv.length ; ++i){
      downloadBtndiv[i].style.display = "none";
    }
    downloadBtndiv[index].style.display = "inline";
    for(let i = 0 ; i < uploadbtnDiv.length ; ++i){
      uploadbtnDiv[i].style.display = "none";
    }
    uploadbtnDiv[index].style.display = "inline";

    showcase1.style.display = "grid";
    showcase2.style.display = "none";
    showcase3.style.display = "none";
    actualLayout.style.border = "5px white groove";
    layout2.style.border = "none";
    layout3.style.border = "none";
  })

}

showcaseLayout(showcaseMob1 , layoutmob1 , layoutmob2 , layoutmob3 , showcaseMob2 , showcaseMob3 , 0);
showcaseLayout(showcaseMob2 , layoutmob2 , layoutmob1 , layoutmob3 , showcaseMob1 , showcaseMob3 , 1);
showcaseLayout(showcaseMob3 , layoutmob3 , layoutmob2 , layoutmob1 , showcaseMob1 , showcaseMob2 , 2);

//Range value 
const mobSpacingRange = document.getElementById("range-spacing-mob-spacing")
const mobBorderRange = document.getElementById("range-spacing-mob-border")


//First layout elements
const leftMob = document.getElementsByClassName("Mem-mob-1")[0];
const rightMob = document.getElementsByClassName("Mem-mob-2")[0];

const leftMobImage = document.getElementById("mob-Mem-1-Image-left");
const rightMobImage = document.getElementById("mob-Mem-1-Image-right");
//Second Layout elements 
const TopLeftMob = document.getElementsByClassName("mob-arr-2-1")[0]
const TopRightMob = document.getElementsByClassName("mob-arr-2-2")[0]
const BottomLeftMob = document.getElementsByClassName("mob-arr-2-3")[0]
const BottomRightMob = document.getElementsByClassName("mob-arr-2-4")[0]

const TopLeftMobImage = document.getElementById("mob-Mem-1-Image-top-left");
const TopRightMobImage = document.getElementById("mob-Mem-1-Image-top-right");
const BottomLeftMobImage = document.getElementById("mob-Mem-1-Image-bottom-left");
const BottomRightMobImage = document.getElementById("mob-Mem-1-Image-bottom-right");
//Third Layout 
const leftMob2 = document.getElementsByClassName("mob-arr-3-1")[0];
const centerMob2 = document.getElementsByClassName("mob-arr-3-2")[0];
const rightMob2 = document.getElementsByClassName("mob-arr-3-3")[0];

const leftMob2Image = document.getElementById("mob-Mem-1-Image-left");
const centerMob2Image = document.getElementById("mob-Mem-1-Image-center");
const rightMob2Image = document.getElementById("mob-Mem-1-Image-right");

mobSpacingRange.oninput = function(){
  let space = (20 * this.value)/100;
  document.getElementsByClassName("space-value")[0].innerHTML = space;
  //First layout
  layoutmob1.style.paddingTop = `${space}px`
  layoutmob1.style.paddingBottom = `${space}px`
  layoutmob1.style.paddingLeft = `${space}px`
  layoutmob1.style.paddingRight = `${space * 2}px`
  layoutmob1.style.gridColumnGap = `${space}px`
  //Second layout
  layoutmob2.style.paddingTop = `${space}px`
  layoutmob2.style.paddingBottom = `${space * 2}px`
  layoutmob2.style.paddingLeft = `${space}px`
  layoutmob2.style.paddingRight = `${space * 2}px`
  layoutmob2.style.gridColumnGap = `${space}px`
  layoutmob2.style.gridRowGap = `${space}px`
  //Third layout 
  layoutmob3.style.paddingTop = `${space}px`
  layoutmob3.style.paddingBottom = `${space}px`
  layoutmob3.style.paddingRight = `${space * 3}px`
  layoutmob3.style.paddingLeft = `${space}px`
  layoutmob3.style.gridColumnGap = `${space}px`
}

mobBorderRange.oninput = function() {
  let border = (80 * this.value)/100;
  document.getElementsByClassName("border-value")[0].innerHTML = border;
  //First Layout
  leftMob.style.borderRadius = `${border}px`;
  rightMob.style.borderRadius = `${border}px`;

  leftMobImage.style.borderRadius = `${border}px`;
  rightMobImage.style.borderRadius = `${border}px`;
  //Second Layout
  TopLeftMob.style.borderRadius = `${border}px`;
  TopRightMob.style.borderRadius = `${border}px`;
  BottomLeftMob.style.borderRadius = `${border}px`;
  BottomRightMob.style.borderRadius = `${border}px`;

  TopLeftMobImage.style.borderRadius = `${border}px`;
  TopRightMobImage.style.borderRadius = `${border}px`;
  BottomLeftMobImage.style.borderRadius = `${border}px`;
  BottomRightMobImage.style.borderRadius = `${border}px`;


  //Third Layout
  leftMob2.style.borderRadius = `${border}px`;
  centerMob2.style.borderRadius = `${border}px`;
  rightMob2.style.borderRadius = `${border}px`;

  leftMob2Image.style.borderRadius = `${border}px`;
  centerMob2Image.style.borderRadius = `${border}px`;
  rightMob2Image.style.borderRadius = `${border}px`;
}

//Bg color adddition
const green1 = document.getElementById("color-green");
const green2 = document.getElementById("color-green-2");
const pinkmob = document.getElementById("color-pink");
const bluemob = document.getElementById("color-blue");
const yellowmob = document.getElementById("color-yellow");
const orangemob = document.getElementById("color-orange");
const redmob = document.getElementById("color-red");
const doNone = document.getElementsByClassName("do-none");


function BgAdder(div , target , color){
  console.log("Start");
  div.addEventListener("click" , () => {
    console.log("Clicked");
    for(let i = 0; i < doNone.length ; ++i){
      doNone[i].style.border = "none";
    }
    target.style.backgroundColor = color;
    div.style.borderColor = `white`
    div.style.borderWidth =`3px`
    div.style.borderStyle = `solid`

  })

}
//First Layout 
BgAdder(green1 , layoutmob1 , "green")
BgAdder(green2 , layoutmob1 , "green")
BgAdder(pinkmob ,layoutmob1 , "pink")
BgAdder(bluemob ,layoutmob1 , "blue")
BgAdder(yellowmob ,layoutmob1 , "yellow")
BgAdder(orangemob ,layoutmob1 , "orange")
BgAdder(redmob ,layoutmob1 , "red")
//Second Layout 
BgAdder(green1 , layoutmob2 , "green")
BgAdder(green2 , layoutmob2 , "green")
BgAdder(pinkmob ,layoutmob2 , "pink")
BgAdder(bluemob ,layoutmob2 , "blue")
BgAdder(yellowmob ,layoutmob2 , "yellow")
BgAdder(orangemob ,layoutmob2 , "orange")
BgAdder(redmob ,layoutmob2 , "red")
//Third Layout 
BgAdder(green1 , layoutmob3 , "green")
BgAdder(green2 , layoutmob3 , "green")
BgAdder(pinkmob ,layoutmob3 , "pink")
BgAdder(bluemob ,layoutmob3 , "blue")
BgAdder(yellowmob ,layoutmob3 , "yellow")
BgAdder(orangemob ,layoutmob3 , "orange")
BgAdder(redmob ,layoutmob3 , "red")

//Import image from gallery
//Common variables
const ActualSS = document.getElementsByClassName("parent-image-cont")[0];
const ModalImage = document.getElementById("image-modal");
const saveImageMob = document.getElementsByClassName("mobile-saveimage");
const ModalToImage = document.getElementsByClassName("mobile-source");
const iconMob  = document.getElementsByClassName("hide-for-image");



function ImageImporter(ImgIcon , ImgBrowse , targetImgModal , index){
  ImgIcon.addEventListener("click" , () => {
    ImgBrowse.click();
    ImgBrowse.addEventListener("change" , () => {
      for(let i = 0 ; i < saveImageMob.length ; ++i){
        saveImageMob[i].style.display = "none";
        console.log(saveImageMob[i].innerHTML);
      }
      saveImageMob[index].style.display = "inline";
        elems[2].M_Modal.open();
        let file = ImgBrowse.files[0];
        targetImgModal.src = URL.createObjectURL(file);
      })
  })
  saveImageMob[index].addEventListener("click" , () => {
      html2canvas(ActualSS, { allowTaint: true }).then(function (canvas) {
      ModalToImage[index].style.display = "inline";
      console.log(ModalToImage[index]);
      iconMob[index].style.display = "none";
      ModalToImage[index].src = canvas.toDataURL();
      ModalToImage[index].style.filter = targetImgModal.style.filter;
      elems[2].M_Modal.close();
  });
  })
}


//First layout
const MobLeftBrowse = document.getElementById("mob-left-browse");
const MobRightBrowse = document.getElementById("mob-right-browse");
const MobImgLeft = document.getElementsByClassName("mob-left-img-1")[0];
const MobImgRight = document.getElementsByClassName("mob-right-img-1")[0];


ImageImporter(MobImgLeft , MobLeftBrowse ,ModalImage , 0);
ImageImporter(MobImgRight , MobRightBrowse ,ModalImage , 1);
//Third layout
const MobLeftBrowse2 = document.getElementById("mob-left-browse-2")
const MobCenterBrowse = document.getElementById("mob-center-browse-2")
const MobRightBrowse2 = document.getElementById("mob-right-browse-2")
const MobImgLeft2 = document.getElementsByClassName("mob-left-img-2")[0]
const MobImgCenter = document.getElementsByClassName("mob-center-img-2")[0]
const MobImgRight2 = document.getElementsByClassName("mob-right-img-2")[0]


ImageImporter(MobImgLeft2 ,MobLeftBrowse2 ,ModalImage ,6);
ImageImporter(MobImgCenter ,MobCenterBrowse ,ModalImage , 7);
ImageImporter(MobImgRight2 ,MobRightBrowse2  ,ModalImage , 8);

//Second Layout
const MobTopLeftBrowse = document.getElementById("mob-top-left-browse");
const MobTopRightBrowse = document.getElementById("mob-top-right-browse");
const MobBottomLeftBrowse = document.getElementById("mob-bottom-left-browse");
const MobBottomRightBrowse = document.getElementById("mob-bottom-right-browse");
const MobTopLeftImg = document.getElementsByClassName("mob-top-left-img-1")[0];
const MobTopRightImg = document.getElementsByClassName("mob-top-right-img-1")[0];
const MobBottomLeftImg = document.getElementsByClassName("mob-bottom-left-img-1")[0];
const MobBottomRightImg = document.getElementsByClassName("mob-bottom-right-img-1")[0];

ImageImporter(MobTopLeftImg , MobTopLeftBrowse , ModalImage , 2)
ImageImporter(MobTopRightImg , MobTopRightBrowse , ModalImage , 3)
ImageImporter(MobBottomLeftImg , MobBottomLeftBrowse , ModalImage , 4)
ImageImporter(MobBottomRightImg , MobBottomRightBrowse , ModalImage , 5)







//Filters and its working 
const mobFilterBtn = document.getElementsByClassName("mob-brdr");
const Ranges = document.getElementsByClassName("range-mob");
const rangesInput = document.getElementsByClassName("range-mob-value")
const dynamicLabel = document.getElementsByClassName("indi-val-mob-1");
const filterCss = {
  0 : "brightness",
  1 : "saturation",
  2 : "inversion",
  3 : "grayscale",
}

mobFilterBtn[0].style.backgroundColor = `blue`;
mobFilterBtn[0].style.color = `white`;
for(let i = 1 ; i < Ranges.length ; ++i){
  Ranges[i].style.display = "none";
}
function range(index , maxVal){
  rangesInput[index].oninput = function(){
    let val = (maxVal * rangesInput[index].value)/100;
    dynamicLabel[index].innerHTML = rangesInput[index].value + "%";
    ModalImage.style.filter = `${filterCss[`${index}`]}(${val})`
  }
}


function clickFilterbtns(index){
  mobFilterBtn[index].addEventListener("click" , () => {
    for(let i = 0 ; i < Ranges.length ; ++i){
      Ranges[i].style.display = "none";
    }
    for(let i = 0 ; i < mobFilterBtn.length ; ++i){
      mobFilterBtn[i].style.backgroundColor = `white`;
      mobFilterBtn[i].style.color = `black`;
    }
    mobFilterBtn[index].style.backgroundColor = `blue`;
    mobFilterBtn[index].style.color = `white`;
    Ranges[index].style.display= "inline";
  })
}

for(let k  =0 ; k<4 ; ++k){
  clickFilterbtns(k);
  range(k , 10)
}



//bgColor adder
const colorbox = document.getElementsByClassName("modal-bg-color");
const colorObj = {
  0 : "white",
  1 : "green",
  2 : "pink",
  3 : "blue",
  4 : "green",
  5 : "yellow",
  6 : "orange",
  7 : "red", 

}


function colorBoxClick(index){
  colorbox[index].addEventListener("click" , () => {
    for(let i = 0; i < colorbox.length ; ++i){
      colorbox[i].style.margin = "2px";
      colorbox[i].style.border = "none";
    }
    document.getElementsByClassName("parent-image-cont")[0].style.backgroundColor = colorObj[`${index}`]
    colorbox[index].style.margin = "0px";
    colorbox[index].style.border = "2px black solid";

  })

}

for(let k =0 ; k<8 ;++k){
  colorBoxClick(k);
}

//Height and Width controllers 
const heightMobrange = document.getElementById("height-range-mob");
const widthMobrange = document.getElementById("width-range-mob");

heightMobrange.oninput = function(){
  document.getElementsByClassName("indi-val-mob-6")[0].innerHTML = this.value + "%";
  ModalImage.style.height = `${this.value}%`;
}
widthMobrange.oninput = function(){
  document.getElementsByClassName("indi-val-mob-5")[0].innerHTML = this.value + "%";
  ModalImage.style.width = `${this.value}%`;
}


//Rotation Mobile
const RotateRightMob = document.getElementsByClassName("rotate-right-mob")[0];
const RotateLeftMob = document.getElementsByClassName("rotate-left-mob")[0];
let rotateRmob = 0;
let rotateLmob = 0;

function RotateRightMobbtn(){
  RotateRightMob.addEventListener("click" , () => {
    rotateRmob += 90;
    ModalImage.style.transform = `rotateZ(${rotateRmob}deg)`;
  })
}
function RotateLeftMobbtn(){
  RotateLeftMob.addEventListener("click" , () => {
    rotateLmob = rotateLmob-  90;
    ModalImage.style.transform = `rotateZ(${rotateLmob}deg)`;
  })
}

RotateRightMobbtn();
RotateLeftMobbtn();


//Reset Button
const resetBtnMob = document.getElementsByClassName("reset-btn-mob")[0];
resetBtnMob.addEventListener("click" , () => {
  for(let i = 0 ; i < ModalToImage.length ; ++i){
    ModalToImage[i].src = "";
    ModalToImage[i].style.display = "none";

  }
  for(let k = 0 ; k < iconMob.length ; ++k){
    iconMob[k].style.display = "inline";
    console.log(k);
  }
});


//Download trigger for PC
const downloadForPc = document.getElementsByClassName("modal-trigger-download")[0];
downloadForPc.addEventListener("click" , () => {
  elems[1].M_Modal.open();
  elems[1].M_Modal.close();
  elems[1].M_Modal.open();
})

