
'use server'
import { prisma } from '@/db';
import Link from 'next/link';

export default async function NewUserPage() {
    try {
        const amount = await prisma.user.count()
        console.log(`🚀 ~ Home ~ COUNTED -->>:`, amount)
        
    } catch (error) {
        console.log(`🚀 ~ Home ~ error:`, error)
    }

    return (
        <>
            <div>New user page</div>
            <Link href='/'>Back to main</Link>
        </>
    );
};