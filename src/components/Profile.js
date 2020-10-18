import React, { useState } from 'react';

const Profile = ({ items, getSearch }) => {
  const [text, setText] = useState('');

  return (
    <div className="main-container">
      <div className="search">
        <form>
          <input
            type="text"
            value={text}
            autoFocus
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              getSearch(text);
            }}
          >
            search
          </button>
        </form>
      </div>
      <div className="inner-container">
        <div className="dp">
          <img src={items.avatar_url} alt="" />
        </div>
        <div className="upper">
          <h1>{items.name}</h1>
          <br />
          <p>{items.bio}</p>
          <br />
          <button>
            {' '}
            <a
              target="_blank"
              className="view"
              href={`https://www.github.com/${items.login}`}
            >
              view
            </a>{' '}
          </button>
        </div>

        <div className="links">
          <a href={items.blog}>linkedin</a> <br />
          <a href={`https://www.twitter.com/${items.twitter_username}`}>
            twitter-{items.twitter_username}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profile;
