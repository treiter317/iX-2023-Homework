import React from "react";

import { useEffect, useState } from "react";

import Form from "../components/main/Form";
import Table from "../components/main/Table";

import TaskService from "../services/task-service";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);
  const [delLoading, setDelLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

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
    setDelLoading(true);
    await TaskService.deleteBook(book.id);

    setBooks(books.filter((x) => x.isbn !== book.isbn));
    setDelLoading(false);
  }

  async function onEdit(book) {
    setEditLoading(true);
    setBookToEdit(book);

    await TaskService.deleteBook(book.id);

    setBooks(books.filter((x) => x.isbn !== book.isbn));
    setEditLoading(false);
  }

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <Form
          bookToEdit={bookToEdit}
          onBookCreated={onBookCreated}
          loading={editLoading}
        ></Form>
        <Table
          books={books}
          onEdit={onEdit}
          onDelete={onDelete}
          delLoading={delLoading}
          editLoading={editLoading}
        ></Table>
      </div>
    </div>
  );
}
