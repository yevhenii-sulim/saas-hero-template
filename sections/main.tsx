import React from 'react'

interface Props {
    children: React.ReactNode;
    fontFamily: string
}

export default function Main({ children, fontFamily }: Props) {

    return (
        <main className={`relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white ${fontFamily}`}>{children}</main >
    )
}
