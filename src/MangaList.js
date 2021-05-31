import React, {Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class MangaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangas: []
        }
    }

    componentDidMount() {
        axios.get('https://mangamint.kaedenoki.net/api/manga/page/1')
            .then(response => {
                console.log(response);
                this.setState({
                    mangas: response.data.manga_list
                })
            }).catch(error => {
            console.log(error);
        })
    }

    render() {

        const {mangas} = this.state
        return (
            <section id="content">
                <div className="container">
                    <div className="row">
                        {mangas.length ? mangas.map(
                            manga =>
                                    <div className="col-lg-3 col-lg-3 col-sm-6">
                                        <div className="border shadow space">
                                            <img
                                                src={manga.thumb}
                                                className="img-fluid p-1" alt={manga.title}/>
                                            <h3 className="font-weight-light text-success">{manga.title.substr(0, 16)} ...</h3>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6 text-left">Type</div>
                                                    <div className="col-md-6 text-left">{manga.type}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 text-left">Updated On</div>
                                                    <div className="col-md-6 text-left">{manga.updated_on}</div>
                                                </div>
                                            </div>
                                            <Link to={`/detail/${manga.endpoint}`}
                                                  className="btn btn-outline-success btn-sm mt-2 mb-2">Read
                                                More</Link>
                                        </div>
                                    </div>
                            )
                            :

                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ml-auto" role="status" aria-hidden="true"/>
                            </div>

                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default MangaList