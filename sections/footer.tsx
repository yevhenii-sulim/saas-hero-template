import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/X';
import Social from '@/components/social';

interface Props {
  children: React.ReactNode;
  fontFamily: string
}

export default function Footer({ children, fontFamily }: Props) {
  return (
    <footer className={`mt-auto px-6 py-16 text-center text-sm text-gray-500 bg-gray-100  dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ${fontFamily}`}>
      {children}
      <div className="mt-8 flex justify-center gap-6 text-gray-500 dark:text-gray-400">
        <Social href="#">
          <TwitterIcon className="w-5 h-5" />
        </Social>
        <Social href="#">
          <GitHubIcon className="w-5 h-5" />
        </Social>
      </div>
    </footer>
  )
}
