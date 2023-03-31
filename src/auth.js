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
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString , getDownloadURL } from "firebase/storage";

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
let userId = ""; //This will store the current users ID


//Authentication
//Buttons and Red para
const LeftSignUpBtn = document.getElementsByClassName("left-signup-btn")[0];
const dontmatch = document.getElementsByClassName("dontmatch")[0];
const formSignup = document.getElementById("form-signup");
const formSignin = document.getElementById("form-signin");
const SigninBtn = document.getElementsByClassName("LogIn-btn-modal")[0];
formSignup.reset();
formSignin.reset();

//SignUp
LeftSignUpBtn.addEventListener("click", () => {
  const emailSignup = document.getElementById("signup-email").value;
  const passSignup = document.getElementById("signup-password").value;
  const confirmpassSignup = document.getElementById("signup-password-2").value;
  dontmatch.style.opacity = 0;
  
  if (confirmpassSignup === passSignup) {
    createUserWithEmailAndPassword(auth, emailSignup, passSignup)
    .then((cred) => {
        //Storage Reference Call







        //To create the default username from email
        function username(name) {
          let index = name.indexOf("@");
          return name.slice(0, index);
        }






        //Storing the default username in firestore
        const uid = cred.user.uid;
        const docRef = setDoc(doc(db, "users", uid), {
          email: emailSignup,
          userN: username(emailSignup),
          rank: "Beginer",
          uId: cred.user.uid,
          pass: passSignup,
          n0 : 0
        });

        formSignup.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  } else {
    dontmatch.style.animation = `fadein 2s both`;
    dontmatch.style.animation = `fadeout 1s both`;
    formSignup.reset();
  }
});

//SignIn
const profileDrop = document.getElementsByClassName("profile-drop")[0];
const navSignin = document.getElementsByClassName("nav-signin")[0];
const incorrect = document.getElementsByClassName("incorrect")[0];

SigninBtn.addEventListener("click", () => {
  const passSignin = document.getElementById("signin-password").value;
  const emailSignin = document.getElementById("signin-email").value;
  signInWithEmailAndPassword(auth, emailSignin, passSignin)
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    if (errorMessage == "Firebase: Error (auth/wrong-password).") {
      incorrect.innerHTML = "Incorrect Password";
      incorrect.style.animation = `fadein 2s both`;
      incorrect.style.animation = `fadeout 2s both`;
      incorrect.innerHTML = "";
      
      formSignin.reset();
    } else if (
      errorMessage ==
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
      ) {
        incorrect.innerHTML = "Too many failed attempts , try again later !!!";
        incorrect.style.animation = `fadein 2s both`;
        incorrect.style.animation = `fadeout 2s both`;
        incorrect.innerHTML = "";
        formSignin.reset();
      } else if (errorMessage == "Firebase: Error (auth/user-not-found).") {
        incorrect.innerHTML = "Username Not Found !!";
        incorrect.style.animation = `fadein 2s both`;
        incorrect.style.animation = `fadeout 2s both`;
        incorrect.innerHTML = "";
        formSignin.reset();
      } else if (errorMessage == "Firebase: Error (auth/invalid-email).") {
      incorrect.innerHTML = "Invalid Username !!";
      incorrect.style.animation = `fadein 2s both`;
      incorrect.style.animation = `fadeout 2s both`;
      incorrect.innerHTML = "";
      formSignin.reset();
    }
  });
});



const HomepageSignIn = document.getElementsByClassName("signin-home-page")[0]
const HomepageSignOut = document.getElementsByClassName("signout-home-page")[0]
const HomepageProfile = document.getElementsByClassName("profile-homepage")[0];
const HomepageNavbarSignout = document.getElementsByClassName("signout-home")[0];

