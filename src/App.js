import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const getNumber = () => {
    let url = `http://numbersapi.com/${number}?json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNumber(data);
      });
  };

  const getDate = () => {
    let url = `http://numbersapi.com/${date}/date?json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    const [inputYear, inputMonth, inputDay] = inputDate.split("-");
    setDate({
      day: inputDay,
      month: inputMonth,
      year: inputYear,
    });
  };

  const submitNumber = (e) => {
    e.preventDefault();
    getNumber();
  };

  const submitDate = (e) => {
    e.preventDefault();
    getDate();
  };

  return (
    <main>
      <h1>Datos sobre números y fechas</h1>

      <section>
        <form>
          <input type="number" value={number} onChange={handleNumberChange} />
          <button type="submit" onClick={submitNumber}>
            Enviar
          </button>
          <h3>{number.text}</h3>
        </form>
      </section>

      <section>
        <form>
          <h2>Obtener un dato sobre una fecha</h2>
          <input type="date" value={date} onChange={handleDateChange}/>
          <button type="submit" onClick={submitDate}>
            Enviar
          </button>
          <h3>Dato sobre la fecha</h3>
          <p className="result-box"></p>
          <h3>Dato sobre el año</h3>
          <p className="result-box"></p>
        </form>
      </section>
    </main>
  );
}

export default App;
