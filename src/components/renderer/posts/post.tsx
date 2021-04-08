/* eslint-disable @typescript-eslint/camelcase */
import { TypeComponent_text } from 'lib/types';
import React from 'react';

export function Post({ fields }: TypeComponent_text) {
  // const { title, text } = fields;
  //console.log('fields POst', fields);

  return (
    <>
      {/* POST */}
      {/* {title ? <BlockTitle title={title} /> : null} */}
      {/* {renderRichText(text as any)} */}
      <div className="card__post ">
        <div className="card__post__body card__post__transition">
          <a href="./card-article-detail-v1.html">
            <img src="images/placeholder/600x400.jpg" className="img-fluid" alt="" />
          </a>
          <div className="card__post__content bg__post-cover">
            <div className="card__post__category">politics</div>
            <div className="card__post__title">
              <h5>
                <a href="./card-article-detail-v1.html">
                  Barack Obama and Family Visit borobudur temple enjoy holiday indonesia.
                </a>
              </h5>
            </div>
            <div className="card__post__author-info">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="./card-article-detail-v1.html">by david hall</a>
                </li>
                <li className="list-inline-item">
                  <span>Descember 09, 2016</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
