import React from "react";
import { Link } from "react-router-dom";

// import style
import "../../Styles/Upload/Upload.scss";
function Upload() {
    return (
        <React.Fragment>
            <header className="upload-header">
                <Link className="logo">Kumpulin</Link>
                <nav className="upload-navbar">
                    <Link className="item">Home</Link>
                    <Link className="item">Service</Link>
                    <Link className="item">FAQ</Link>
                    <Link className="item">Terms</Link>
                </nav>
                <div className="user-register">
                    <Link to="/login">
                        <button className="btn-login">Login</button>
                    </Link>
                </div>
            </header>
            <main className="upload-page">
                <section className="background-upload"></section>
                <section className="upload-group">
                    <div className="title-page">
                        <h1>Kumpulkan Tugasmu</h1>
                        <p>
                            Mengumpulkan tugas dengan lebih cepat, simple dan
                            terstruktur
                        </p>
                    </div>
                    <div className="upload-card">
                        <div className="upload-border">
                            <label for="file-upload" className="label-upload">
                                Temukan file
                            </label>
                            <input type="file" id="file-upload" />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Upload;
