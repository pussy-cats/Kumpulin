import React from "react";

// navigation
import { Link } from "react-router-dom";

// import style
import "../../Styles/Login/Login.scss";

function Login() {
    return (
        <main className="login-page">
            {/* left column */}
            <section className="column left">
                <h1>Kumpulin</h1>
                <img src="images/image.svg" />
            </section>
            {/* Right column */}
            <section className="column right">
                <div className="login">
                    <h3>Login</h3>
                    <form>
                        <input
                            type="email"
                            placeholder="Username"
                            className="input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input"
                        />
                        <div className="forget-password">
                            <Link to="/lupapassword">Lupa Password?</Link>
                        </div>
                        <Link to="/dashboard">
                            <button className="btn-signin">LOGIN</button>
                        </Link>
                    </form>
                    <div className="registration-link">
                        Belum punya akun? <Link to="/register">Daftar</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
