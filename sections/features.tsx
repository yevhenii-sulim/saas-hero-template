import { features } from '@/constants/features'

export default function Features() {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100">Powerful Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature, i) => (
                    <div key={i} className="bg-gray-50 dark:bg-gray-600 dark:hover:shadow-gray-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-100">{feature}</h3>
                        <p className="text-gray-600 dark:text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
