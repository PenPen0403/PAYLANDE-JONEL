import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc} from "firebase/firestore"
import { User, iUser } from './home/home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  newUserList: iUser[] = [];
  users: User = new User();
  
  constructor() { }

  async getUsers(): Promise<iUser[]>{
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    const users: User[] = [];


      const querySnapshot = await getDocs(collection(firestore, "users"));
      querySnapshot.forEach((doc) => {
        const user = doc.data() as User;
        user.id = doc.id;
        users.push(user); 
      });
    return users;
  }

  async tryAdd(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try{
      const docRefM1 = await addDoc(collection(firestore, "users"),{
        manhwaName: user.manhwaName,
        author: user.author,
        chapter: user.chapter,
        releaseDate: user.releaseDate,
        status: user.status,
        adultcontent: user.adultContent,
      });
      console.log("Document written with ID: ", docRefM1.id)
    } catch (e){
      console.error("Error adding document: ", e);
    }
  }

  async tryUpdate(user: User) {
    try {
      const app = initializeApp(environment.firebaseConfig);
      const firestore = getFirestore(app);
      
      const updatedData = {
        manhwaName: user.manhwaName,
        author: user.author,
        chapter: user.chapter,
        releaseDate: user.releaseDate,
        adultContent: user.adultContent,
        status: user.status
      };
  
      const docRef = doc(firestore, "users", user.id);
  
      await updateDoc(docRef, updatedData);
      
      console.log("Document updated successfully");
    } catch (e) {
      console.error("Error updating Document: ", e);
    }
  }

  async tryDelete(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
  
    try {
      const docRef = doc(firestore, "users", user.id);
      await deleteDoc(docRef);
      console.log("Document deleted successfully");
    } catch (e){
      console.error("Error deleting Document: ", e);
    }
  }

  edit(user: iUser) {
    this.users = user;
  }

}
