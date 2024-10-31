import React, { useState } from "react";

export default function CalculadoraImc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularImc(event) {
    event.preventDefault();
    const imcCalculado = (peso / ((altura / 100) * (altura / 100))).toFixed(2);
    if (imcCalculado == "NaN") {
      setResultado("");
    } else if (imcCalculado < 18.5 && imc != "") {
      setResultado("Baixo peso");
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
      setResultado("Eutrofia (peso adequado)");
    } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
      setResultado("Sobrepeso");
    } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
      setResultado("Obesidade grau 1");
    } else if (imcCalculado >= 35 && imcCalculado <= 39.9) {
      setResultado("Obesidade grau 2");
    } else if (imcCalculado >= 40) {
      setResultado("Obesidade extrema");
    }
    setImc(imcCalculado);
  }

  return (
    <div
      className="grid pt-10 place-items-center min-h-[70vh]"
      data-theme="cyberpunk"
    >
      <form onSubmit={calcularImc}>
        <label
          onChange={(e) => setPeso(e.target.value)}
          className="input input-bordered flex items-center gap-2 my-5"
        >
          <i className="fa-solid fa-weight-hanging"></i>
          <input
            id="peso"
            type="text"
            name="peso"
            placeholder="Digite seu peso"
            className="grow"
          />
        </label>

        <label
          onChange={(e) => {
            setAltura(e.target.value);
          }}
          className="input input-bordered flex items-center gap-2 my-5"
        >
          <i className="fa-solid fa-ruler-vertical"></i>
          <input
            id="altura"
            type="text"
            name="altura"
            placeholder="Digite sua altura em cm"
            className="grow"
          />
        </label>
        <p></p>
        <button className="btn btn-wide">Calcular IMC</button>
      </form>

      <div className="stats bg-base-200 shadow">
        <div className="stat place-items-center">
          <div className="stat-title">IMC</div>
          <div className="stat-value">{imc != "NaN" ? imc : ""}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Classificação</div>
          <div className="stat-value ">{resultado}</div>
        </div>
      </div>
    </div>
  );
}
