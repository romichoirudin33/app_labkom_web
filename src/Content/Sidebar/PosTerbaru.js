import React, { Component } from 'react';
import '../../bootstrap.min.css';
import '../../custom.css';

class PosTerbaru extends Component {

    render() {
        return (
            <div>
                <h6 className="title-last-post">pos-pos terbaru</h6>
                <ul className="list-post-newest">
                    <li className="list-post">
                        <a href="http://facebook.com" className="link-post-newest">Jadwal </a>
                    </li>
                </ul>
            </div>
        )
    }

}

export default PosTerbaru