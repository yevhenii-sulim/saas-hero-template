import AnimatedSections from '@/components/animatedSections';
import Copyright from '@/components/copyright';
import Link from '@/components/link';
import { contacts } from '@/constants/contacts';
import { PrivacyPolicy, TermsOfService } from '@/constants/links';
import Footer from '@/sections/footer';
import Main from '@/sections/main';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Main fontFamily={inter.className}>
        <AnimatedSections />
      </Main>
      <Footer fontFamily={inter.className}>
        <Copyright />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={`mailto:${contacts}`}>
            Email
          </Link>
          <Link href={PrivacyPolicy}>
            Policy
          </Link>
          <Link href={TermsOfService}>
            Terms of Service
          </Link>
        </div>
      </Footer>
    </div>
  );
}
