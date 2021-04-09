import React from 'react';

export function Post() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Retnews – Best news, blog &amp; magazine template</title>
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="site.webmanifest" />
      {/* favicon.ico in the root directory */}
      <link rel="apple-touch-icon" href="icon.png" />
      <meta name="theme-color" content="#030303" />
      {/* google fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;1,300;1,500&family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <link href="./css/styles.css?537a1bbd0e5129401d28" rel="stylesheet" />
      {/* loading */}
      {/* loading */}
      <div className="loading-container">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <ul className="list-unstyled">
            <li>
              <img src="images/placeholder/loading.png" alt="Alternate Text" height={100} />
            </li>
            <li>
              <div className="spinner">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
              </div>
            </li>
            <li>
              <p>Loading</p>
            </li>
          </ul>
        </div>
      </div>
      {/* End loading */}
      {/* end loading */}
      {/* header */}
      <header className="bg-light">
        {/* navbar */}
        {/* Navbar menu  */}
        <div className="navigation-wrap navigation-shadow bg-white">
          <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
            <div className="container">
              <div className="offcanvas-header">
                <div data-toggle="modal" data-target="#modal_aside_right" className="btn-md">
                  <span className="navbar-toggler-icon" />
                </div>
              </div>
              <figure className="mb-0 mx-auto">
                <a href="/homepage-v1.html">
                  <img src="images/placeholder/logo.jpg" alt="" className="img-fluid logo" />
                </a>
              </figure>
              <div className="collapse navbar-collapse justify-content-between" id="main_nav99">
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" data-toggle="dropdown">
                      {' '}
                      Home{' '}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="/homepage-v1.html">
                          {' '}
                          Home version one{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="homepage-v2.html">
                          {' '}
                          Home version two{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/homepage-v3.html">
                          {' '}
                          Home version three{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/homepage-v4.html">
                          {' '}
                          Home version four{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                      {' '}
                      Pages{' '}
                    </a>
                    <ul className="dropdown-menu animate fade-up">
                      <li>
                        <a className="dropdown-item icon-arrow" href="#">
                          {' '}
                          Blog{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a className="dropdown-item" href="/category-style-v1.html">
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/category-style-v2.html">
                              Style 2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/category-style-v3.html">
                              Style 3
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item icon-arrow" href>
                              Submenu item 3{' '}
                            </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li>
                                <a className="dropdown-item" href>
                                  Multi level 1
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href>
                                  Multi level 2
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="dropdown-item" href>
                              Submenu item 4
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href>
                              Submenu item 5
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item icon-arrow" href="#">
                          {' '}
                          Blog single detail{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a className="dropdown-item" href="/article-detail-v1.html">
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/article-detail-v2.html">
                              Style 2
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/article-detail-v3.html">
                              Style 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item icon-arrow" href="#">
                          {' '}
                          Search Result{' '}
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a className="dropdown-item" href="/search-result.html">
                              Style 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/search-result-v1.html">
                              Style 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/login.html">
                          Login{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/register.html">
                          {' '}
                          Register{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/contact.html">
                          {' '}
                          Contact{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/404.html">
                          {' '}
                          404 Error{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link active dropdown-toggle" href="#" data-toggle="dropdown">
                      {' '}
                      About{' '}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li>
                        <a className="dropdown-item" href="/about-us.html">
                          {' '}
                          Style 1{' '}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/about-us-v1.html">
                          {' '}
                          Style 2{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown has-megamenu">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                      {' '}
                      News{' '}
                    </a>
                    <div className="dropdown-menu animate fade-down megamenu mx-auto" role="menu">
                      <div className="container wrap__mobile-megamenu">
                        <div className="col-megamenu">
                          <h5 className="title">Recent news</h5>
                          <hr />
                          {/* Popular news carousel */}
                          <div className="popular__news-header-carousel">
                            <div className="top__news__slider">
                              <div className="item">
                                {/* Post Article */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a>
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">by david hall</span>,
                                      </li>
                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* Post Article */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a>
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">by david hall</span>,
                                      </li>
                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* Post Article */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a>
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">by david hall</span>,
                                      </li>
                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* Post Article */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a>
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">by david hall</span>,
                                      </li>
                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                {/* Post Article */}
                                <div className="article__entry">
                                  <div className="article__image">
                                    <a href="#">
                                      <img
                                        src="images/placeholder/500x400.jpg"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </a>
                                  </div>
                                  <div className="article__content">
                                    <ul className="list-inline">
                                      <li className="list-inline-item">
                                        <span className="text-primary">by david hall</span>,
                                      </li>
                                      <li className="list-inline-item">
                                        <span>descember 09, 2016</span>
                                      </li>
                                    </ul>
                                    <h5>
                                      <a href="#">
                                        Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
                                      </a>
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col-megamenu.// */}
                      </div>
                    </div>
                    {/* dropdown-mega-menu.// */}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {' '}
                      Category{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact.html">
                      {' '}
                      contact{' '}
                    </a>
                  </li>
                </ul>
                {/* Search bar.// */}
                <ul className="navbar-nav ">
                  <li className="nav-item search hidden-xs hidden-sm ">
                    {' '}
                    <a className="nav-link" href="#">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                </ul>
                {/* Search content bar.// */}
                <div className="top-search navigation-shadow">
                  <div className="container">
                    <div className="input-group ">
                      <form action="#">
                        <div className="row no-gutters mt-3">
                          <div className="col">
                            <input
                              className="form-control border-secondary border-right-0 rounded-0"
                              type="search"
                              defaultValue
                              placeholder="Search "
                              id="example-search-input4"
                            />
                          </div>
                          <div className="col-auto">
                            <a
                              className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                              href="/search-result.html">
                              <i className="fa fa-search" />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Search content bar.// */}
              </div>
              {/* navbar-collapse.// */}
            </div>
          </nav>
        </div>
        {/* End Navbar menu  */}
        {/* Navbar sidebar menu  */}
        <div id="modal_aside_right" className="modal fixed-left fade" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-dialog-aside" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="widget__form-search-bar  ">
                  <div className="row no-gutters">
                    <div className="col">
                      <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        defaultValue
                        placeholder="Search"
                      />
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <nav className="list-group list-group-flush">
                  <ul className="navbar-nav ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle text-dark"
                        href="#"
                        data-toggle="dropdown">
                        {' '}
                        Home
                      </a>
                      <ul className="dropdown-menu dropdown-menu-left">
                        <li>
                          <a className="dropdown-item text-dark" href="/homepage-v1.html">
                            {' '}
                            Home version one{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-dark" href="homepage-v2.html">
                            {' '}
                            Home version two{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-dark" href="/homepage-v3.html">
                            {' '}
                            Home version three{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-dark" href="/homepage-v4.html">
                            {' '}
                            Home version four{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle  text-dark"
                        href="#"
                        data-toggle="dropdown">
                        {' '}
                        Pages{' '}
                      </a>
                      <ul className="dropdown-menu animate fade-up">
                        <li>
                          <a className="dropdown-item icon-arrow  text-dark" href="#">
                            {' '}
                            Blog{' '}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a className="dropdown-item" href="/category-style-v1.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/category-style-v2.html">
                                Style 2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/category-style-v3.html">
                                Style 3
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item icon-arrow  text-dark" href>
                                Submenu item 3{' '}
                              </a>
                              <ul className="submenu dropdown-menu  animate fade-up">
                                <li>
                                  <a className="dropdown-item" href>
                                    Multi level 1
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href>
                                    Multi level 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="dropdown-item  text-dark" href>
                                Submenu item 4
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href>
                                Submenu item 5
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item icon-arrow  text-dark" href="#">
                            {' '}
                            Blog single detail{' '}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a className="dropdown-item" href="/article-detail-v1.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/article-detail-v2.html">
                                Style 2
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/article-detail-v3.html">
                                Style 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item icon-arrow  text-dark" href="#">
                            {' '}
                            Search Result{' '}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li>
                              <a className="dropdown-item" href="/search-result.html">
                                Style 1
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="/search-result-v1.html">
                                Style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="dropdown-item  text-dark" href="/login.html">
                            Login{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item  text-dark" href="/register.html">
                            {' '}
                            Register{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item  text-dark" href="/contact.html">
                            {' '}
                            Contact{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item  text-dark" href="/404.html">
                            {' '}
                            404 Error{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link active dropdown-toggle  text-dark"
                        href="#"
                        data-toggle="dropdown">
                        {' '}
                        About
                      </a>
                      <ul className="dropdown-menu dropdown-menu-left">
                        <li>
                          <a className="dropdown-item" href="/about-us.html">
                            {' '}
                            Style 1{' '}
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/about-us-v1.html">
                            {' '}
                            Style 2{' '}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-dark" href="#">
                        {' '}
                        Category{' '}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link  text-dark" href="/contact.html">
                        {' '}
                        contact{' '}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="modal-footer">
                <p>
                  © 2020{' '}
                  <a href="http://retenvi.com" title="Premium WordPress news & magazine theme">
                    Magzrenvi
                  </a>
                  - Premium template news, blog &amp; magazine &amp; magazine theme by{' '}
                  <a href="http://retenvi.com" title="retenvi">
                    RETENVI.COM
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* modal-bialog .// */}
        </div>
        {/* modal.// */}
        {/* End Navbar sidebar menu  */}
        {/* end navbar */}
      </header>
      {/* end header */}
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
              {/* Article Detail */}
              <div className="wrap__article-detail">
                <div className="wrap__article-detail-title">
                  <h1>These Are the 5 Big Tech Stories to Watch in 2017</h1>
                  <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, hic.</h3>
                </div>
                <hr />
                <div className="wrap__article-detail-info">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <figure className="image-profile">
                        <img src="images/placeholder/logo.jpg" alt="" />
                      </figure>
                    </li>
                    <li className="list-inline-item">
                      <span>by</span>
                      <a href="#">john doe,</a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark text-capitalize ml-1">descember 09, 2016</span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-dark text-capitalize">in</span>
                      <a href="#">business</a>
                    </li>
                  </ul>
                </div>
                <div className="wrap__article-detail-image mt-4">
                  <figure>
                    <img src="images/placeholder/800x500.jpg" alt="" className="img-fluid" />
                  </figure>
                </div>
                <div className="wrap__article-detail-content">
                  <div className="total-views">
                    <div className="total-views-read">
                      15.k
                      <span>views</span>
                    </div>
                    <ul className="list-inline">
                      <span className="share">share on:</span>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o facebook" href="#">
                          <i className="fa fa-facebook-f" />
                          <span>facebook</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o twitter" href="#">
                          <i className="fa fa-twitter" />
                          <span>twitter</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o whatsapp" href="#">
                          <i className="fa fa-whatsapp" />
                          <span>whatsapp</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-social-o telegram" href="#">
                          <i className="fa fa-telegram" />
                          <span>telegram</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-linkedin-o linkedin" href="#">
                          <i className="fa fa-linkedin" />
                          <span>linkedin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="has-drop-cap-fluid">
                    Even the all-powerful Pointing has no control about the blind texts it is an
                    almost unorthographic life One day however a small line of blind text by the
                    name of Lorem Ipsum decided to leave for the far World of Grammar. Far far away,
                    behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts. Separated they live in Bookmarksgrove right at the coast
                    of the Semantics, a large language ocean. A small river named Duden flows by
                    their place and supplies it with the necessary regelialia.
                    <br />
                    <br />
                    The Big Oxmox advised her not to do so, because there were thousands of bad
                    Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
                    didn’t listen. On her way she met a copy. The copy warned the Little Blind Text,
                    that where it came from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word “and” and the Little
                    Blind Text should turn around and return to its own, safe country.
                    <br />
                    The Big Oxmox advised her not to do so, because there were thousands of bad
                    Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
                    didn’t listen. On her way she met a copy. The copy warned the Little Blind Text,
                    that where it came from it would have been rewritten a thousand times and
                    everything that was left from its origin would be the word “and” and the Little
                    Blind Text should turn around and return to its own, safe country.
                  </p>
                  {/* Blockquote  */}
                  <blockquote className="block-quote">
                    <p>
                      It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>
                  {/* Blockquote */}
                  <h5>How Tech Startup Survive Without Funding</h5>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                    right at the coast of the Semantics, a large language ocean. A small river named
                    Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
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
                  <li className="list-inline-item">
                    <a href="#">#property</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">#sea</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">#programming</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">#sea</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">#property</a>
                  </li>
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
