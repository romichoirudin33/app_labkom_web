import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import PosTerbaru from "../Sidebar/PosTerbaru";
import Axios from "axios";
import LoadingPengumumanDetail from "./LoadingPengumumanDetail";

function PengumumanDetail() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState({});

  useEffect(() => {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
    Axios.get("https://jsonplaceholder.typicode.com/users/" + c)
      .then(response => {
        setLoading(false);
        setNews(response.data);
      })
      .catch(error => {
        setNews({});
        setLoading(false);
        alert(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <PosTerbaru></PosTerbaru>
        </div>
        <div
          className="col-md-9"
          style={{ backgroundColor: "#fff", padding: "30px" }}
        >
          {loading ? <LoadingPengumumanDetail /> : <Detail news={news} />}
        </div>
      </div>
    </div>
  );
}

export default PengumumanDetail;
