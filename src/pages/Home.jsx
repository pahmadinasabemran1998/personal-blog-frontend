import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Your App</h1>
            <p>
                Get started by logging in or registering a new account.
            </p>
            <div style={{ marginTop: "1rem" }}>
                <Link to="/login">
                    <button style={{ marginRight: "1rem" }}>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>

            {/* About Section */}
            <section style={{ marginTop: "3rem", textAlign: "left" }}>
                <h2>About This App</h2>
                <p>
                    {/** Personal Blog version **/}
                    For the Personal Blog: Create, edit, and delete your personal posts easily. 
                    Your entries are saved securely in your browser using localStorage.
                </p>
            </section>
        </div>
    );
};

export default Home;
