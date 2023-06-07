import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
  } from 'firebase/firestore';
  
    import { db } from '../firebase/firebase';
    import { Book } from '../models/book';
  
  class TaskService {
    constructor() {
      this.collection = 'books';
    }
  
    async fetchBooks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
  
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const book = new Book(data.title, data.author, data.isbn, doc.id);
  
        books.push(book);
      });
  
      return books;
    }
  
    async createBook(book) {
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn
      });
  
      book.id = docRef.id;
      return book;
    }
  
    // async editBook(book) {
    //   const docRef = doc(db, this.collection, book.id);
  
    //   await updateDoc(docRef, {
    //     title: book.title,
    //     author: book.author,
    //     isbn: book.isbn
    //   });
  
    //   return book;
    // }
  
    async deleteBook(bookId) {
      const docRef = doc(db, this.collection, bookId);
  
      await deleteDoc(docRef);
    }
  }
  
  const service = new TaskService();
  export default service;
  