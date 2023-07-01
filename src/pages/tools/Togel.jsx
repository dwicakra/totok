import React, { useState } from "react";
import getRandomDigits from "../../components/getRandomDigits";
import angaTerakhirData from "../../components/angaTerakhirData";
import "../../assets/style.css";
import "bootstrap/dist/css/bootstrap.css";

function Togel() {
  const [angkaTerakhir, setAngkaTerakhir] = useState("");
  const [berapaDigit, setBerapaDigit] = useState(4);
  const [berapaGenerate, setBerapaGenerate] = useState(5);
  const [hasilGenerate, setHasilGenerate] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAngkaTerakhirChange = (event) => {
    setAngkaTerakhir(event.target.value);
  };

  const handleBerapaDigitChange = (event) => {
    setBerapaDigit(parseInt(event.target.value));
  };

  const handleBerapaGenerateChange = (event) => {
    setBerapaGenerate(parseInt(event.target.value));
  };

  const handleGenerateClick = (event) => {
    event.preventDefault();
    if (angkaTerakhir in angaTerakhirData) {
      const selectedNumber = angaTerakhirData[angkaTerakhir];
      const generatedResults = [];
      for (let i = 0; i < berapaGenerate; i++) {
        const randomDigits = getRandomDigits(selectedNumber, berapaDigit);
        generatedResults.push(randomDigits);
      }
      setHasilGenerate(generatedResults);
      setErrorMessage("");
    } else {
      setHasilGenerate([]);
      setErrorMessage("Data Kosong");
    }
  };

  return (
    <div className="togel">
      <div className="form-body">
        <div className="container">
          <div className="row overflow-x-auto">
            <div className="col-md-6 overflow-x-auto">
              <div className="form-holder">
                <div className="form-content">
                  <div className="form-items">
                    <h3>Prediksi Masa depan</h3>
                    <p>
                      Jangan lupa pajak&nbsp;
                      <a
                        href="https://saweria.co/dwicakra"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        Saweria
                      </a>
                    </p>
                    <form>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="angkaTerakhir"
                          placeholder="Masukan Angka Ekor Sebelum"
                          value={angkaTerakhir}
                          onChange={handleAngkaTerakhirChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="berapaDigit"
                          placeholder="Berapa Digits"
                          value={berapaDigit}
                          onChange={handleBerapaDigitChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="number"
                          name="berapaGenerate"
                          placeholder="Prediksi Berapa?"
                          value={berapaGenerate}
                          onChange={handleBerapaGenerateChange}
                          required
                        />
                      </div>
                      <div className="form-button mt-3">
                        <button
                          id="submit"
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleGenerateClick}
                        >
                          Prediksi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 overflow-x-auto">
              <div className="result">
                <h3>Result</h3>
                <table className="table mt-2">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Prediksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {errorMessage ? (
                      <tr>
                        <td colSpan="2">{errorMessage}</td>
                      </tr>
                    ) : (
                      hasilGenerate.map((hasil, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{hasil}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Togel;
