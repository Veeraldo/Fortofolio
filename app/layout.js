import Navbar from './screen/components/Navbar';
import Footer from './screen/components/footer';

export const metadata = {
  title: 'My Website',
  description: 'Fortofolio Website',
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Navbar />
                <main style = {{minHeight: "80vh", padding: "16px"}}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
