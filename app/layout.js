import './globals.css';
import Footer from './components/footer';

export const metadata = {
  title: 'Veraldo',
  description: 'Fortofolio Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <body>
                <main style = {{minHeight: "80vh", padding: "16px"}}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
