const Customize = document.getElementsByClassName("Customize")[0];
const Layouts = document.getElementsByClassName("Layouts")[0];
const customizeSidenav = document.getElementById("slide-out-1");
const layoutSidenav = document.getElementById("slide-out-2");
const textSidenav = document.getElementById("slide-out-3");
const customize = document.getElementsByClassName("customize")[0];
const layouts = document.getElementsByClassName("layouts")[0];

Customize.addEventListener("click", () => {
  customizeSidenav.style.zIndex = "-2";
  layoutSidenav.style.zIndex = "-3";
  customize.style.borderLeftStyle = "solid";
  layouts.style.borderLeftStyle = "none";
});

Layouts.addEventListener("click", () => {
  customizeSidenav.style.zIndex = "-3";
  layoutSidenav.style.zIndex = "-2";
  layouts.style.borderLeftStyle = "solid";
  customize.style.borderLeftStyle = "none";
});



//Functions 

//BG color modal
function modalBg(btn , color , target){
  btn.addEventListener("click" , () => {
    target.style.backgroundColor = color;
  })
}

//BGcolor function
function bgcolor(btn, color ,target1 , target2 , target3){
  btn.addEventListener("click" , ()=> {
    target1.style.backgroundColor = color;
    target2.style.backgroundColor = color;
    target3.style.backgroundColor = color;
  })

}




//radius function
function RadiusApplyToAll(Mem , radius , img){
  for(let i = 0; i< Mem.length ; ++i){
    Mem[i].style.borderRadius = `${radius}px`
  }
    
    img.style.borderRadius = `${radius}px`


}

//Sidenav in layouts and its clicking functions 
function clicker(btn , disp1 , disp2 , disp3 , L1 , L2 , L3 , rangeSpace , SpacingValue , Mem1 ,Mem2 , Mem3 , radiusValue , rangeRadius ){
  btn.addEventListener("click" , ( )=> {
    disp1.style.display = "grid";
    disp2.style.display = "none";
    disp3.style.display = "none";

    //Reseting thinigs to default
    L1.style.gridColumnGap = `0px`
    L1.style.padding = `0px`
    L2.style.gridColumnGap = `0px`
    L2.style.padding = `0px`
    L3.style.gridColumnGap = `0px`
    L3.style.gridRowGap = `0px`
    L3.style.padding = `0px`
    rangeSpace.value = 0;
    SpacingValue.innerHTML = " 0";
    radiusValue.innerHTML = " 0"
    rangeRadius.value = 0;
    RadiusApplyToAll(Mem1 , 0)
    RadiusApplyToAll(Mem2 , 0)
    RadiusApplyToAll(Mem3 , 0)
    Layout1.style.backgroundColor = "white"
    Layout2.style.backgroundColor = "white"
    Layout3.style.backgroundColor = "white"
  })
}


const layout1 = document.getElementsByClassName("layout-1")[0];
const layout2 = document.getElementsByClassName("layout-2")[0];
const layout3 = document.getElementsByClassName("layout-3")[0];
const Layout1 = document.getElementsByClassName("Layout-1")[0];
const Layout2 = document.getElementsByClassName("Layout-2")[0];
const Layout3 = document.getElementsByClassName("Layout-3")[0];
const targetImgCont  = document.getElementsByClassName("img-cont")[0];

const rangeSpace = document.getElementById("Range-spacing");
const SpacingValue = document.getElementsByClassName("spacing-value")[0];
const rangeRadius = document.getElementById("Range-radius");
const radiusValue = document.getElementsByClassName("radius-value")[0]

const Mem1 = document.getElementsByClassName("Mem-1");
const Mem2 = document.getElementsByClassName("Mem-2");
const Mem3 = document.getElementsByClassName("Mem-3");

