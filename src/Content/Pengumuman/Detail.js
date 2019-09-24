import React from "react";

function Detail({ news }) {
  return (
    <div className="col-md-10">
      <h3 className="title-publish">{news.name}</h3>
      <h4 className="user-publish">
        oleh <font className="color-blue">labkom</font> - dipublishkan 12
        november 2018 - diupdate 12 november 2018
      </h4>
      <hr />
      <p className="detail-publish">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi
        impedit similique at suscipit? Minima mollitia, expedita perferendis
        ducimus ullam fugiat nisi illum vero. Rem distinctio illo impedit
        aspernatur incidunt!
      </p>
    </div>
  );
}

export default Detail;
