import React from 'react';
type Item = {
  fields: any;
  content: any;
  text: any;
};
export function Post({ fields }) {
  console.log('fields post', fields);

  const content = fields.text.content;
  // console.log('content', content);

  // content.map((content) => {
  //   console.log('content', content);
  // })
  // console.log('contentttt', content);

  const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString();
  };

  // const SideMenu = ({ data }) => {
  //   console.log('data', data);
  //   if (!data) {
  //     return null;
  //   }
  //   return (
  //     <ul className="toto">
  //       {
  //         Array.isArray(data) ? data.map((item, index) => {
  //           // console.log('item', item);
  //           // if (item.nodeType === "blockquote") {

  //           //   console.log('item', item);

  //           //   {
  //           //     item.content.map((content) => {
  //           //       console.log('content', content);
  //           //     })
  //           //   }

  //           //   return (<li key={index}>
  //           //     tetx
  //           //     {item.content.value && <SideMenu data={item.content.value} />}
  //           //   </li>);
  //           // }
  //           {
  //             item.content.map((content) => {
  //               console.log('content', content.value);
  //             })
  //           }
  //         }) : null
  //       }
  //     </ul>
  //   );
  // }
  return (
    <div>
      {/* <SideMenu data={fields.text.content} /> */}
      {/* <ul className="navbar-nav ml-auto ">
        {content.map((item, index) => {
          console.log('item', item);
          <>
            {item.content.map((subContent, subIndex) => {
              console.log('subContent', subContent.value);
              <li key={index}>
                {!item.content ?
                  <li>
                    {subContent.value}
                  </li>
                  : <>
                    {subContent.content.map((subSubContent, subSubIndex) => {
                      console.log('subSubContent', subSubContent.value);
                      <li key={subSubIndex}>
                        {subSubContent.value}
                      </li>
                    })}
                  </>}
              </li>


              // <li>
              //   {subContent.content.map((subSubContent, subSubIndex) => {
              //     console.log('subSubContent', subSubContent.value);
              //     <li key={subSubIndex}>

              //     </li>
              //   })}
              // </li>
            })}
          </>
        }
        )}
      </ul> */}

      <div className="toto">
        {content.map((item, index) => (
          <>
            {item.content.map((subItem, subIndex) => (
              <>
                {subItem.content ? (
                  <p key={subItem}>
                    {/* {console.log('item content', item)}
                    {console.log('subitem content', subItem.content.value)} */}
                    {subItem.value}
                  </p>
                ) : (
                  <>
                    {/* {subItem.content.map((subSubItem, subSubIndex) =>
                      <p key={subSubIndex}>
                        {subSubItem.content.value}
                      </p>
                    )} */}
                  </>
                )}
              </>
            ))}
          </>
        ))}
      </div>
      <section className="pb-80">
        <div className="container">
          <div className="row">
            {/*<div class="col-md-12">
                    <!-- breaddcrumb */}
            {/* Breadcrumb
                    <ul class="breadcrumbs bg-light mb-4">
                       <li class="breadcrumbs__item">
                          <a href="index.html" class="breadcrumbs__url">
                          <i class="fa fa-home"></i> Home</a>
                       </li>
                       <li class="breadcrumbs__item">
                          <a href="index.html" class="breadcrumbs__url">News</a>
                       </li>
                       <li class="breadcrumbs__item breadcrumbs__item--current">
                          World
                       </li>
                    </ul>
                    <!-- end breadcrumb
                 </div> */}
            <div className="col-md-8">
              {/* content article detail */}

              <div className="wrap__article-detail-image">
                <figure>
                  <img
                    src={fields.media.fields.file.url}
                    alt={fields.media.fields.file.fileName}
                    className="img-fluid"
                  />
                </figure>
              </div>
              {/* Article Detail */}
              <div className="wrap__article-detail">
                <div className="wrap__article-detail-title">
                  <h1>{fields.titre}</h1>
                </div>
                <hr />
                <div className="wrap__article-detail-info">
                  <ul className="list-inline">
                    {' '}
                    <li className="list-inline-item">
                      <figure className="image-profile">
                        <img
                          src={fields.media.fields.file.url}
                          alt={fields.media.fields.file.fileName}
                        />
                      </figure>
                    </li>
                    <li className="list-inline-item">
                      <span>by</span>
                      <a href="#">{fields.author}</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark text-capitalize ml-1">
                        {displayDate(fields.date)}
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark text-capitalize">in</span>
                      <a href="#">{fields.category.fields.title}</a>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="wrap__article-detail-image mt-4">
                  <figure>
                    <img src="images/placeholder/800x500.jpg" alt="" className="img-fluid" />
                  </figure>
                </div>
                <div className="wrap__article-detail-content">
                  {fields.text.content.map((item) => {
                    return (
                      <>
                        {item.content.map((content, index) => {
                          return (
                            <p className="has-drop-cap-fluid" key={index}>
                              {content.value}
                            </p>
                          );
                        })}
                      </>
                    );
                  })}

                  {/* Blockquote  */}
                  <blockquote className="block-quote">
                    {/* {fields.text.content.map((item) => {
                      // console.log('nodeType', item.nodeType);

                      return (
                        <>
                          {item.content.map((content) => {
                            console.log('content', content);
                            return (
                              <>
                                {content.content.map((blockquote, index) => {
                                  return (
                                    <p className="has-drop-cap-fluid" key={index}>
                                      {blockquote.value}
                                    </p>
                                  )
                                })}
                              </>
                            );
                          })}
                        </>
                      );
                    })} */}
                  </blockquote>

                  {/* Blockquote */}
                  {/* <h5>How Tech Startup Survive Without Funding</h5>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the necessary regelialia.
                  </p> */}
                </div>
              </div>
              {/* end content article detail */}
              {/* tags */}
              {/* News Tags */}
              <div className="blog-tags">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-tags"></i>
                  </li>
                  {fields.tags.map((tag, index) => {
                    return (
                      <li className="list-inline-item" key={index}>
                        <a href="#">{tag.fields.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* end tags*/}
              {/* authors*/}
              {/* Profile author */}
              <div className="wrap__profile">
                <div className="wrap__profile-author">
                  <figure>
                    <img
                      src="images/placeholder/80x80.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </figure>
                  <div className="wrap__profile-author-detail">
                    <div className="wrap__profile-author-detail-name">author</div>
                    <h4>jhon doe</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam
                      ad beatae itaque ea non placeat officia ipsum praesentium! Ullam?
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o facebook ">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o twitter ">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o instagram ">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o telegram ">
                          <i className="fa fa-telegram" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="btn btn-social btn-social-o linkedin ">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end author*/}
              {/* comment */}
              {/* Comment  */}
              <div id="comments" className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>
                <ol className="comment-list">
                  <li className="comment">
                    <aside className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <img src="images/placeholder/80x80.jpg" className="avatar" alt="image" />
                          <b className="fn">Sinmun</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <span>April 24, 2019 at 10:59 am</span>
                          </a>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </aside>
                    <ol className="children">
                      <li className="comment">
                        <aside className="comment-body">
                          <div className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="images/placeholder/80x80.jpg"
                                className="avatar"
                                alt="image"
                              />
                              <b className="fn">Sinmun</b>
                              <span className="says">says:</span>
                            </div>
                            <div className="comment-metadata">
                              <a href="#">
                                <span>April 24, 2019 at 10:59 am</span>
                              </a>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of type and scrambled it
                              to make a type specimen book.
                            </p>
                          </div>
                          <div className="reply">
                            <a href="#" className="comment-reply-link">
                              Reply
                            </a>
                          </div>
                        </aside>
                      </li>
                    </ol>
                  </li>
                  <li className="comment">
                    <aside className="comment-body">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <img src="images/placeholder/80x80.jpg" className="avatar" alt="image" />
                          <b className="fn">Sinmun</b>
                          <span className="says">says:</span>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <span>April 24, 2019 at 10:59 am</span>
                          </a>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>
                          Lorem Ipsum has been the industry’s standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          Reply
                        </a>
                      </div>
                    </aside>
                  </li>
                </ol>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>
                  <form className="comment-form">
                    <p className="comment-notes">
                      <span id="email-notes">Your email address will not be published.</span>
                      Required fields are marked
                      <span className="required">*</span>
                    </p>
                    <p className="comment-form-comment">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols={45}
                        rows={5}
                        maxLength={65525}
                        required="required"
                        defaultValue={''}
                      />
                    </p>
                    <p className="comment-form-author">
                      <label>
                        Name <span className="required">*</span>
                      </label>
                      <input type="text" id="author" name="name" required="required" />
                    </p>
                    <p className="comment-form-email">
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input type="email" id="email" name="email" required="required" />
                    </p>
                    <p className="comment-form-url">
                      <label htmlFor="url">Website</label>
                      <input type="url" id="url" name="url" />
                    </p>
                    <p className="comment-form-cookies-consent">
                      <input
                        type="checkbox"
                        defaultValue="yes"
                        name="wp-comment-cookies-consent"
                        id="wp-comment-cookies-consent"
                      />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the next span I
                        comment.
                      </label>
                    </p>
                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        defaultValue="Post Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
              {/* Comment */}
              {/* end comment */}
              <div className="row">
                <div className="col-md-6">
                  <div className="single_navigation-prev">
                    <a href="#">
                      <span>previous post</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, similique.
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_navigation-next text-left text-md-right">
                    <a href="#">
                      <span>next post</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
                      nesciunt.
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="related-article">
                <h4>you may also like</h4>
                <div className="article__entry-carousel-three">
                  <div className="item">
                    {/* Post Article */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* Post Article */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* Post Article */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* Post Article */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {/* Post Article */}
                    <div className="article__entry">
                      <div className="article__image">
                        <a href="#">
                          <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                        </a>
                      </div>
                      <div className="article__content">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <span className="text-primary">by david hall</span>
                          </li>
                          <li className="list-inline-item">
                            <span>descember 09, 2016</span>
                          </li>
                        </ul>
                        <h5>
                          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-4">
                    <div class="sticky-top">
                       <aside class="wrapper__list__article ">
                          <!-- <h4 class="border_section">Sidebar</h4>
                          <div class="mb-4">
                             <div class="widget__form-search-bar  ">
                                <div class="row no-gutters">
                                   <div class="col">
                                      <input class="form-control border-secondary border-right-0 rounded-0" value="" placeholder="Search">
                                   </div>
                                   <div class="col-auto">
                                      <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                                      <i class="fa fa-search"></i>
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="wrapper__list__article-small">
                             <div class="mb-3">
                                <div class="card__post card__post-list">
                                   <div class="image-sm">
                                      <a href="./card-article-detail-v1.html">
                                      <img src="images/placeholder/500x400.jpg" class="img-fluid" alt="">
                                      </a>
                                   </div>
                                   <div class="card__post__body ">
                                      <div class="card__post__content">
                                         <div class="card__post__author-info mb-2">
                                            <ul class="list-inline">
                                               <li class="list-inline-item">
                                                  <span class="text-primary">
                                                  by david hall
                                                  </span>
                                               </li>
                                               <li class="list-inline-item">
                                                  <span class="text-dark text-capitalize">
                                                  descember 09, 2016
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                         <div class="card__post__title">
                                            <h6>
                                               <a href="./card-article-detail-v1.html">
                                               6 Best Tips for Building a Good Shipping Boat
                                               </a>
                                            </h6>

                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div class="mb-3">
                                <div class="card__post card__post-list">
                                   <div class="image-sm">
                                      <a href="./card-article-detail-v1.html">
                                      <img src="images/placeholder/500x400.jpg" class="img-fluid" alt="">
                                      </a>
                                   </div>
                                   <div class="card__post__body ">
                                      <div class="card__post__content">
                                         <div class="card__post__author-info mb-2">
                                            <ul class="list-inline">
                                               <li class="list-inline-item">
                                                  <span class="text-primary">
                                                  by david hall
                                                  </span>
                                               </li>
                                               <li class="list-inline-item">
                                                  <span class="text-dark text-capitalize">
                                                  descember 09, 2016
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                         <div class="card__post__title">
                                            <h6>
                                               <a href="./card-article-detail-v1.html">
                                               6 Best Tips for Building a Good Shipping Boat
                                               </a>
                                            </h6>

                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div class="mb-3">
                                <div class="card__post card__post-list">
                                   <div class="image-sm">
                                      <a href="./card-article-detail-v1.html">
                                      <img src="images/placeholder/500x400.jpg" class="img-fluid" alt="">
                                      </a>
                                   </div>
                                   <div class="card__post__body ">
                                      <div class="card__post__content">
                                         <div class="card__post__author-info mb-2">
                                            <ul class="list-inline">
                                               <li class="list-inline-item">
                                                  <span class="text-primary">
                                                  by david hall
                                                  </span>
                                               </li>
                                               <li class="list-inline-item">
                                                  <span class="text-dark text-capitalize">
                                                  descember 09, 2016
                                                  </span>
                                               </li>
                                            </ul>
                                         </div>
                                         <div class="card__post__title">
                                            <h6>
                                               <a href="./card-article-detail-v1.html">
                                               6 Best Tips for Building a Good Shipping Boat
                                               </a>
                                            </h6>

                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div class="article__entry">
                                <div class="article__image">
                                   <a href="#">
                                   <img src="images/placeholder/500x400.jpg" alt="" class="img-fluid">
                                   </a>
                                </div>
                                <div class="article__content">
                                   <div class="article__category">
                                      travel
                                   </div>
                                   <ul class="list-inline">
                                      <li class="list-inline-item">
                                         <span class="text-primary">
                                         by david hall
                                         </span>
                                      </li>
                                      <li class="list-inline-item">
                                         <span class="text-dark text-capitalize">
                                         descember 09, 2016
                                         </span>
                                      </li>
                                   </ul>
                                   <h5>
                                      <a href="#">
                                      Proin eu nisl et arcu iaculis placerat sollicitudin ut est
                                      </a>
                                   </h5>
                                   <p>
                                      Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut
                                      est. In fringilla dui dui.
                                   </p>
                                   <a href="#" class="btn btn-outline-primary mb-4 text-capitalize"> read more</a>
                                </div>
                             </div>
                          </div>
                       </aside>
                       <aside class="wrapper__list__article">
                          <h4 class="border_section">stay conected</h4>
                          <div class="wrap__social__media">
                             <a href="#" target="_blank">
                                <div class="social__media__widget facebook">
                                   <span class="social__media__widget-icon">
                                   <i class="fa fa-facebook"></i>
                                   </span>
                                   <span class="social__media__widget-counter">
                                   19,243 fans
                                   </span>
                                   <span class="social__media__widget-name">
                                   like
                                   </span>
                                </div>
                             </a>
                             <a href="#" target="_blank">
                                <div class="social__media__widget twitter">
                                   <span class="social__media__widget-icon">
                                   <i class="fa fa-twitter"></i>
                                   </span>
                                   <span class="social__media__widget-counter">
                                   2.076 followers
                                   </span>
                                   <span class="social__media__widget-name">
                                   follow
                                   </span>
                                </div>
                             </a>
                             <a href="#" target="_blank">
                                <div class="social__media__widget youtube">
                                   <span class="social__media__widget-icon">
                                   <i class="fa fa-youtube"></i>
                                   </span>
                                   <span class="social__media__widget-counter">
                                   15,200 followers
                                   </span>
                                   <span class="social__media__widget-name">
                                   subscribe
                                   </span>
                                </div>
                             </a>
                          </div>
                       </aside>

                       <aside class="wrapper__list__article">
                          <h4 class="border_section">tags</h4>
                          <div class="blog-tags p-0">
                             <ul class="list-inline">
                                <li class="list-inline-item">
                                   <a href="#">
                                   #property
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #sea
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #programming
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #sea
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #property
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #life style
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #technology
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #framework
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #sport
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #game
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #wfh
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #sport
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #game
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #wfh
                                   </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#">
                                   #framework
                                   </a>
                                </li>
                             </ul>
                          </div>
                       </aside>
                       <aside class="wrapper__list__article">
                          <h4 class="border_section">newsletter</h4>

                          <div class="widget__form-subscribe bg__card-shadow">
                             <h6>
                                The most important world news and events of the day.
                             </h6>
                             <p><small>Get magzrenvi daily newsletter on your inbox.</small></p>
                             <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Your email address">
                                <div class="input-group-append">
                                   <button class="btn btn-primary" type="button">sign up</button>
                                </div>
                             </div>
                          </div>
                       </aside>
                       <aside class="wrapper__list__article">
                          <h4 class="border_section">Advertise</h4>
                          <a href="#">
                             <figure>
                                <img src="images/placeholder/500x400.jpg" alt="" class="img-fluid">
                             </figure>
                          </a>
                       </aside>
                    </div> */}
          </div>
        </div>
      </section>
      {/* Footer bottom */}
      <div className="wrapper__footer-bottom bg__footer-dark">
        <div className="container ">
          <div className="row">
            {/* <div class="col-md-12">
                    <div class="border-top-1 bg__footer-bottom-section">
                       <ul class="list-inline link-column">
                          <li class="list-inline-item">
                             <a href="/contact-us.html">
                             contact us
                             </a>
                          </li>
                          <li class="list-inline-item">
                             <a href="#"> terms of use</a>
                          </li>
                          <li class="list-inline-item">
                             <a href="#">
                             adchoice
                             </a>
                          </li>
                          <li class="list-inline-item">
                             <a href="/about-us.html">
                             about us
                             </a>
                          </li>
                          <li class="list-inline-item">
                             <a href="#">
                             newsletters
                             </a>
                          </li>
                          <li class="list-inline-item">
                             <a href="#">
                             sitemap
                             </a>
                          </li>
                          <li class="list-inline-item">
                             <a href="#">
                             magrenvi store
                             </a>
                          </li>
                       </ul>
                       <ul class="list-inline">
                          <li class="list-inline-item">
                             <span>
                             Copyright © 2019 News and Magazine template based on Bootstrap 4 Theme by <a
                                href="#">retenvi</a>
                             </span>
                          </li>
                       </ul>
                    </div>
                 </div>*/}
          </div>
        </div>
      </div>
      <a href="javascript:" id="return-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </div>
  );
}
