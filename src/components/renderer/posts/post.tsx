/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';

export function Post({ posts }) {
  const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
  };

  return (
    <div className="card__post">
      {posts.map((item, index) => (
        <div className="card__post__body card__post__transition" key={index}>
          <a href="./card-article-detail-v1.html">
            <img src={item.fields.media.fields.file.url} className="img-fluid" alt="" />
          </a>
          <div className="card__post__content bg__post-cover">
            <div className="card__post__category">{item.fields.category.fields.title}</div>
            <div className="card__post__title">
              <h5>
                <a href="./card-article-detail-v1.html">
                  {/* {item.fields.text.content.content.value} */}
                  {item.fields.titre}
                </a>
              </h5>
            </div>
            <div className="card__post__author-info">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="./card-article-detail-v1.html">{item.fields.author}</a>
                </li>
                <li className="list-inline-item">
                  <span>{displayDate(item.fields.date)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
