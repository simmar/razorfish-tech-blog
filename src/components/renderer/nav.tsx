import React from 'react';
import { Link } from '../link';
import imglogo from '../../../public/logo.jpg';
import { TypeComponent_nav } from 'lib/types';
import { Logo } from 'components/logo'

export function Nav({ fields }: TypeComponent_nav) {
    console.log(fields)
    const navItems = fields.navItems;

    return (
        <>
        <div className="navigation-wrap navigation-shadow bg-white">
            <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
              <div className="container">
                <div className="offcanvas-header">
                  <div data-toggle="modal" data-target="#modal_aside_right" className="btn-md">
                    <span className="navbar-toggler-icon" />
                  </div>
                </div>
                    {/* <figure className="mb-0 mx-auto">
                    <a>
                        <img src={imglogo} alt="" className="img-fluid logo" />
                    </a>
                    </figure> */}
                <Logo color="purple"/>
                <div className="collapse navbar-collapse justify-content-between" id="main_nav99">
                  <ul className="navbar-nav ml-auto ">
                      {navItems.map((item, index) =>
                        <li className="nav-item dropdown" key={index}>
                            { !item.fields.items ?
                                <Link path={item.fields.slug} href={item.fields.slug || ''}>
                                    <a className="nav-link">{item.fields.title}</a>
                                </Link>:
                                <>
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">{item.fields.title}</a>
                                    <ul className="dropdown-menu animate fade-up">
                                        { item.fields.items.map((subItem, subIndex) =>
                                            <li key={subIndex}>
                                                { !subItem.fields.items ?
                                                    <Link path={subItem.fields.slug} href={subItem.fields.slug || ''}>
                                                        <a className="dropdown-item">{subItem.fields.title}</a>
                                                    </Link>:
                                                    <>
                                                        <a className="dropdown-item icon-arrow" href="#">{subItem.fields.title}</a>
                                                        <ul className="submenu dropdown-menu  animate fade-up">
                                                            { subItem.fields.items.map((subSubItem, subSubIndex) =>
                                                                <li key={subSubIndex}>
                                                                    <Link path={subSubItem.fields.slug} href={subSubItem.fields.slug || ''}>
                                                                        <a className="dropdown-item">{subSubItem.fields.title}</a>
                                                                    </Link>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </>
                                                }
                                            </li>
                                        )}
                                    </ul>
                                </>

                            }
                        </li>
                      )}
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
        </>
    )
}


