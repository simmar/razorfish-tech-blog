/* eslint-disable @typescript-eslint/camelcase */

export function PostMiniV1({ post }) {
  const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
  };

  return (
    <div className="card__post">
      <div className="card__post__body card__post__transition">
        <a href="./card-article-detail-v1.html">
          <img src={post.fields.media.fields.file.url} className="img-fluid" alt="" />
        </a>
        <div className="card__post__content bg__post-cover">
          <div className="card__post__category">{post.fields.category.fields.title}</div>
          <div className="card__post__title">
            <h5>
              <a href="./card-article-detail-v1.html">{post.fields.titre}</a>
            </h5>
          </div>
          <div className="card__post__author-info">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="./card-article-detail-v1.html">{post.fields.author}</a>
              </li>
              <li className="list-inline-item">
                <span>{displayDate(post.fields.date)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
