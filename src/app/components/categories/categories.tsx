import '../../globals.css';
import css from './categories.module.css';
import Link from 'next/link';
import CardCategory from './cardCategory/card-category';

export default function Categories() {
    return (
        <section id="category" className="section">
            <div className="container">
                <h2 className={css.title}>Категорії</h2>
                <ul className={css.list}>
                    <li>
                        <Link href={'/catalog?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Готові вироби'}
                                description={'Широкий вибір готових виробів за найкращими цінами!'}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/catalog?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Схеми для вишивки бісером'}
                                description={
                                    'Широкий вибір якісних схем під вишивку бісером за найкращими цінами!'
                                }
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/catalog?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Інструменти для рукоділля'}
                                description={
                                    'Широкий асортимент інструментів для рукоділля за найкращими цінами!'
                                }
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/catalog/bags?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Сумки'}
                                description={
                                    'Всі вироби це ручна робота виготовлена з якісної італійської шкіри!'
                                }
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/catalog?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Аксесуари'}
                                description={
                                    'Тут Ви можете знайти різноманітні аксесуари для творчості!'
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
                                    'Широкий вибір якісного бісеру PRECIOSA з великою гаммою кольорів за найкращими цінами!'
                                }
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/catalog?page=1'}>
                            <CardCategory
                                photo={'/photo_шопер_котик.jpg'}
                                title={'Біжутерія'}
                                description={'Ручні вироби прикрас!'}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}
