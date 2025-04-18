'use client'

import { motion } from 'framer-motion';
import Pricing from '@/sections/pricing';
import SignUp from '@/sections/signUp';
import Feedback from '@/sections/feedback';
import Features from '@/sections/features';
import GetStart from '@/sections/getStart';

export default function AnimatedSections() {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-6 py-24 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
            >
                <GetStart />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-6 py-24 bg-white dark:bg-black"
            >
                <Features />
            </motion.section>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-6 py-24 bg-gray-50 dark:bg-gray-900"
            >
                <Feedback />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-6 py-24 bg-blue-50 text-center dark:bg-blue-600"
            >
                <SignUp />
            </motion.section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-6 py-24 bg-white dark:bg-black"
            >
                <Pricing />
            </motion.section>
        </>
    );
} 