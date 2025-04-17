import React from 'react'

interface Props {
    px: number;
    py: number;
    children: string | React.ReactNode
}

export default function ButtonAction({ px, py, children }: Props) {
    return (
        <button
            type="submit"
            className={`bg-blue-600 dark:bg-blue-100 text-white dark:text-black px-${px} py-${py} rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-200 transition duration-300`}
        >
            {children}
        </button>
    )
}
