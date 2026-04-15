import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="pt-20 pb-20 px-6 max-w-7xl mx-auto text-center">
            <section>
                <h1 className="text-4xl mb-4">404 – Page Not Found</h1>
                <p className="mb-4">The page you are looking for does not exist.</p>

                <Button onClick={() => navigate('/')}>Go back to Home</Button>
            </section>
        </div>
    );
}

export default NotFound;