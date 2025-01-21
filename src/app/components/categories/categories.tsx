import css from './categories.module.css';
import Link from 'next/link';
import CardCategory from './cardCategory/card-category';

export default function Categories() {
    return (
        <section id="category" className={css.block}>
            <h2 className={css.title}>Категорії</h2>
            <ul className={css.list}>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Рушники'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Схеми для вишивки бісером'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Інструменти для вишивки'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Вироби з натуральної шкіри'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Аксесуари для вишивки бісером'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
                <li>
                    <Link href={'/catalog?page=1'}>
                        <CardCategory
                            photo={'/photo_шопер_котик.jpg'}
                            title={'Бісер PRECIOSA'}
                            description={
                                'Всі вироби це ручна робота виготовлена з якісної італійської шкіри'
                            }
                        />
                    </Link>
                </li>
            </ul>
        </section>
    );
}
