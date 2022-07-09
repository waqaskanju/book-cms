import AddBook from '../components/AddBook';

export default function Books() {
  return (

    <div className="container">
      <div>
        <ul className="books">
          <li>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h4 className="book-category">Action</h4>
                  <h2 className="book-title">The Hunger Games</h2>
                  <h6 className="book-author">Suzanne Collins</h6>
                  <div className="action-buttons">
                    <button className="button-outline" type="button">
                      Comments
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress-stat">
                    <p className="percent-complete">64%</p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">Chapter 17</p>
                    </div>
                    <div>
                      <button className="primary-button" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h4 className="book-category">Science Fiction</h4>
                  <h2 className="book-title">Dune</h2>
                  <h6 className="book-author">Frank Herbert</h6>
                  <div className="action-buttons">
                    <button className="button-outline" type="button">
                      Comments
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress-stat">
                    <p className="percent-complete">8%</p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">
                        Chapter 3: A Lesson Learned
                      </p>
                    </div>
                    <div>
                      <button className="primary-button" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h4 className="book-category">Economy</h4>
                  <h2 className="book-title">
                    Capital in the Twenty-First Century
                  </h2>
                  <h6 className="book-author">Suzanne Collins</h6>
                  <div className="action-buttons">
                    <button className="button-outline" type="button">
                      Comments
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">Edit</button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress-stat">
                    <p className="percent-complete">0%</p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">Introduction</p>
                    </div>
                    <div>
                      <button className="primary-button" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="horizontal-divider" />
      </div>
      <AddBook />
    </div>
  );
}
