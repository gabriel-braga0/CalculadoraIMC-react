import React from "react";
import Header from "./components/Header";
import CalculadoraImc from "./components/CalculadoraImc";
import Footer from "./components/Footer";

const App = () => {
  return (
    //para o footer ficar no final da tela
    <div data-theme="cyberpunk" className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header title={"Calculadora IMC"} />
        <CalculadoraImc />
      </main>
      <Footer nome={"Gabriel Braga"} />
    </div>
  );
};

export default App;
