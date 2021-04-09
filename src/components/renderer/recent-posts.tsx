import React, { useState, useEffect } from 'react'
import { getPosts } from 'lib/api';
// import { withLocale } from 'lib/translations';

type RecentPostsProps = {
    posts: any
};

export function RecentPosts({fields}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const _posts = await getPosts()
            if (_posts.length > 6)
                _posts.length = 6
            setPosts(_posts)
        }
        fetch()
    }, [])

    const displayDate = (date) => {
        const _date = new Date(date);

        return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
      };

    return (
        <div className="col-md-12 col-lg-8">
            <div className="wrapper__list__article">
                <h4 className="border_section">{fields.title}</h4>
            </div>
            <div className="row ">
                {posts.map((post, index) =>
                    index < 2 &&
                    <div className="col-sm-12 col-md-6 mb-4" key={index}>
                        <div className="card__post ">
                            <div className="card__post__body card__post__transition">
                                <a href="./card-article-detail-v1.html">
                                    <img src={post.fields.media.fields.file.url} className="img-fluid" alt="" />
                                </a>
                                <div className="card__post__content bg__post-cover">
                                    <div className="card__post__category">
                                        {post.fields.category.fields.title}
                                    </div>
                                    <div className="card__post__title">
                                        <h5>
                                            <a href="./card-article-detail-v1.html">{post.fields.titre}</a>
                                        </h5>
                                    </div>
                                    <div className="card__post__author-info">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="./card-article-detail-v1.html">by {post.fields.author}</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <span>{displayDate(post.fields.date)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="row ">
                <div className="col-sm-12 col-md-6">
                    <div className="wrapp__list__article-responsive">
                        {posts.map((post, index) =>
                            index > 1 && index % 2 === 0 &&
                                <div className="mb-3" key={index}>
                                    <div className="card__post card__post-list">
                                        <div className="image-sm">
                                            <a href="./card-article-detail-v1.html">
                                                <img src={post.fields.media.fields.file.url} className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="card__post__body ">
                                            <div className="card__post__content">
                                                <div className="card__post__author-info mb-2">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="text-primary">by {post.fields.author}</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-dark text-capitalize">{displayDate(post.fields.date)}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card__post__title">
                                                    <h6>
                                                        <a href="./card-article-detail-v1.html">{post.fields.titre}</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 ">
                    <div className="wrapp__list__article-responsive">
                    {posts.map((post, index) =>
                            index > 1 && index % 2 === 1 &&
                                <div className="mb-3" key={index}>
                                    <div className="card__post card__post-list">
                                        <div className="image-sm">
                                            <a href="./card-article-detail-v1.html">
                                                <img src={post.fields.media.fields.file.url} className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="card__post__body ">
                                            <div className="card__post__content">
                                                <div className="card__post__author-info mb-2">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <span className="text-primary">by {post.fields.author}</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-dark text-capitalize">{displayDate(post.fields.date)}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card__post__title">
                                                    <h6>
                                                        <a href="./card-article-detail-v1.html">{post.fields.titre}</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
