import Link from 'next/link';
import css from '../styles/not-found.module.css';
import Button from './components/button/button';

export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>404 🚧</h2>
            <p className={css.text}>Oops!!!! Sorry!!!! Page not found</p>
            <Link href="/"> {<Button>Go home</Button>}</Link>
        </div>
        //     <div className={css.title}"container container-star">
        //     <div className={css.star-1}></div>
        //     <div className="star-1"></div>
        //     <!-- ...повторюється 30 разів -->
        //     <div className="star-2"></div>
        //     <div className="star-2"></div>
        //     <!-- ...повторюється 30 разів -->
        // </div>
        // <div className="container container-bird">
        //     <div className="bird bird-anim">
        //         <div className="bird-container">
        //             <div className="wing wing-left">
        //                 <div className="wing-left-top"></div>
        //             </div>
        //             <div className="wing wing-right">
        //                 <div className="wing-right-top"></div>
        //             </div>
        //         </div>
        //     </div>
        //     <!-- ...повторюється 6 разів -->
        // </div>
        // <div className="container-title">
        //     <div className="title">
        //         <div className="number">4</div>
        //         <div className="moon">
        //             <div className="face">
        //                 <div className="mouth"></div>
        //                 <div className="eyes">
        //                     <div className="eye-left"></div>
        //                     <div className="eye-right"></div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="number">4</div>
        //     </div>
        //     <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
        //     <Link href="/"> {<Button>Go home</Button>}</Link>
        // </div>
    );
}
