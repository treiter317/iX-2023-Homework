import React from 'react';

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
                  <button
                    className="btn btn-danger bn-sm me-1"
                    onClick={() => props.onDelete(book)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning bn-sm ms-1"
                    onClick={() => props.onEdit(book)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
