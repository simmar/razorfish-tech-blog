import React from 'react';
import { Link } from 'components/link';
// type FooterProps = {

// };

export function Header() {
    return (
        <header className="bg-light">
          <div className="topbar d-none d-sm-block">
            <div className="container ">
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div className="topbar-left">
                    <div className="topbar-text">
                      Monday, March 22, 2020
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="list-unstyled topbar-right">
                    <ul className="topbar-link">
                      <li><a href="#">Career</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Login / Register</a></li>
                    </ul>
                    <ul className="topbar-sosmed">
                      <li>
                        <a href="#"><i className="fa fa-facebook" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-twitter" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-instagram" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      <Link path="landing-page">
                        <a className="nav-link active dropdown-toggle"> Home </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Pages </a>
                      <ul className="dropdown-menu animate fade-up">
                        <li><a className="dropdown-item icon-arrow" href="#"> Blog </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li><a className="dropdown-item" href="/category-style-v1.html">Style 1</a></li>
                            <li><a className="dropdown-item" href="/category-style-v2.html">Style 2</a></li>
                            <li><a className="dropdown-item" href="/category-style-v3.html">Style 3</a></li>
                            <li><a className="dropdown-item icon-arrow" href>Submenu item 3 </a>
                              <ul className="submenu dropdown-menu  animate fade-up">
                                <li><a className="dropdown-item" href>Multi level 1</a></li>
                                <li><a className="dropdown-item" href>Multi level 2</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href>Submenu item 4</a></li>
                            <li><a className="dropdown-item" href>Submenu item 5</a></li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item icon-arrow" href="#"> Blog single detail </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li><a className="dropdown-item" href="/article-detail-v1.html">Style 1</a></li>
                            <li><a className="dropdown-item" href="/article-detail-v2.html">Style 2</a></li>
                            <li><a className="dropdown-item" href="/article-detail-v3.html">Style 3</a></li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item icon-arrow" href="#"> Search Result </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            <li><a className="dropdown-item" href="/search-result.html">Style 1</a></li>
                            <li><a className="dropdown-item" href="/search-result-v1.html">Style 2</a></li>
                          </ul>
                        </li>
                        <li><a className="dropdown-item" href="/login.html">Login </a>
                        </li><li><a className="dropdown-item" href="/register.html"> Register </a>
                        </li><li><a className="dropdown-item" href="/contact.html"> Contact </a>
                        </li><li><a className="dropdown-item" href="/404.html"> 404 Error </a>
                        </li></ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link active dropdown-toggle" href="#" data-toggle="dropdown"> About </a>
                      <ul className="dropdown-menu dropdown-menu-left">
                        <li><a className="dropdown-item" href="/about-us.html"> Style 1 </a>
                        </li>
                        <li><a className="dropdown-item" href="/about-us-v1.html"> Style 2 </a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown has-megamenu">
                      <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> News </a>
                      <div className="dropdown-menu animate fade-down megamenu mx-auto" role="menu">
                        <div className="container wrap__mobile-megamenu">
                          <div className="col-megamenu">
                            <h5 className="title">Recent news</h5>
                            <hr />
                            <div className="popular__news-header-carousel">
                              <div className="top__news__slider">
                                <div className="item">
                                  <div className="article__entry">
                                    <div className="article__image">
                                      <a href="#">
                                        <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                      </a>
                                    </div>
                                    <div className="article__content">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <span className="text-primary">
                                            by david hall
                                          </span>,
                                        </li>
                                        <li className="list-inline-item">
                                          <span>
                                            descember 09, 2016
                                          </span>
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
                                  <div className="article__entry">
                                    <div className="article__image">
                                      <a href="#">
                                        <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                      </a>
                                    </div>
                                    <div className="article__content">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <span className="text-primary">
                                            by david hall
                                          </span>,
                                        </li>
                                        <li className="list-inline-item">
                                          <span>
                                            descember 09, 2016
                                          </span>
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
                                  <div className="article__entry">
                                    <div className="article__image">
                                      <a href="#">
                                        <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                      </a>
                                    </div>
                                    <div className="article__content">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <span className="text-primary">
                                            by david hall
                                          </span>,
                                        </li>
                                        <li className="list-inline-item">
                                          <span>
                                            descember 09, 2016
                                          </span>
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
                                  <div className="article__entry">
                                    <div className="article__image">
                                      <a href="#">
                                        <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                      </a>
                                    </div>
                                    <div className="article__content">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <span className="text-primary">
                                            by david hall
                                          </span>,
                                        </li>
                                        <li className="list-inline-item">
                                          <span>
                                            descember 09, 2016
                                          </span>
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
                                  <div className="article__entry">
                                    <div className="article__image">
                                      <a href="#">
                                        <img src="images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                      </a>
                                    </div>
                                    <div className="article__content">
                                      <ul className="list-inline">
                                        <li className="list-inline-item">
                                          <span className="text-primary">
                                            by david hall
                                          </span>,
                                        </li>
                                        <li className="list-inline-item">
                                          <span>
                                            descember 09, 2016
                                          </span>
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
                        </div>
                      </div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#"> Category </a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact.html"> contact </a></li>
                  </ul>

                  <ul className="navbar-nav ">
                    <li className="nav-item search hidden-xs hidden-sm "> <a className="nav-link" href="#">
                        <i className="fa fa-search" />
                      </a>
                    </li>
                  </ul>

                  <div className="top-search navigation-shadow">
                    <div className="container">
                      <div className="input-group ">
                        <form action="#">
                          <div className="row no-gutters mt-3">
                            <div className="col">
                              <input className="form-control border-secondary border-right-0 rounded-0" type="search" defaultValue placeholder="Search " id="example-search-input4" />
                            </div>
                            <div className="col-auto">
                              <a className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" href="/search-result.html">
                                <i className="fa fa-search" />
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </nav>
          </div>

          <div id="modal_aside_right" className="modal fixed-left fade" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-aside" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="widget__form-search-bar  ">
                    <div className="row no-gutters">
                      <div className="col">
                        <input className="form-control border-secondary border-right-0 rounded-0" defaultValue placeholder="Search" />
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
                        <a className="nav-link active dropdown-toggle text-dark" href="#" data-toggle="dropdown"> Home
                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">
                          <li><a className="dropdown-item text-dark" href="/homepage-v1.html"> Home version one </a>
                          </li>
                          <li><a className="dropdown-item text-dark" href="homepage-v2.html"> Home version two </a>
                          </li>
                          <li><a className="dropdown-item text-dark" href="/homepage-v3.html"> Home version three </a>
                          </li>
                          <li><a className="dropdown-item text-dark" href="/homepage-v4.html"> Home version four </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle  text-dark" href="#" data-toggle="dropdown"> Pages </a>
                        <ul className="dropdown-menu animate fade-up">
                          <li><a className="dropdown-item icon-arrow  text-dark" href="#"> Blog </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li><a className="dropdown-item" href="/category-style-v1.html">Style 1</a></li>
                              <li><a className="dropdown-item" href="/category-style-v2.html">Style 2</a></li>
                              <li><a className="dropdown-item" href="/category-style-v3.html">Style 3</a></li>
                              <li><a className="dropdown-item icon-arrow  text-dark" href>Submenu item 3 </a>
                                <ul className="submenu dropdown-menu  animate fade-up">
                                  <li><a className="dropdown-item" href>Multi level 1</a></li>
                                  <li><a className="dropdown-item" href>Multi level 2</a></li>
                                </ul>
                              </li>
                              <li><a className="dropdown-item  text-dark" href>Submenu item 4</a></li>
                              <li><a className="dropdown-item" href>Submenu item 5</a></li>
                            </ul>
                          </li>
                          <li><a className="dropdown-item icon-arrow  text-dark" href="#"> Blog single detail </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li><a className="dropdown-item" href="/article-detail-v1.html">Style 1</a></li>
                              <li><a className="dropdown-item" href="/article-detail-v2.html">Style 2</a></li>
                              <li><a className="dropdown-item" href="/article-detail-v3.html">Style 3</a></li>
                            </ul>
                          </li>
                          <li><a className="dropdown-item icon-arrow  text-dark" href="#"> Search Result </a>
                            <ul className="submenu dropdown-menu  animate fade-up">
                              <li><a className="dropdown-item" href="/search-result.html">Style 1</a></li>
                              <li><a className="dropdown-item" href="/search-result-v1.html">Style 2</a></li>
                            </ul>
                          </li>
                          <li><a className="dropdown-item  text-dark" href="/login.html">Login </a>
                          </li><li><a className="dropdown-item  text-dark" href="/register.html"> Register </a>
                          </li><li><a className="dropdown-item  text-dark" href="/contact.html"> Contact </a>
                          </li><li><a className="dropdown-item  text-dark" href="/404.html"> 404 Error </a>
                          </li></ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle  text-dark" href="#" data-toggle="dropdown"> About
                        </a>
                        <ul className="dropdown-menu dropdown-menu-left">
                          <li><a className="dropdown-item" href="/about-us.html"> Style 1 </a>
                          </li>
                          <li><a className="dropdown-item" href="/about-us-v1.html"> Style 2 </a></li>
                        </ul>
                      </li>
                      <li className="nav-item"><a className="nav-link  text-dark" href="#"> Category </a></li>
                      <li className="nav-item"><a className="nav-link  text-dark" href="/contact.html"> contact </a></li>
                    </ul>
                  </nav>
                </div>
                <div className="modal-footer">
                  <p>© 2020 <a href="http://retenvi.com" title="Premium WordPress news & magazine theme">Magzrenvi</a>
                    -
                    Premium template news, blog &amp; magazine &amp;
                    magazine theme by <a href="http://retenvi.com" title="retenvi">RETENVI.COM</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}


