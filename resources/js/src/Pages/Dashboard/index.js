import React, { useState } from "react";
import { Link } from "react-router-dom";

// style
import "../../Styles/Dashboard/Dashboard.scss";

function Dashboard() {
    return (
        <React.Fragment>
            {/* Header */}
            <header className="dashboard-header">
                <Link to="/" className="logo">
                    Kumpulin
                </Link>
                <nav className="dashboard-navbar">
                    <Link to="/" className="name-user">
                        Mr.Bean
                    </Link>
                    <Link to="/">
                        <img
                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                            className="avatar"
                        />
                    </Link>
                </nav>

                {/* Navbar for mobile */}
                <div id="header-mobile">
                    <ul>
                        <li>
                            <Link to="/">File</Link>
                        </li>
                        <li>
                            <Link to="/">Jumlah File</Link>
                        </li>
                        <li>
                            <Link to="/">Keluar</Link>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Content */}
            <main className="container-dashboard">
                {/* menu side */}
                <div className="menu-column">
                    <h3>
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        Dashboard
                    </h3>
                    <section className="student-menu">
                        <h4>
                            <i
                                className="fa fa-graduation-cap"
                                aria-hidden="true"
                            ></i>
                            Mahasiswa
                        </h4>
                        <ul>
                            <li>
                                <i
                                    className="fa fa-file-text"
                                    aria-hidden="true"
                                ></i>
                                File
                            </li>
                            <li>
                                <i
                                    className="fa fa-list-ol"
                                    aria-hidden="true"
                                ></i>
                                Jumlah File
                            </li>
                        </ul>
                    </section>
                </div>

                {/* list file upload */}
                <div className="upload-list-file-column">
                    <section className="title-upload">
                        <h3>File Upload List</h3>
                        <input
                            type="text"
                            className="search-file"
                            placeholder="Cari..."
                        />
                    </section>
                    <div className="table-wrapper">
                        <table className="file-tabel" border="0">
                            <thead>
                                <tr>
                                    <th className="number-list">No</th>
                                    <th className="item-list">Nama</th>
                                    <th className="item-list">Tanggal</th>
                                    <th className="item-list">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="number-list">1</td>
                                    <td className="item-list">
                                        Matematika.zip
                                    </td>
                                    <td className="item-list">20/06/2020</td>
                                    <td className="item-list">Download</td>
                                </tr>
                                <tr>
                                    <td className="number-list">2</td>
                                    <td className="item-list">IPA.zip</td>
                                    <td className="item-list">20/06/2020</td>
                                    <td className="item-list">Download</td>
                                </tr>
                                <tr>
                                    <td className="number-list">3</td>
                                    <td className="item-list">IPS.zip</td>
                                    <td className="item-list">20/06/2020</td>
                                    <td className="item-list">Download</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Button for download all */}
                    <button className="button-download-all">
                        Download Semua
                    </button>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Dashboard;
