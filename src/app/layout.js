import './globals.css';

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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2315803d'/><text x='50' y='65' font-size='45' font-family='sans-serif' font-weight='bold' fill='white' text-anchor='middle'>REC</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
