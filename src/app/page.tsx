'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
    const [counter, setCounter] = useState(0)
    
    return (
        <main className={styles.main}>
            Main page
            {counter}

            <button onClick={() => setCounter(prev => ++prev)}>Add counter</button>
            <Link href='/new'>Create user</Link>
        </main>
    )
}
