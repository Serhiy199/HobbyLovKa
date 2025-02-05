import css from './layout.module.css';
import NavBar from '@/app/components/catalog/navBar/nav-bar';

export default function CatalogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className={css.section}>
            <NavBar />
            <div className={css.search}>
                <Search placeholder="Search for products..." />
            </div>
            <section>{children}</section>
        </section>
    );
}
