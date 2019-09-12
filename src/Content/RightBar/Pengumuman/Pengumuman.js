import React, { Component } from 'react';
import '../../../bootstrap.min.css';
import '../../../custom.css';

class Pengumuman extends Component {

    render() {
        return (
            <div>
                <h4 className="text-uppercase font-weight-bold">Pengumuman</h4>
                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card-article">
                            <img alt="img-post" src="https://cdn-images-1.medium.com/max/1200/1*36D6oCrl2Fpif_8NzK2lYA.png" className="img-article" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    card
                                </h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p className="card-date">
                                    12 dec 2018
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Pengumuman