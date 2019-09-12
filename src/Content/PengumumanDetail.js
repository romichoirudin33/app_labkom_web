import React, { Component } from 'react';
import '../bootstrap.min.css';
import '../custom.css';
import PosTerbaru from './Sidebar/PosTerbaru';
import Detail from './RightBar/Pengumuman/Detail';

class PengumumanDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <PosTerbaru></PosTerbaru>
                    </div>
                    <div className="col-md-9" style={{ backgroundColor: '#fff', padding: '30px' }}>
                        <Detail></Detail>
                    </div>
                </div>
            </div>
        )
    }
}

export default PengumumanDetail;