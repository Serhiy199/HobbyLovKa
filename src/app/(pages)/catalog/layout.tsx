// import Search from '@/app/components/search/search';
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
            {/* <Search placeholder="Search for products..." /> */}
            <section>{children}</section>
        </section>
    );
}
