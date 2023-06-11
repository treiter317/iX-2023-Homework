import React, { useState, useEffect } from 'react';

import { Book } from '../../models/book';
import Button from '../custom/Button';

export default function Form(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onBookFormSubmit(e) {
    e.preventDefault();

    if (title === '' && author === '' && isbn === '') {
      return;
    }

    setLoading(true);
    let book = new Book(title, author, isbn, null);
    props.onBookCreated(book);
    
    setTitle('');
    setAuthor('');
    setIsbn('');
    setLoading(false);
  }

  return (
    <div>
      <h1>Library Books</h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <Button type="submit" format='outline-primary' loading={loading}>
            {props.bookToEdit ? 'Update Book' : 'Add Book'}
          </Button>
        </div>
      </form>
    </div>
  );
}