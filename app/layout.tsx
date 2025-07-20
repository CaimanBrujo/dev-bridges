import '../styles/globals.css';
import BackgroundBlobs from './components/BackgroundBlobs';

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
