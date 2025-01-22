// import React from 'react';
// import css from './page.module.css';
// import './page.module.css';
// import CardProducts from '../../components/cardProducts/card-products';
// import {
//     getAllProducts,
//     allProductsProps,
// } from '../../../lib/mongoDB/controllers/products-controllers';
// import { HandBagProps } from '../../../lib/mongoDB/models/hand-bags-models';
// import ServerPagination from '../../components/serverPagination/server-pagination';

// export default async function Catalog({ params }: { params: Promise<{ page: string }> }) {
//     const { page } = await params;

//     const currentPage: number = parseInt(page);

//     const { data, totalPage }: allProductsProps = await getAllProducts(currentPage);

//     return (
//         <section className="section">
//             <div className="container">
//                 <ul className={css.wrapper}>
//                     {data.map((list: HandBagProps) => {
//                         return <CardProducts key={list._id} listProducts={list} />;
//                     })}
//                 </ul>
//                 <ServerPagination totalPages={totalPage} currentPage={currentPage} />
//             </div>
//         </section>
//     );
// }
