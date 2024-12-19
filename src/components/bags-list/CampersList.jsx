import { Link, useLocation } from 'react-router-dom';

import { IoMdHeartEmpty } from 'react-icons/io';
import Button from '../Button/Button';
import InfoLocation from '../InfoLocation/InfoLocation';
import {
    listCamper,
    img,
    info,
    title,
    name,
    infoPrice,
    price,
    buttonLike,
    iconLike,
    textEllipsis,
} from './CampersList.module.css';

export default function CampersList({ campers }) {
    const location = useLocation();

    const defaultImg =
        'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

    return (
        <ul>
            {campers.map(camper => {
                return (
                    <li key={camper.id} className={listCamper}>
                        <img
                            className={img}
                            src={
                                camper.gallery[0].original
                                    ? `${camper.gallery[0].original}`
                                    : defaultImg
                            }
                            alt="poster"
                        />
                        <div className={info}>
                            <div className={title}>
                                <h2 className={name}>{camper.name}</h2>
                                <div className={infoPrice}>
                                    <h2 className={price}>€ {camper.price}.00</h2>
                                    <button className={buttonLike}>
                                        <IoMdHeartEmpty className={iconLike} />
                                    </button>
                                </div>
                            </div>
                            <InfoLocation camper={camper} />
                            <p className={textEllipsis}>{camper.description}</p>
                            <div></div>
                            <Link to={`/campers/${camper.id}`} state={location}>
                                {' '}
                                {<Button text="Show more" />}
                            </Link>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
