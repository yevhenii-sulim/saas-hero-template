import { formsAction } from '@/constants/links'
import ButtonAction from '@/components/buttonAction'

export default function SignUp() {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Stay Updated</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-200">Join our mailing list for product news and updates.</p>
            <form
                action={formsAction}
                method="POST"
                className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
            >
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="px-4 py-3 rounded-xl border w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
                <ButtonAction px={6} py={3}>Subscribe</ButtonAction>
            </form>
        </div>
    )
}
