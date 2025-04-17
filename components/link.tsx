import React from 'react'

interface Props {
    children: React.ReactNode;
    href: string
}

export default function Link({ children, href }: Props) {
    return (
        <a href={href} className='hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-200 transition-colors duration-300'>{children}</a>
    )
}
