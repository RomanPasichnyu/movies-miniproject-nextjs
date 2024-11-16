import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/movies'}>Movies</Link>
                </li>
                <li>
                    <Link href={'/genres'}>Genres</Link>
                </li>
                <li>
                    <Link href={'/search'}>Search</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;