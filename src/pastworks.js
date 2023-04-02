import { initializeApp } from "firebase/app";
import { saveAs} from '../dist/FileSaver'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  getFirestore,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString  ,listAll , getDownloadURL , getMetadata} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBK6Yo411SeIbXHY3I4k1g_RLkYy_Tv-lI",
    authDomain: "collageum-94eb2.firebaseapp.com",
    projectId: "collageum-94eb2",
    storageBucket: "collageum-94eb2.appspot.com",
    messagingSenderId: "187057826020",
    appId: "1:187057826020:web:ab6c86a322ae2bd4e9a4f1",
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const photoGrid = document.getElementsByClassName("photo-grid")[0];
  const profileDrop = document.getElementsByClassName("profile-drop")[0];
  const navSignin = document.getElementsByClassName("nav-signin")[0];

  //Materiliaze initialize
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });
  
onAuthStateChanged(auth , (user) => {
    if(user){
      //pprofile Image change
      const NavbarDp = document.getElementsByClassName("dp-nav")[0];
      getDownloadURL(ref(storage , `CollageumDp/${user.uid}`)).then((url) => {
        if(NavbarDp.src == "http://127.0.0.1:5501/img/def-dp.png"){
            NavbarDp.src = url;
          }else{
          console.log(" ");
      }
      });

      const photoGrid = document.getElementsByClassName("photo-grid")[0];
      const Refstore = ref(storage , `Collageum/${user.uid}`);
      listAll(Refstore).then((res) => {
        let t = 0;
        console.log(res)
        console.log(res.items)
        res.items.forEach((itemsRef) => {
          getDownloadURL(itemsRef).then((url) => {
            photoGrid.innerHTML += 
            `
            <div class="img-cont-0" style="display: flex; justify-content:center; align-items:center; flex-direction:column;">
            <img src="${url}" height="200px" width="200px"  id="img-${t}">
            <div class="img-data">
            <div class="btn center"  style=" background-color: #ef61b5;"><i class="material-icons" id="download-${t}" >file_download</i></div>
            </div>
            </div>
            `
            t++;
            localStorage["t"] = t;
          })
        })
      })

      function Js(){
        const y = localStorage["t"];
        for(let i = 0 ; i < y ; ++i){
          document.getElementById(`download-${i}`).addEventListener("click" , () => {
            // const canvas = document.createElement("canvas")
            // const a = document.createElement("a");
            // const ctx = canvas.getContext("2d");
            
          
            // ctx.drawImage(document.getElementById(`img-${i}`) , 0,0,"500px" , "500px")
            // a.href = canvas.toDataURL("Image/jpeg");
            // a.download = new Date().getTime;
            // a.click();


            html2canvas( document.getElementById(`img-${i}`), { allowTaint: true }).then(function (canvas) {
        
              var link = document.createElement("a");
              document.body.appendChild(link);
              link.download = "html_image.jpg";
              link.href = canvas.toDataURL();
              link.target = '_blank';
              link.click();
          });
            
          })
        }
      }

    setTimeout(Js , 3000)
    //Hiding and showing of sign in and profile buttons
    profileDrop.style.display = "inline-block";
    // navSignin.style.display = "none";
    }
    else {
      profileDrop.style.display = "none";
      // navSignin.style.display = "inline-block";
    }
})