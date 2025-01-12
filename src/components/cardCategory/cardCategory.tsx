import css from './cardCategory.module.css';
import clsx from 'clsx';
import Image from 'next/image';

export default function CardCategory({
    photo,
    title,
    description,
}: {
    photo: string;
    title: string;
    description: string;
}) {
    return (
        <section className={css.cardSection}>
            <div className={css.card}>
                <div className={css.flipCard}>
                    <div className={css.flipCardContainer}>
                        <div className={css.cardFront}>
                            <div className={clsx(css.cardFrontTp, css.cardFrontTpCity)}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src={photo}
                                    alt="Вироби з натуральної шкіри"
                                />
                            </div>

                            <div className={css.cardFrontBt}>
                                <h2 className={css.cardFrontTextView}>{title}</h2>
                            </div>
                        </div>
                        <div className={css.cardBack}>
                            <Image
                                layout="fill"
                                src="/photo_шопер_котик.jpg"
                                alt="Вироби з натуральної шкіри"
                                className={css.videoContainer}
                            />
                            {/* <video className={"video__container"} autoplay muted loop>
                        <source className={"video__media"} src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                    </video> */}
                        </div>
                    </div>
                </div>

                <div className={css.insidePage}>
                    <div className={css.insidePageContainer}>
                        <h3 className={css.insidePageHeadingCity}>For urban lovers</h3>
                        <p className={css.insidePageText}>{description}</p>
                        <button type="button" className={css.insidePageBtn}>
                            Переглянути
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