clicker(layout1 , Layout1 , Layout2 , Layout3 , Layout1 , Layout2 , Layout3 , rangeSpace , SpacingValue , Mem1 ,Mem2 , Mem3 , radiusValue , rangeRadius)
clicker(layout2 , Layout2 , Layout1 , Layout3 , Layout1 , Layout2 , Layout3 , rangeSpace , SpacingValue , Mem1 ,Mem2 , Mem3 , radiusValue , rangeRadius)
clicker(layout3 , Layout3 , Layout2 , Layout1 , Layout1 , Layout2 , Layout3 , rangeSpace , SpacingValue , Mem1 ,Mem2 , Mem3 , radiusValue , rangeRadius)




//Slider for spacing 

SpacingValue.innerHTML =" " +  rangeSpace.value;
rangeSpace.oninput = function() {
  let dist = (20 * this.value)/100;
  SpacingValue.innerHTML = " " + dist;
  Layout1.style.gridColumnGap = `${dist}px`
  Layout1.style.padding = `${dist}px`
  Layout2.style.gridColumnGap = `${dist}px`
  Layout2.style.padding = `${dist}px`
  Layout3.style.gridColumnGap = `${dist}px`
  Layout3.style.padding = `${dist}px`
  Layout3.style.gridRowGap = `${dist}px`
}



//Changes to be done

//first layout selectors for image radius 
const imgMem1left = document.getElementById("Mem-1-Image-left");
const imgMem1right = document.getElementById("Mem-1-Image-right");
//second layout selectors for image radius 
const imgMem2left = document.getElementById("Mem-2-Image-left");
const imgMem2center = document.getElementById("Mem-2-Image-mid");
const imgMem2right = document.getElementById("Mem-2-Image-right");
//Third layout selectors for image radius 
const imgMem3topleft = document.getElementById("Mem-3-Image-top-left");
const imgMem3topright = document.getElementById("Mem-3-Image-top-right");
const imgMem3downleft = document.getElementById("Mem-3-Image-down-left");
const imgMem3downright = document.getElementById("Mem-3-Image-down-right");

//Slider for Radius 
radiusValue.innerHTML = " " + rangeRadius.value;
rangeRadius.oninput = function() {
  let radius = (103 * this.value)/100;
  radiusValue.innerHTML = " " + radius;
  RadiusApplyToAll(Mem1 , radius , imgMem1left)
  RadiusApplyToAll(Mem1 , radius , imgMem1right)
  RadiusApplyToAll(Mem2 , radius , imgMem2left)
  RadiusApplyToAll(Mem2 , radius , imgMem2center)
  RadiusApplyToAll(Mem2 , radius , imgMem2right)
  RadiusApplyToAll(Mem3 , radius , imgMem3topleft)
  RadiusApplyToAll(Mem3 , radius , imgMem3topright)
  RadiusApplyToAll(Mem3 , radius , imgMem3downleft)
  RadiusApplyToAll(Mem3 , radius , imgMem3downright)
}

//layout Background color changer
const white = document.getElementsByClassName("color-white")[0];
const green = document.getElementsByClassName("color-green");
const pink = document.getElementsByClassName("color-pink")[0];
const blue = document.getElementsByClassName("color-blue")[0];
const yellow = document.getElementsByClassName("color-yellow")[0];
const orange = document.getElementsByClassName("color-orange")[0];
const red = document.getElementsByClassName("color-red")[0];

bgcolor(white ,"white" , Layout1 ,Layout2 , Layout3 )
bgcolor(pink ,"pink" , Layout1 ,Layout2 , Layout3 )
bgcolor(blue ,"blue" , Layout1 ,Layout2 , Layout3 )
bgcolor(yellow ,"yellow" , Layout1 ,Layout2 , Layout3 )
bgcolor(orange ,"orange" , Layout1 ,Layout2 , Layout3 )
bgcolor(red ,"red" , Layout1 ,Layout2 , Layout3 )
bgcolor(green[0] ,"green" , Layout1 ,Layout2 , Layout3 )
bgcolor(green[1] ,"green" , Layout1 ,Layout2 , Layout3 )


