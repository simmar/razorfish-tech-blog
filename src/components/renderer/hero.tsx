/* eslint-disable @typescript-eslint/camelcase */
import { isRichText, renderRichText } from 'lib/rich-text';
import { TypeComponent_hero } from 'lib/types';

export const Hero = ({ fields }: TypeComponent_hero) => {
  const { title, text, ctaText, ctaLink, image } = fields;
  const textComp = isRichText(text) ? renderRichText(text) : text;
  const linkProps = ctaLink ? { page: ctaLink } : { href: '#' };

  return (
    <section>
      {/* Popular news  header*/}
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 ">
              <div className="card__post-carousel">
                <div className="item">
                  {/* Post Article */}
                  <div className="card__post">
                    <div className="card__post__body">
                      <a href="./card-article-detail-v1.html">
                        <img src="images/placeholder/800x600.jpg" className="img-fluid" alt="" />
                      </a>
                      <div className="card__post__content bg__post-cover">
                        <div className="card__post__category">covid-19</div>
                        <div className="card__post__title">
                          <h2>
                            <a href="#">
                              Global solidarity to fight COVID-19, and indonesia stay safe and
                              health
                            </a>
                          </h2>
                        </div>
                        <div className="card__post__author-info">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="#">by david hall</a>
                            </li>
                            <li className="list-inline-item">
                              <span>Descember 09, 2016</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="popular__news-right">
                {/* Post Article */}
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
                {/* Post Article */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
