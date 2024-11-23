'use client'
import React from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import css from './menu.module.css'

const MenuComponent = () => {
    const router = useRouter(); // Отримуємо доступ до маршрутизатора Next.js

    const back = () => {
        router.back(); // Повертаємося на попередню сторінку
    };
    return (
        <div>
            <ul className={css.menu}>
                <button onClick={back}>←</button>
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