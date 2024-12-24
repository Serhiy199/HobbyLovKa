type GalleryProps = {
    thumb: string;
    original: string;
};

type ReviewerProps = {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
};

export interface CatalogProps {
    // [key: string]: boolean | string | number | ReviewerProps[] | GalleryProps[];
    AC: boolean;
    TV: boolean;
    bathroom: boolean;
    consumption: string;
    description: string;
    engine: string;
    form: string;
    gallery: GalleryProps[];
    gas: boolean;
    height: string;
    id: string;
    kitchen: boolean;
    length: string;
    location: string;
    microwave: boolean;
    name: string;
    price: number;
    radio: boolean;
    rating: number;
    refrigerator: boolean;
    reviews: ReviewerProps[];
    tank: string;
    transmission: string;
    water: boolean;
    width: string;
}

export interface dataProps {
    total: number;
    items: CatalogProps[];
}

const buildUrl = (...paths: string[]) =>
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/${paths.join('/')}`;
// const ur = (...paths: string[]) => `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/${paths.join('/')}`;

// const uur = ur('campers', '2');
// console.log(uur);

// const buildUrl: string = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

// enum API {buildUrl = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'}

// const stringifyQueryParams = (params: Record<string, string>) =>
//   new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit): Promise<T> => {
    const res: Response = await fetch(url, init);
    if (!res.ok) {
        throw new Error(await res.text());
    }

    return (await res.json()) as T;
};

export const getCatalog = (init?: RequestInit): Promise<dataProps> => {
    return sendRequest<dataProps>(buildUrl('campers'), init);
};

export const getBagDetailInfo = (id: string, init?: RequestInit) => {
    return sendRequest(buildUrl('campers', id), init);
};
