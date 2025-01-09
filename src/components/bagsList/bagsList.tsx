// import { Link, useLocation } from 'react-router-dom';тзь кгт вум
import React from 'react';

import { IoMdHeartEmpty } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import { HandBagProps } from '../../lib/mongoDB/models/handBags';
import InfoLocation from '../InfoLocation/InfoLocation';
import css from './bagsList.module.css';
import ListProducts from '../ListProducts/ListProducts';
// import { css } from '../ListProducts/ListProducts.module.css';

export default function BagsList({ listBags }: { listBags: HandBagProps }): React.ReactNode {
    // const galleryImage: string = listBags.images[0];
    // const location = useLocation();

    // const defaultImg = 'https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg';

    return (
        <div className={css.card}>
            <div className={css.poster}>
                <Image
                    width={292}
                    height={320}
                    src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
                    alt="Location Unknown"
                />
            </div>
            <div className={css.details}>
                <h1>Location Unknown</h1>
                <h2>2021 • PG • 1hr 38min</h2>
                <div className={css.rating}>
                    <i className={css.fas}></i>
                    <i className={css.fas}></i>
                    <i className={css.fas}></i>
                    <i className={css.fas}></i>
                    <i className={css.far}></i>
                    <span>4.2/5</span>
                </div>
                <div className={css.tags}>
                    <span className={css.tag}>Italian</span>
                    <span className={css.tag}>Drama</span>
                    <span className={css.tag}>{listBags.model}</span>
                </div>
                <p className={css.desc}>
                    Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey
                    in search for meaning.
                </p>
                <div className={css.cast}>
                    <h3>Cast</h3>
                    <ul>
                        <li>
                            <Image
                                width={292}
                                height={320}
                                src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg"
                                alt="Marco Andrews"
                                title="Marco Andrews"
                            />
                        </li>
                        <li>
                            <Image
                                width={292}
                                height={320}
                                src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg"
                                alt="Rebecca Floyd"
                                title="Rebecca Floyd"
                            />
                        </li>
                        <li>
                            <Image
                                width={292}
                                height={320}
                                src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg"
                                alt="Antonio Herrera"
                                title="Antonio Herrera"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
