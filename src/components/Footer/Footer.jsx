import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="page-footer green lighten-4">
            <div class="footer-copyright">
                <div class="container">
                    © {new Date().getFullYear()} Copyright Text
                    <Link
                        class="grey-text text-lighten-4 right"
                        href="https://github.com/Spartak-Sargsyan/React-Shop"
                        target="black"
                    >
                        More Links
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
