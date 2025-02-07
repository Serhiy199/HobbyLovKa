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

            <section>{children}</section>
        </section>
    );
}
