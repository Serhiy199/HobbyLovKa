export interface Catalog {
    AC: boolean;
    TV: boolean;
    bathroom: boolean;
    consumption: string;
    description: string;
    engine: string;
    form: string;
    gallery: object[];
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
    reviews: object[];
    tank: string;
    transmission: string;
    water: boolean;
    width: string;
}

// const buildUrl = (...paths: string[]) =>
//     `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const buildUrl: string = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

// const stringifyQueryParams = (params: Record<string, string>) =>
//   new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    if (!res.ok) {
        throw new Error(await res.text());
    }

    return (await res.json()) as T;
};

export const getCatalog = (init?: RequestInit) => {
    return sendRequest<Catalog[]>(buildUrl('/campers'), init);
};
