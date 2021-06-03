import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import MangaList from "./MangaList";
import MangaDetail from "./MangaDetail";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Router>
                <Switch>
                    <Route exact path="/" component={MangaList}/>
                    <Route exact path="/detail/:key" component={MangaDetail}/>
                </Switch>
            </Router>

            <footer className="text-muted">
                <div className="container">

                    <p>Tugas Akhir Pemograman Web Mobile © dayatfadila - 205411102</p>
                    <p>STIMIK AKAKOM YOGYAKARTA</p>
                </div>
            </footer>
            <div className="modal fade" id="disclaimerleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="disclaimerModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="disclaimerModalLabel">Disclaimer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <p className="text-justify"> Aplikasi Ini bertujuan untuk memenuhi tugas akhir </p>
                            <p> Pemograman Web Mobile</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
