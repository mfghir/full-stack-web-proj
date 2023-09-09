"use client"

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

type User = {
    image: string,
}

const Logged = ({ image }: User) => {
    return (
        <li className='flex gap-8 items-center' >
            <button
                onClick={() => signOut()}
                className='bg-gray-700 text-white text-sm px-6 py-2 rounded-md'
            >
                Sign out
            </button>

            <Link href={"/dashboard"} >

                <Image
                    src={image}
                    alt=""
                    priority
                    width={64}
                    height={64}
                    className='w-14' />
            </Link>
        </li>
    )
}

export default Logged