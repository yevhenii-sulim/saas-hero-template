import ButtonAction from '@/components/buttonAction'

export default function GetStart() {

    return (
        <>
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-gray-100">SuperSaaS — Simplify Your Workflow</h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
                All-in-one platform to manage your business smarter, faster, better.
            </p>
            <ButtonAction px={6} py={3}>Get Started</ButtonAction>
        </>
    )
}
