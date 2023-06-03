import React from "react";

function Home() {
  return (
    <div className="p-5 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-2 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-around align-items-center bg-white border border-secondary shadow-sm">
              <i class="bi bi-currency-bitcoin fs-1 text-success"></i>
              <div>
                <p>Bitcoin</p>
                <h2>$10.00</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-around align-items-center bg-white border border-secondary shadow-sm">
              <i class="bi bi-currency-euro fs-1 text-success"></i>
              <div>
                <p>Etheruem</p>
                <h2>$12.00</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-4 col-lg-4 p-3 bg-light">
            <div className="d-flex justify-content-around align-items-center bg-white border border-secondary shadow-sm">
              <i class="bi bi-currency-yen fs-1 text-success"></i>
              <div>
                <p>Avalanche</p>
                <h2>$13.00</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Magesh</td>
                <td>Kumar</td>
                <td>@magesh</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Sunil</td>
                <td>Kumar</td>
                <td>@sunil</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Shanmuga</td>
                <td>Sekar</td>
                <td>@Shan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
