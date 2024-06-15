import React, { useState } from 'react';
import './App.css';

// Función para formatear números como pesos colombianos y quitar los dos últimos ceros
const formatCurrency = (value) => {
  let formattedValue = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value);
  
  // Eliminar los dos últimos ceros si existen
  formattedValue = formattedValue.replace(/(\,00$)/, '');
  
  return formattedValue;
};

function TipCalculator() {
  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('5');
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const handleTotalChange = (e) => setTotal(e.target.value);
  const handlePeopleChange = (e) => setPeople(e.target.value);
  const handleTipChange = (e) => setTip(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedTip = (total * tip) / 100;
    const calculatedTotalAmount = parseFloat(total) + parseFloat(calculatedTip);
    const calculatedTotalPerPerson = calculatedTotalAmount / people;

    setTotalTip(calculatedTip.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
    setTotalPerPerson(calculatedTotalPerPerson.toFixed(2));
  };

  return (
    <section className="w-[600px] bg-blue-600 p-8 rounded-2xl">
      <div className="App">
        <h1 className="text-4xl text-white font-bold">Tip Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label className="text-white">El total de la cuenta es de:</label>
          <input
            type="number"
            name="total"
            value={total}
            onChange={handleTotalChange}
            id="total"
            className="block w-full p-2 mb-4 mt-5"
          />
          <label className="text-white">Número de personas:</label>
          <input
            type="number"
            value={people}
            onChange={handlePeopleChange}
            name="people"
            min={1}
            id="people"
            className="block w-full p-2 mb-4 mt-5"
          />
          <label className="text-white">Porcentaje de propina:</label>
          <select
            name="tip"
            value={tip}
            onChange={handleTipChange}
            id="tip"
            className="block w-full p-2 mb-4 mt-5"
          >
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
          <div className="flex flex-col gap-y-3 items-start mt-5">
            <span id="porPersona" className="text-white">
            <strong className="text-blue-900 font-bold"> Cada persona debe pagar:</strong> {formatCurrency(totalPerPerson)}
            </span>
            <span className="text-white">
            <strong className="text-blue-900 font-bold">Total de propina: </strong>{formatCurrency(totalTip)}
            </span>
            <span className="text-white">
              <strong className="text-blue-900 font-bold">Total a pagar: </strong>{formatCurrency(totalAmount)}
            </span>
          </div>
          <button
            type="submit"
            className="bg-white mt-5 text-blue-600 p-2 rounded-md w-full hover:bg-blue-400 hover:text-white transition-all"
          >
            Calcular
          </button>
        </form>
      </div>
    </section>
  );
}

export default TipCalculator;
