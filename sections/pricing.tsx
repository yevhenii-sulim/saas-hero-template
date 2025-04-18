import ButtonAction from '@/components/buttonAction'
import { plans } from '@/constants/plans'

export default function Pricing() {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-50">Simple Pricing</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-10">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className="border dark:border-transparent p-8 rounded-2xl w-full sm:w-72 text-center bg-gray-50 dark:bg-gray-600 shadow-sm hover:shadow-lg dark:hover:shadow-gray-100  transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-50">{plan.name}</h3>
                        <p className="text-gray-600 mb-4 dark:text-gray-200">{plan.price}&#36;</p>
                        <p className="text-gray-600 mb-6 dark:text-gray-200">{plan.features}</p>
                        <ButtonAction px={6} py={3}>Choose</ButtonAction>
                    </div>
                ))}
            </div>
        </div>
    )
}
