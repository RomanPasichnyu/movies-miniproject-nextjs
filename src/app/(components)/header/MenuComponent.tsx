'use client'
import React from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import css from './menu.module.css'

const MenuComponent = () => {
    const router = useRouter();

    const back = () => {
        router.back();
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
                <li>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4ElEQVR4nO1ZS0hUURj+bEwENaXShbTJByi0VkQFkfABiroIVy4SClzki7ClhEQTjkZIC5EQjXytgsAHEpRmULYQHUYYTBitsFSGSU0lpz/+0z1xGR3G0XvmAX7wM5c795zv/+75zrn3/BcwHlcA3ADQCeA1gHkAXwD8AvAeQDRCEJcB3AHwEQD5CDNCCJcAPAKwIxOMiYmh8vJyamtro/HxcbJarbS2tkYzMzNkMpn4mgMA2QgB3ATglIkXFhbSyMgI7ezskDe0tLTIUfit2WoCQLM2ggHDBQAvZeIFBQU0OztLx8Hu7i7l5OQcZas9AI8BxKpOPkmblBQfH0/9/f10EvAoLS8v0/DwMFVXV1NkZKQU8kG1gE9MlJqaSna7nYyC1WrVj4ZS/GSSpaUlMhoIkAAbkywsLIStgAkmGRsbC1sBz5ikp6cnbAXcZ5LW1tawFXCLSWpra8NWQAmTFBUVha2Aa0ySmZkZtgISmCQuLi4sBZwHYJFECgVYNC7D0SFJ8vPzDReQl5enF9GuQsA6d87v9aowPT0tBfxQIUCJdQI5F0THq6urpAorKyvqBZSWlpLD4TA8eYfDQSUlJUoFbOp3UU1NTYYl39jY6LlD21AhYEhPwhv0xcXFUydvs9nkZl8fgyoEpAH4rieqqqo6tYCKigrP5NcApEIRuOPnANwRERGCsLOz88TJt7e36xN3a32nIAAY0Fupr6/P7+R7e3s9rfMCAcRVAPv6oW9oaKDt7W2fiW9tbVF9fb2nbfZV2sYb7nrWd5KSkshisdDe3t6hxPkcWyYxMfGoulATgoSnR9U/09LSaGhoSDyYeH0fGBgQ57zUSnsQRJgAPNAmoNjsp6eney3s8n+jo6P6Sdum9RFUxAPoZh/LqltHRwdlZWWJQi9Hdna2WK1k3VTzPLfhtkFDOoAnALbkHZ6fn/c5iefm5vSjsgugX9vpBQTnAFwH8ArAH5lIbGys+OUaJz/cBgcHRbnQ5XKJ4GOeB5WVlf+XzoSEBJLPEi3eaR9GTKoq0rcBLErC6OhoqqmpEVU6Xhqbm5spKirKq/9l8DV8Lbex2+1iSZU3QIvPAO4BuKjEJikpKWQ2m2lzc/OQPdbX16mrq4uKi4spOTlZiOTgYz7H/21sbBxq53K5qLu7mzIyMgyx15E2yc3NFR8wDg4OSBXcbjdNTk5SWVnZqez1Vu/turo68cYYaNhsNsHtYa83xxEgLual0Ol0UrDhdDpFLv5sdAKy9/UX8FcAVwhCBVNTU/4LCOHwiW8hkCR5ia++0//3JZ1CNB4eR0CUJuJriN15s5bbGc4AA/EXRTuKZoeiodsAAAAASUVORK5CYII="
                        alt="user"/>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;