//Modal bg color changer
const targetimg2 =  document.getElementsByClassName("img-cont")[0]; 
const colors = document.getElementsByClassName("rad-2");
modalBg(colors[0] , "white" , targetimg2 );
modalBg(colors[1] , "green" , targetimg2 );
modalBg(colors[2] , "pink" , targetimg2 );
modalBg(colors[3] , "blue" , targetimg2 );
modalBg(colors[4] , "green" , targetimg2 );
modalBg(colors[5] , "yellow" , targetimg2 );
modalBg(colors[6] , "orange" , targetimg2 );
modalBg(colors[7] , "red" , targetimg2 );


//Rotation
const RotateRight = document.getElementsByClassName("rotate-right")[0];
const RotateLeft = document.getElementsByClassName("rotate-left")[0];
let rotateR = 0;
let rotateL = 0;

function RotateRightbtn(){
  RotateRight.addEventListener("click" , () => {
    rotateR += 90;
    targetimg2.style.transform = `rotateZ(${rotateR}deg)`;
  })
}
function RotateLeftbtn(){
  RotateLeft.addEventListener("click" , () => {
    rotateL = rotateL-  90;
    console.log(rotateL);
    targetimg2.style.transform = `rotateZ(${rotateL}deg)`;
  })
}

RotateRightbtn();
RotateLeftbtn();

const galleryDownloadbtn = document.getElementsByClassName("gallery")[0];
const DmodalImage = document.getElementById("showImage");
const ImageForDownloadModal = document.getElementsByClassName("collage")[0];
const heightval = document.getElementById("height");
const widthval = document.getElementById("width");
const aspectCheckBox = document.getElementById("aspect-check");
const modalDownloadBtn = document.getElementsByClassName("modal-download")[0];
let ratio;


galleryDownloadbtn.addEventListener("click" , () => {
  html2canvas(ImageForDownloadModal , { allowTaint: true}).then(function(canvas){
    DmodalImage.src = canvas.toDataURL();
  })
  heightval.value = DmodalImage.naturalHeight;
  widthval.value = DmodalImage.naturalWidth;
  ratio = DmodalImage.naturalHeight/DmodalImage.naturalWidth;
})

heightval.addEventListener("keyup" , () => {
  console.log(heightval.value);
  let width = heightval.value/ratio
  if(aspectCheckBox.checked == true){
    console.log(width);
    widthval.value = Math.floor(width);
  }
});
widthval.addEventListener("keyup" , () => {
  let height = widthval.value * ratio
  if(aspectCheckBox.checked == true){
    console.log(height);
    heightval.value = Math.floor(height);
  }
});

modalDownloadBtn.addEventListener("click" , () => {
  const canvas = document.createElement("canvas")
  const a = document.createElement("a");
  const ctx = canvas.getContext("2d");

  canvas.width = widthval.value
  canvas.height = heightval.value

  ctx.drawImage(DmodalImage , 0 , 0 , canvas.width , canvas.height)
  a.href = canvas.toDataURL("Image/jpeg");
  a.download = new Date().getTime;
  a.click();
  elems[1].M_Modal.close()
  const chipCont = document.getElementsByClassName("chip")[0];
  chipCont.style.animation = `signIn-Transition 4s both`;
})


//Downloading Mobile view
const MobileDownloadBtn = document.getElementsByClassName("download-mob");
MobileDownloadBtn[0].style.display = "inline"
const MobileLayout1 = document.getElementsByClassName("layout-mob-1")[0];
const MobileLayout2 = document.getElementsByClassName("layout-mob-2")[0];
const MobileLayout3 = document.getElementsByClassName("layout-mob-3")[0];
const LayoutMobile  = document.getElementsByClassName("mob-collage")[0] 

function DownloadForMobile(SStarget , index){
  MobileDownloadBtn[index].addEventListener("click" , () => {
  html2canvas(SStarget, { allowTaint: true }).then(function (canvas) {
        
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
});
  })

}

DownloadForMobile(MobileLayout1 , 0)
DownloadForMobile(MobileLayout2 , 1)
DownloadForMobile(MobileLayout3 , 2)


