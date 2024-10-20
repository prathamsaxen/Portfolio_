import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import 'react-toastify/dist/ReactToastify.css';
import Config from './Config';
export const metadata = {
    title: 'Pratham Saxena',
    description: 'Portfolio of Pratham Saxena'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Config children={children} />
            </body>
        </html>
    );
}
