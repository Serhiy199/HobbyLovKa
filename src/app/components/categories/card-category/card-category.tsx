import css from './card-category.module.css';
// import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function CardCategory({
    propHref,
    photo,
    title,
    description,
}: {
    propHref: string;
    photo: string;
    title: string;
    description: string;
}) {
    return (
        <li className={css.item}>
            <Link href={propHref} className={css.link}>
                <div className={css.card}>
                    <div className={css.container}>
                        <div className={css.front}>
                            <div className={css.cardFront}>
                                <Image
                                    width={884}
                                    height={1280}
                                    // layout="fill"
                                    // fill={true}
                                    style={{
                                        width: '100%',
                                        maxHeight: '350px',
                                        // maxHeight: '350px',
                                        objectFit: 'cover',
                                    }}
                                    // objectFit="cover"
                                    src={photo}
                                    alt={description}
                                />
                            </div>

                            <div className={css.FrontTitle}>
                                <h3 className={css.title}>{title}</h3>
                            </div>
                        </div>
                        <div className={css.back}>
                            <Image
                                // layout="fill"
                                width={884}
                                height={1280}
                                // fill={true}
                                // width={242}
                                // height={242}
                                style={{
                                    width: '100%',
                                    height: '242px',
                                    // maxHeight: '350px',
                                    objectFit: 'cover',
                                }}
                                src="/photo_шопер_котик.jpg"
                                alt={description}
                                className={css.videoContainer}
                            />
                            {/* <video className={"video__container"} autoplay muted loop>
                        <source className={"video__media"} src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
                        </video> */}
                        </div>
                    </div>
                </div>

                <div className={css.insideCard}>
                    <div className={css.insideContainer}>
                        <h4 className={css.insideTitle}>Опис</h4>
                        <p className={css.insideText}>{description}</p>
                        <button type="button" className={css.btn}>
                            Переглянути
                        </button>
                    </div>
                </div>
            </Link>
        </li>
    );
}
