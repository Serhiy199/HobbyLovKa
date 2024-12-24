'use client';

import React from 'react';
import { getBagDetailInfo } from '../../../../lib/api';
import { useState, useEffect } from 'react';
export interface PageProps {
    params: { id: string };
}

export default function Page({ params }: PageProps) {
    console.log(params);

    const id = params.id;
    // console.log(id);

    // const [bagData, setBagData] = useState([]);

    // useEffect(() => {
    //     async function getCamper() {
    //         if (!id) return;

    //         const res: Response = await getBagDetailInfo(id);
    //         const data = await res.json();

    //         setBagData(data);

    //         // setMovieGenres(data.genres);
    //     }
    //     getCamper();
    // }, [id]);
    // console.log(bagData);

    return (
        <>
            <div>
                <p>{`Information about company (${id})`}</p>
            </div>
        </>
    );
}
