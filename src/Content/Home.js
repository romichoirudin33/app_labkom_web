import React, { Component } from 'react';
import '../bootstrap.min.css';
import '../custom.css';
import PosTerbaru from './Sidebar/PosTerbaru';
import Pengumuman from './RightBar/Pengumuman/Pengumuman';
import JadwalToday from './Jadwal/JadwalToday';

class Home extends Component {

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
                        <Pengumuman></Pengumuman>
                        <hr/>
                        <JadwalToday/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;