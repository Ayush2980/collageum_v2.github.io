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
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
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

onAuthStateChanged(auth , (user) => {
    if(user){
        const Ref = doc(db, "users", user.uid);
        getDoc(Ref).then((snapshot) => {

            const obj = snapshot.data();
            const uploadBtn = document.getElementsByClassName("download")[0];
            const collageCont = document.getElementsByClassName("collage")[0];
            //Mobile
            const uploadBtnMob = document.getElementsByClassName("upload-mob");
            function uploader(index , container ){
              uploadBtnMob[index].addEventListener("click" , () => {
                obj["n0"] += 1;
                const docRef = updateDoc(Ref, {
                    n0 : obj["n0"],
                }).then(() => {
                    console.log("n0 updated");
                })
                const Refstore = ref(storage, `Collageum/${user.uid}/completeCollages${obj["n0"]}`)
                html2canvas(container , { allowTaint:  true}).then(function(canvas) {
                  const urlToStr = canvas.toDataURL();
                  uploadString(Refstore , urlToStr, 'data_url').then(() => {
                    console.log("Done !!!");
                    console.log(obj["n0"]);
                  })
                })
                
              })

            }

            uploadBtn.addEventListener("click" , () => {
              obj["n0"] += 1;
                const docRef = updateDoc(Ref, {
                    n0 : obj["n0"],
                }).then(() => {
                    console.log("n0 updated");
                })
              console.log(user);
              const Refstore = ref(storage, `Collageum/${user.uid}/completeCollages${obj["n0"]}`)
              html2canvas(collageCont , { allowTaint: true}).then(function(canvas) {
                const urlToStr = canvas.toDataURL();
                uploadString(Refstore , urlToStr , 'data_url').then(() => {
                  console.log("Done !!!");
                  console.log(obj["n0"]);
                })
                
            })

            })
            uploader(0 ,MobileLayout1)
            uploader(1 , MobileLayout2)
            uploader(2 , MobileLayout3)
        })

    }
    else{
        console.log("No one logged In");
    }
})
