import React, { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import css from './InfoLocation.module.css';
import { CatalogProps, ReviewerProps } from '../../lib/api';

type InfoLocationProps = {
    rating: number;
    location: string;
    reviews: ReviewerProps[];
};

export default function InfoLocation({
    rating,
    location,
    reviews,
}: InfoLocationProps): React.ReactNode {
    const bagReviews: ReviewerProps[] = reviews ? reviews : [];

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