//Detect User Sign in
onAuthStateChanged(auth, (user) => {
  if (user) {
    //SignIn Btn and lgout btn
    HomepageSignIn.style.display = "none"
    HomepageSignOut.style.display = "inline"
    HomepageProfile.style.display = "inline"
    HomepageNavbarSignout.style.display = "block"
    HomepageNavbarSignout.style.marginTop = "13%"
    //pprofile Image change
    const NavbarDp = document.getElementsByClassName("dp-nav")[0];
    getDownloadURL(ref(storage , `CollageumDp/${user.uid}`)).then((url) => {
      if(NavbarDp.src == "http://127.0.0.1:5501/img/def-dp.png"){
        NavbarDp.src = url;
      }else{
        console.log("");
      }
    })
    
    const chipCont = document.getElementsByClassName("chip-cont")[0];
    const authRefName = doc(db , "users" , user.uid);
    getDoc(authRefName).then((snapshot) => {
      console.log("Doc Taken");
      getDownloadURL(ref(storage , `CollageumDp/${user.uid}`)).then((url) => {
        console.log("Url taken");
        let obj = snapshot.data();
        let html = `
        <div class="chip black green-text right" style="width: 15%;">
        <img src="${url}" id="signin-img">${obj["userN"]}
        </div>
        `
        chipCont.innerHTML = html;
        //SignIn Animations
        const ProfileChip = document.getElementsByClassName("chip")[0];
        ProfileChip.style.animation = `signIn-Transition 4s both`;
      })
      
    })
    
    
      
    
    //Hiding and showing of sign in and profile buttons
    profileDrop.style.display = "inline-block";
    navSignin.style.display = "none";
    
    
    
    
    
    //Closing of Authentication modal once user is logged in
    AuthModalClose();
    
  } 
  else {
    profileDrop.style.display = "none";
    navSignin.style.display = "inline-block";
    HomepageSignIn.style.display = "inline"
    HomepageSignOut.style.display = "none"
    HomepageProfile.style.display = "none"
    HomepageNavbarSignout.style.display = "none"

  }
});
//Logout
HomepageSignOut.addEventListener("click" , () => {
  signOut(auth).then(() => {
    console.log("signed Out successfully !!!!!");
  })
})

HomepageNavbarSignout.addEventListener("click" , () => {
  signOut(auth).then(() => {
    console.log("signed Out successfully !!!!!");
  })
  
})

















//EXPERIMENTS AHEAD !!!!!!!
// const Refstore = ref(storage , `Collageum/completeCollages`) 
// const downloadBtn = document.getElementsByClassName("download")[0];
// const collageCont = document.getElementsByClassName("collage")[0];
// downloadBtn.addEventListener("click" , () => {
//   console.log("Ayush");
//   // html2canvas(collageCont , { allowTaint: true}).then(function(canvas) {
//   //   const urlToStr = canvas.toDataURL();
//   //   uploadString(Refstore , urlToStr , 'data_url').then(() => {
//   //     console.log("Done !!!");
//   //   })

//   // })
// })
// const RefStor = ref(storage , `Collageum/dp`);
// const SubmitLayout1 = document.getElementById("submit-1");
// SubmitLayout1.addEventListener("click" , () => {
//   console.log("clicked");
//   const layout = document.getElementsByClassName("collage")[0];
//   html2canvas(layout, { allowTaint: true }).then(function (canvas) {
//     uploadBytes(RefStor , canvas).then(()=> {
//       console.log("Uploadeed iimage");
//     })
//   })
// })
// console.log(auth.currentUser.uid);

//STORING AND FETCHING DATA IN FIRESTORE WITH USER.UID
// const Ref = collection(db , 'ayush');
// getDocs(Ref)
// .then((snapshot) => {
//   let books = [];
//   snapshot.forEach((doc) => {
//     books.push({ ...doc.data()})
//   })
//   console.log(books[0]);
// })



// =========================================================================================

// const Ref = doc(db, "ayush", "iot");
// getDoc(Ref) //getDoc is used and not getDocs because there is only one specified documnet for this case
//   .then((snapshot) => {
//     console.log(snapshot.data());
//   });

// // STORAGE
// const input = document.getElementById("inputfile");
// const imagesRef = ref(storage, `users/user1/dp`);

// input.addEventListener("change", () => {
//   uploadBytes(imagesRef, input.files[0]).then(() => {
//     console.log("Uploaded a blob or file!");
//   });
// });

// const reader = new FileReader();
// console.log(input.files[0]);
// reader.readAsDataURL(input.files[0]);
// reader.addEventListener("load", () => {
//   const img = document.getElementsByClassName("imge")[0];
//   img.src = reader.result;
//   uploadBytes(StrRef, reader.result).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
//   });
// });



// const hello = document.getElementsByClassName("hello")[0];

// hello.addEventListener("click" , ()=>{
//   const link = "../img/def-dp.png";
//   const reader = new FileReader();
//   reader.addEventListener("load" , () => {
//     console.log(reader.result);
//   })
//   reader.readAsDataURL(link)
// })