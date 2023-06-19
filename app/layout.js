import ThemeProvider from './theme-provider';
import Navbar from './components/Navbar';
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
       
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}