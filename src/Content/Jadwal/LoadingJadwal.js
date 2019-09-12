import React, { Component } from 'react';
import '../../jadwal.css';

class LoadingJadwal extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12" style={{ backgroundColor: '#fff', padding: '30px' }}>
                    <center>
                        <img src="https://thumbs.gfycat.com/AcceptablePerfumedIraniangroundjay-max-1mb.gif" alt="loading" style={{width: "100px"}}/>
                    </center>
                        {/* <h4 className="title-loading">
                        </h4>
                        <hr />
                        <h6 className="title-loading">
                        </h6>
                        <table className="table table-bordered">
                            <tbody>
                                <tr className="loading-body">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div >
        )
    }
}

export default LoadingJadwal;