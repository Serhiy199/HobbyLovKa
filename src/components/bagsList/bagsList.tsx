// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import { CatalogProps } from '../../lib/api';
// import InfoLocation from '../InfoLocation/InfoLocation';
import css from './bagsList.module.css';

export default function CampersList({
    AC,
    TV,
    bathroom,
    consumption,
    description,
    engine,
    form,
    gallery,
    gas,
    height,
    id,
    kitchen,
    length,
    location,
    microwave,
    name,
    price,
    radio,
    rating,
    refrigerator,
    reviews,
    tank,
    transmission,
    water,
    width,
}: CatalogProps): React.ReactNode {
    const galleryImage: string = gallery[0].original;
    // const location = useLocation();

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <li className={css.listCamper}>
            <Image
                width={292}
                height={320}
                className={css.img}
                src={galleryImage ? `${galleryImage}` : defaultImg}
                alt="poster"
                priority={true}
            />
            <div className={css.info}>
                <div className={css.title}>
                    <h2 className={css.name}>{name}</h2>
                    <div className={css.infoPrice}>
                        <h2 className={css.price}>€ {price}.00</h2>
                        <button
                            type="button"
                            aria-label="Додати в улюблені"
                            className={css.buttonLike}
                        >
                            <IoMdHeartEmpty className={css.iconLike} />
                        </button>
                    </div>
                </div>
                {/* <InfoLocation camper={camper} /> */}
                <p className={css.textEllipsis}>{description}</p>
                <div></div>
                <Link href={`/campers/${id}`}> {<Button>Переглянути зараз</Button>}</Link>
            </div>
        </li>
    );
}
