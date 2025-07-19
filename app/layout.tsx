import '../styles/globals.css';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundBlobs />
        {children}
      </body>
    </html>
  );
}
