import '../styles/globals.css';
import BackgroundBlobs from './components/BackgroundBlobs';

export const metadata = {
  title: 'Developing Bridges',
  description: 'We bring technology closer to you.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <BackgroundBlobs />
        {children}
      </body>
    </html>
  );
}
