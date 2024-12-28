import { FaStar } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import css from './InfoLocation.module.css';
import { CatalogProps } from '../../lib/api';

export default function InfoLocation({ rating, location, reviews }: CatalogProps) {
    const bagReviews = reviews ? reviews : [];

    return (
        <div className={css.ratingCamper}>
            <span className={css.ratingText}>
                <FaStar className={css.iconStar} /> {rating}{' '}
                <span>({bagReviews.length} Reviews)</span>
            </span>
            <span className={css.ratingText}>
                <GrMapLocation className={css.iconLocation} /> {location}
            </span>
        </div>
    );
}
