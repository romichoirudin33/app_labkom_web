import React, { useState, useEffect } from "react";
import LoadingPengumuman from "./LoadingPengumuman";
import { Link } from "react-router-dom";
import Axios from "axios";

function Pengumuman() {
  const [loading, setloading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setloading(false);
        setNews(response.data);
      })
      .catch(error => {
        setNews([]);
        setloading(false);
        alert(error);
      });
  }, []);

  return (
    <div>
      <h4 className="text-uppercase font-weight-bold">Pengumuman</h4>
      <br />

      {loading ? (
        <LoadingPengumuman />
      ) : news.length > 0 ? (
        <div
          style={{
            backgroundColor: "#fff",
            overflowY: "hidden"
          }}
        >
          <div className="row" style={{ overflowY: "auto", height: "400px" }}>
            {news.map(newsItem => (
              <div className="col-sm-3 mb-3" key={newsItem.id}>
                <Link
                  to={{ pathname: "/pengumuman", search: "?id=" + newsItem.id }}
                >
                  <div className="card-article news">
                    <div
                      class="item"
                      style={{
                        backgroundImage:
                          'url("http://bengkaung.desa.id/img-berita/thumb/madu-dan-bunga.jpeg")'
                      }}
                    >
                      <div class="text">
                        <p>{newsItem.name}</p>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <p className="card-date">12 dec 2018</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          Data is empty !!
        </div>
      )}
    </div>
  );
}

export default Pengumuman;
