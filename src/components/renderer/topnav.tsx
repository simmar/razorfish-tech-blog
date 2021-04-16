// /* eslint-disable @typescript-eslint/camelcase */
// Dynamique version if needed in the future dispo on contentfull;)
// import { TypeComponent_nav } from 'lib/types';
// import React from 'react';
// import { Link } from '../link';

// type TopNav = {
//   fields: unknown;
// };
// // eslint-disable-next-line @typescript-eslint/camelcase
// export function TopNav({ fields }: TypeComponent_nav) {
//   const topNavItems = fields.topNavItems;

//   const displayDate = (date) => {
//     const _date = new Date(date);

//     return _date.toLocaleDateString();
//   };
//   return (
//     <div className="topbar d-none d-sm-block">
//       <div className="container ">
//         <div className="row">
//           <div className="col-sm-12 col-md-5">
//             <div className="topbar-left">
//               <div className="topbar-text">{displayDate(fields.date)}</div>
//             </div>
//           </div>
//           <div className="col-sm-12 col-md-7">
//             <div className="list-unstyled topbar-right">
//               {topNavItems.map((item) => {
//                 return (
//                   <>
//                     <ul className="topbar-link">
//                       {/* <li><Link path="landing-page"><a href="#">{item.fields.title}</a></Link></li> */}
//                       <li>
//                         <Link path={item.fields.slug} href={item.fields.slug || ''}>
//                           {item.fields.title}
//                         </Link>
//                       </li>
//                     </ul>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link } from 'components/link';
import React from 'react';

export function TopNav() {
  return (
    <div className="topbar d-none d-sm-block">
      <div className="container ">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="topbar-left">
              <div className="topbar-text">Monday, March 22, 2020</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="list-unstyled topbar-right">
              <ul className="topbar-link">
                <li>
                  <Link path="landing-page">
                    <a href="#">RKS</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Café Tech</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
