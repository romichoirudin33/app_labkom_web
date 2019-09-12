import React, { Component } from 'react';
import '../../jadwal.css';
import LoadingJadwal from './LoadingJadwal';

class JadwalToday extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            day: Date(),
        }
    }

    componentDidMount() {
        this.setToday();
        this.getJadwalToday();
        this.timerID = setInterval(
            () => this.getJadwalToday(), 5000
        )
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    setToday() {
        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Minggu";
        weekday[1] = "Senin";
        weekday[2] = "Selasa";
        weekday[3] = "Rabu";
        weekday[4] = "Kamis";
        weekday[5] = "Jumat";
        weekday[6] = "Sabtu";
        this.setState({ day: weekday[d.getDay()] });
    }

    getJadwalToday(){
        var save = !this.isLoading;
        this.setState({isLoading : false})
    }

    render() {

        if(this.state.isLoading){
            return (
                <LoadingJadwal></LoadingJadwal>
            )
        }

        return (
            <div>    
                <div className="row">
                    <div className="col-md-12" style={{ backgroundColor: '#fff', padding: '30px' }}>
                        <h4 className="text-uppercase font-weight-bold">
                            Jadwal Praktikum Hari ini <font className="title-day">({this.state.day})</font>
                        </h4>
                        <hr />
                        <h6>
                            <b>Ruangan</b> RPL 1
                        </h6>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Jam</th>
                                    <th>Matakuliah</th>
                                    <th>Kelp</th>
                                    <th>Dosen</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="class-out">
                                    <td>08.00 - 11.20</td>
                                    <td>Algoritma dan Pemrograman</td>
                                    <td>S1TI A</td>
                                    <td>Pahrul Irfan, M.Kom</td>
                                    <td>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <h6>
                            <b>Ruangan</b> RPL 1
                        </h6>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Jam</th>
                                    <th>Matakuliah</th>
                                    <th>Kelp</th>
                                    <th>Dosen</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="class-in">
                                    <td>08.00 - 11.20</td>
                                    <td>Algoritma dan Pemrograman</td>
                                    <td>S1TI A</td>
                                    <td>Pahrul Irfan, M.Kom</td>
                                    <td>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        )
    }
}

export default JadwalToday;