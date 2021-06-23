import React from "react";
import { titleLimiter } from "../../utils/titleLimiter";
// import DeleteButton from "../DeleteButton/deleteButton";
import SaveButton from "../SaveButton/saveButton";
import "./BookCard.css";

const BookCard = (props) => {
  console.log(props);
  const { onSave } = props;
  const { id } = props.book;
  const { title, description, infoLink, authors } = props.book.volumeInfo;
  let thumbnail;
  if (props.book.volumeInfo.imageLinks) {
    ({ thumbnail } = props.book.volumeInfo.imageLinks);
  }
  const bookData = { title, description, infoLink, authors, thumbnail };
  console.log(bookData);

  return (
    <div className="card w-90 mb-5">
      <div className="row">
        <div className="col">
          <img
            className="img-thumbnail img-fluid"
            src={
              thumbnail ||
              "https://img.icons8.com/pastel-glyph/64/000000/image--v1.png"
            }
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{titleLimiter(title)}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <h6 className="list-group-item">Author(s):</h6>
            {authors.map((author) => (
              <li className="list-group-item list-group-item-secondary">
                {author}
              </li>
            ))}
            <li id="list-link" className="list-group-item">
              <a href={infoLink}>
                <button id="card-link">Google Books Link</button>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-8">
          <SaveButton bookData={bookData} onSave={onSave} />
          <div className="row">
            <p id="desc-title">------------------------------------</p>
          </div>
          <div className="row" id="desc">
            <p id="description">{description || "<No description found>"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
