// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import { HandBagProps } from '../../../lib/mongoDB/models/hand-bags';
import InfoLocation from '../InfoLocation/InfoLocation';
import css from './bagsList.module.css';
import ListProducts from '../cardProducts/card-products';
import clsx from 'clsx';
// import { css } from '../ListProducts/ListProducts.module.css';

function truncateText(text: string, wordLimit: number): string {
    const words = text.split(' '); // Розділяємо текст на слова
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...'; // Залишаємо тільки перші `wordLimit` слів
    }
    return text; // Якщо текст не перевищує ліміт, повертаємо його повністю
}

export default function BagsList({ listBags }: { listBags: HandBagProps }): React.ReactNode {
    // const galleryImage: string = listBags.images[0];
    // const location = useLocation();

    // const defaultImg = 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg';

    const tags = listBags.tags;

    return (
        <li className={css.card}>
            <div className={css.poster}>
                <Image
                    width={292}
                    height={320}
                    src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
                    alt={listBags.title}
                />
            </div>
            <div className={css.details}>
                <h1>{listBags.title}</h1>
                <h2>{listBags.model}</h2>
                <div className={css.rating}>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <i className={clsx(css.fas && css.faStar)}>★</i>
                    <span>{listBags.ratings.average}</span>
                </div>
                <div className={css.tags}>
                    {tags.map((listTag: string, i: number) => (
                        <span key={listBags[i]} className={css.tag}>
                            {listTag}
                        </span>
                    ))}
                </div>
                <p className={css.desc}>{truncateText(listBags.description, 9)}</p>
            </div>
        </li>
    );
}

export default function ListProducts() {
    // return (
    //     <li className={css.listCamper}>
    //         <Image
    //             width={292}
    //             height={320}
    //             className={css.img}
    //             src={defaultImg}
    //             alt="poster"
    //             priority={true}
    //         />
    //         <div className={css.info}>
    //             <div className={css.title}>
    //                 <h2 className={css.name}>{listBags.title}</h2>
    //                 <div className={css.infoPrice}>
    //                     <h2 className={css.price}>€ {listBags.price}.00</h2>
    //                     <button
    //                         type="button"
    //                         aria-label="Додати в улюблені"
    //                         className={css.buttonLike}
    //                     >
    //                         <IoMdHeartEmpty className={css.iconLike} />
    //                     </button>
    //                 </div>
    //             </div>
    //             {/* <InfoLocation bag={{ rating, location, reviews }} /> */}
    //             <p className={css.textEllipsis}>{listBags.description}</p>
    //             <div></div>
    //             <Link href={`/catalog/${listBags._id}`}> {<Button>Переглянути зараз</Button>}</Link>
    //         </div>
    //     </li>
    // );
}
