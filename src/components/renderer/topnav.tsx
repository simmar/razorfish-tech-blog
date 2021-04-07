import React from 'react';
import { Link } from 'components/link';

export function TopNav() {
    return (
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
                                <li><Link path="landing-page"><a href="#">RKS</a></Link></li>
                                <li><a href="#">Café Tech</a></li>
                            </ul>
                            {/* <ul className="topbar-sosmed">
                                <li>
                                    <a href="#"><i className="fa fa-facebook" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" /></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" /></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


