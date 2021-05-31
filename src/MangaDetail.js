import React, {Component} from "react";
import axios from "axios";

class MangaDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            manga: {}
        }
    }

    componentDidMount() {

        const mangaKey = this.props.match.params.key

        axios.get('https://mangamint.kaedenoki.net/api/manga/detail/' + mangaKey).then(response => {
            console.log(response.data)
            this.setState({
                manga: response.data
            })
        })
    }

    render() {
        const {manga} = this.state
        return (
            <section id="content">
                {manga.title ?
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                                <img className="card-img-right flex-auto d-none d-md-block"
                                     alt={manga.title}
                                     width="296px" height="296px"
                                     src={manga.thumb}
                                />
                                <div className="card-body d-flex flex-column align-items-start">
                                    <strong className="d-inline-block mb-2 text-primary">{manga.type} |
                                        <span className="mb-1 text-muted">Author : {manga.author}</span>
                                    </strong>
                                    <h3 className="mb-0">
                                        <p className="text-dark">{manga.title}</p>
                                    </h3>
                                    <p className="card-text text-justify mb-auto">{manga.synopsis}.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="d-flex align-items-center">
                        <strong>Loading...</strong>
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"/>
                    </div>
                }
            </section>
        )
    }

}

export default MangaDetail