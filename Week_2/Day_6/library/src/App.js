import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form';
import Table from './components/Table';

function App() {
  // Declare a new State variable
  // React hook used managing component state
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  function onBookCreated(book) {
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  function onDelete(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  function onEdit(book) {
    setBookToEdit(book);
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
