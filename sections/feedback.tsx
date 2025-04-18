import { feedbacks } from '@/constants/feedbacks'

export default function Feedback() {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-50">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {feedbacks.map((value, i) => (
                    <div key={i} className="flex flex-col justify-between bg-white dark:bg-gray-600 p-6 rounded-2xl shadow-md">
                        <p className="italic mb-4 text-gray-700 dark:text-gray-100">“{value.text}”</p>
                        <p className="font-semibold text-blue-600 dark:text-blue-200">— {value.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
