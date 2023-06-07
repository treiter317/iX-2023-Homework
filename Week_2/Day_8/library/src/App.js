import './App.css';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import Table from './components/Table';

import TaskService from './services/task-service';


function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(
    () => {
      if (!books.length) {
        onInitialLoad();
      }
    }, [] );

  async function onInitialLoad() {
    try {
      const books = await TaskService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }


  async function onBookCreated(book) {
    setBookToEdit(null);
    const newBook = await TaskService.createBook(book);
    setBooks([...books, newBook]);
  }

  async function onDelete(book) {
    await TaskService.deleteBook(book.id);

    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  async function onEdit(book) {
    setBookToEdit(book);
    
    await TaskService.deleteBook(book.id);

    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <Form
          bookToEdit={bookToEdit}
          onBookCreated={onBookCreated}
        ></Form>
        <Table
          books={books}
          onEdit={onEdit}
          onDelete={onDelete}
        ></Table>
      </div>
    </div>
  );
}

export default App;
