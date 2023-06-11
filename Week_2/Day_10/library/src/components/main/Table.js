import React from 'react';
import Button from '../custom/Button';

export default function Table(props) {

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.books.map((book) => {
            return (
              <tr key={book.isbn}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <Button
                    className="btn-sm me-1"
                    onClick={() => props.onDelete(book)}
                    loading={props.delLoading}
                    format='danger'
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn-sm ms-1"
                    onClick={() => props.onEdit(book)}
                    loading={props.editLoading}
                    format='warning'
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
