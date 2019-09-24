import React from "react";
import PosTerbaru from "./Sidebar/PosTerbaru";
import Pengumuman from "./Pengumuman/Pengumuman";
import JadwalToday from "./Jadwal/JadwalToday";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <PosTerbaru></PosTerbaru>
        </div>
        <div
          className="col-md-9"
          style={{
            backgroundColor: "#fff",
            padding: "30px"
          }}
        >
          <Pengumuman></Pengumuman>
          <hr />
          <JadwalToday />
        </div>
      </div>
    </div>
  );
}

export default Home;
