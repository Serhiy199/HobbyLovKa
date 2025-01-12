'use client'; // Error boundaries must be Client Components
import ErrorButton from '../components/errorButton/errorButton';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        // global-error must include html and body tags
        <html>
            <body>
                <h2>{`Щось пішло не так. ${error.message}`}</h2>
                <ErrorButton onClick={() => reset()}>Try again</ErrorButton>
            </body>
        </html>
    );
}
