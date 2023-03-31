import { initializeApp } from "firebase/app";
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
import {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  listAll,
  getDownloadURL,
} from "firebase/storage";
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

const carouselItem = document.getElementsByClassName("caru");
const NavSignIN = document.getElementsByClassName("nav-signin")[0];
const NavProfile = document.getElementsByClassName("profile-drop")[0];
const NavSignOut = document.getElementsByClassName("signout-profile")[0];

onAuthStateChanged(auth, (user) => {
  if (user) {
    NavSignIN.style.display = "none"
    NavProfile.style.display = "inline"
    NavSignOut.style.display = "block"
    NavSignOut.style.marginTop = "13%"


    //Changiing Profile
    const NavbarDpProfile = document.getElementsByClassName("dp-nav-prof")[0];
    const profileTabImg = document.getElementsByClassName("profile-tab-img")[0];
    getDownloadURL(ref(storage , `CollageumDp/${user.uid}`)).then((url) => {
        if(NavbarDpProfile.src == "http://127.0.0.1:5501/img/def-dp.png"){
            NavbarDpProfile.src = url;
        }else{
            console.log(" ");
        }
        if(profileTabImg.src == "http://127.0.0.1:5501/img/def-dp.png"){
            profileTabImg.src = url;
        }else{
            console.log(" ");
        }
    })



    //Fetching data for Carousel
    console.log("Yess!");
    const Refstore = ref(storage, `Collageum/${user.uid}`);
    listAll(Refstore).then((res) => {
      let index = 0;
      res.items.forEach((itemRef) => {
        console.log(itemRef);
        getDownloadURL(itemRef).then((url) => {
          carouselItem[index].src = url;
          index += 1;
        });
      });
    });
    //Fetching data from database and Writing of that data in profile
    function writeProfileData() {
      const entry = document.getElementsByClassName("profile-data")[0];
      const Ref = doc(db, "users", user.uid);
      getDoc(Ref).then((snapshot) => {
        let obj = snapshot.data();
        let html = `
      <p class="one">General Information</p>
        <div>
        <p class="two">
        <ul>
        <li style="padding: 20px 0px;">Name : <span>${obj["userN"]}</span></li>
        <li style="padding: 20px 0px;">Email : <span>${obj["email"]}</span></li>
        <li style="padding: 20px 0px;">Rank : <span>${obj["rank"]}</span></li>
        <li><a href="#data-change" class = "btn modal-trigger" style="background-color: #ef61b5;">Edit Info</a></li>
        </ul>
        </p>
        </div>
        `;
        entry.innerHTML = html;
      });
    }

    writeProfileData();



      //Fetching data from firestore and using it.
    const uid  = user.uid;
    const dataRef = doc(db, "users", uid);
    getDoc(dataRef).then((snapshot) => {
    console.log("fetched");
    let receObj = snapshot.data();
    





    //Profile change animation
    const safety = document.getElementsByClassName("safety")[0];
    const editArea = document.getElementsByClassName("edit-area")[0];
    const continueBtn = document.getElementsByClassName("continue-safety")[0];
    const safetyEmail = document.getElementById("safety-email");
    const safetyPass = document.getElementById("safety-password");
    const incorrectMsg =document.getElementsByClassName("safety-incorrect")[0];
    const changedUsername = document.getElementById("changed-username");
    const browseNewDp = document.getElementsByClassName("submit-new-dp")[0];
    const submitBtn = document.getElementsByClassName("data-submit")[0];
    const browseBtnDpNew = document.getElementById("changed-dp");



    

    continueBtn.addEventListener("click", () => {
      console.log("Click");
      if (
        safetyPass.value === receObj["pass"] &&
        safetyEmail.value === receObj["email"]
      ) {
        safety.style.animation = `move-left 1s both`;
        editArea.style.animation = `move-right 1s both`;
        console.log("Right");
      } else {
        incorrectMsg.innerHTML = "Wrong Credentials !!!";
        incorrectMsg.style.animation = `fadein 1s both`;
        incorrectMsg.style.animation = `fadeout 1s both`;
        console.log("wrong");
      }
      //Submitting the form 
      browseBtnDpNew.addEventListener("change" , () => {
        console.log(browseBtnDpNew.files[0]);
        const file = browseBtnDpNew.files[0];
        const reader = new FileReader();
        let url = "";

        reader.addEventListener("load" , () => {
          console.log(reader.result);
          const Dpref = ref(storage , `CollageumDp/${uid}`)
          uploadString(Dpref , reader.result , 'data_url').then(() => {
            console.log("Dp Uploaded");
          })
        })

        reader.readAsDataURL(file);
      })
      browseNewDp.addEventListener("click" , () => {
        browseBtnDpNew.click()
      })


      var elem2 = document.querySelectorAll('.modal');
      document.addEventListener("DOMContentLoaded" , () => {
      var instances = M.Modal.init(elem2  , {})
})

      submitBtn.addEventListener("click" , () => {
        updateDoc(dataRef , {
          userN : changedUsername.value,
        })
        elem2[1].M_Modal.close();
      })

    });


//Logout settings
const ProfilepageLogout = document.getElementsByClassName("logout-profile-page")[0];
ProfilepageLogout.addEventListener("click" ,  () => {
  signOut(auth).then(() => {
    window.location.href = '../dist/homepage.html'
  })
})
NavSignOut.addEventListener("click" , () => {
  signOut(auth).then(() => {
    window.location.href = '../dist/homepage.html'
  })
  
})
  });
  }
  else{
    NavSignIN.style.display = "inline"
    NavProfile.style.display = "none"
    NavSignOut.style.display = "none"

  }
});
