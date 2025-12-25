import './Footer.css'

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="Footer">
            © {year} Designed & Developed by Afraz
        </footer>
    )
}