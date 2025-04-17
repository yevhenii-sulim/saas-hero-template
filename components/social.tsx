import React from 'react'

interface Props {
    children: React.ReactNode;
    href: string
}

export default function Social({ children, href }: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition duration-300"
        >
            {children}
        </a>
    )
}
