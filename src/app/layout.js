import './globals.css';
import { DataProvider } from '@/context/DataContext';

export const metadata = {
  title: 'রংপুর ইঞ্জিনিয়ারিং কলেজ | Rangpur Engineering College (REC)',
  description: 'Official portal and modern web preview of Rangpur Engineering College (Affiliated with University of Rajshahi). Approved by Ministry of Education, Govt. of Bangladesh.',
  keywords: 'Rangpur Engineering College, REC, RECR, University of Rajshahi, CSE, EEE, CE, ICE, Engineering College Rangpur, B.Sc. Engineering Admission 2026',
  metadataBase: new URL('https://recrtest.vercel.app'),
  openGraph: {
    title: 'Rangpur Engineering College (রংপুর ইঞ্জিনিয়ারিং কলেজ)',
    description: 'Premier Engineering Education in Rangpur Division. Affiliated with University of Rajshahi.',
    url: 'https://recrtest.vercel.app',
    siteName: 'Rangpur Engineering College',
    locale: 'bn_BD',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-emerald-600 selection:text-white">
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
