// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
// import React from 'react';
import React from 'react';

// import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import { typeCatalog, dataProps } from '../../lib/api';
// import InfoLocation from '../InfoLocation/InfoLocation';
import css from './bagsList.module.css';

export default function CampersList({ bagsData }: Promise<dataProps> ) {
    // console.log(typeof (bags));
    // const location = useLocation();
    const bags:typeCatalog[] = bagsData.items;

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <ul>
            {bags.map((camper: typeCatalog) => {
                return (
                    <li key ={camper.id} className={css.listCamper}>
                        <Image
                            className={css.img}
                            src={
                                camper.gallery[0].original
                                    ? `${camper.gallery[0].original}`
                                    : defaultImg
                            }
                            alt="poster"
                        />
                        <div className={css.info}>
                            <div className={css.title}>
                                <h2 className={css.name}>{camper.name}</h2>
                                <div className={css.infoPrice}>
                                    <h2 className={css.price}>€ {camper.price}.00</h2>
                                    {/* <button className={buttonLike}>
                    <IoMdHeartEmpty className={iconLike} />
                  </button> */}
                                </div>
                            </div>
                            {/* <InfoLocation camper={camper} /> */}
                            <p className={css.textEllipsis}>{camper.description}</p>
                            <div></div>
                            <Link href={`/campers/${camper.id}`}>
                                {' '}
                                {<Button>Show more</Button>}
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
