"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

const Calculater = () => {
  // Modified state values to match the screenshot's results
  const [cigarettesPerDay, setCigarettesPerDay] = useState(25);
  const [cigarettesPerBox, setCigarettesPerBox] = useState(20);

  // Inferred from screenshot: Price per box to achieve 125.13€ daily savings for 25 cigarettes
  // (125.13 / 25) * 20 cigarettes/box = 5.0052 * 20 = 100.104
  const [pricePerBox, setPricePerBox] = useState(6.00);
  const [priceInput, setPriceInput] = useState("6,00"); // Formatted for German locale display

  // Inferred from screenshot: Date to achieve ~5950 cigarettes saved by current date (Aug 27, 2025)
  // 5950 cigarettes / 25 cigs/day = 238 days. Counting back 238 days from Aug 27, 2025, leads to Jan 2, 2025.
  const [stopSmokingDate, setStopSmokingDate] = useState("2024-12-31");
  const [results, setResults] = useState(null);

  // ✅ formatter for euro with German style
  // ✅ Format with German style, 2 decimals, € without space
  const formatEuroyearlySaved = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + "€";
  const formatEurodailySaved = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "€";
  const formatEuromonthlySaved = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "€";
  const formatEuroinvested = (value) =>
    value.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + "€";


  // ✅ For input blur formatting
  const formatGerman = (num) =>
    num.toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  const handlePriceChange = (e) => {
    let val = e.target.value;

    // ✅ Allow only digits and commas
    val = val.replace(/[^0-9,]/g, "");

    setPriceInput(val);

    // Convert German `,` → JS `.`
    const num = parseFloat(val.replace(",", "."));
    if (!isNaN(num)) {
      setPricePerBox(num);
    }
  };

  const handlePriceBlur = () => {
    setPriceInput(formatGerman(pricePerBox));
  };

  const calculate = () => {
    const pricePerCig = pricePerBox / cigarettesPerBox;

    const dailySaved = cigarettesPerDay * pricePerCig;

    const yearlySaved = dailySaved * 365;
    const yearlyCigs = cigarettesPerDay * 365;

    const monthlySaved = dailySaved * 30;
    const monthlyCigs = cigarettesPerDay * 30;

    const today = dayjs();
    const quitDate = dayjs(stopSmokingDate);
    const diffDays = today.diff(quitDate, "day");

    if (diffDays >= 0) {
      const savedSinceQuit = dailySaved * diffDays;
      const cigsSinceQuit = cigarettesPerDay * diffDays;

      // interest with exact days
      const invested3 =
        dailySaved *
        ((Math.pow(1 + 0.03 / 365, diffDays) - 1) / (0.03 / 365));

      const invested5 =
        dailySaved *
        ((Math.pow(1 + 0.05 / 365, diffDays) - 1) / (0.05 / 365));

      setResults({
        yearlySaved,
        yearlyCigs,
        dailySaved,
        monthlySaved,
        monthlyCigs,
        savedSinceQuit,
        cigsSinceQuit,
        invested3,
        invested5,
      });
    }
  };

  return (
    <section className="container ">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-[960px] mx-auto">
        <h2 className="text-xl font-bold mb-4">💰 Rauchfrei Rechner</h2>

        {/* Inputs */}
        <div className="mb-4">
          <label className="block font-medium">Konsum an Zigaretten pro Tag</label>
          <input
            type="number"
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Zigaretten pro Schachtel</label>
          <input
            type="number"
            value={cigarettesPerBox}
            onChange={(e) => setCigarettesPerBox(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Preis je Schachtel (€)</label>
          <input
            type="text"
            value={priceInput}
            onChange={handlePriceChange}
            onBlur={handlePriceBlur}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Aufgehört zu rauchen am</label>
          <input
            type="date"
            value={stopSmokingDate}
            onChange={(e) => setStopSmokingDate(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-[#1a609a] text-white py-3 rounded-md"
        >
          Berechnen
        </button>
      </div>

      {results && (
        <div className="bg-white rounded-lg shadow p-6 mt-6 w-full max-w-[960px] mx-auto">
          <h2 className="text-lg font-bold mb-4">🧮 Berechnung</h2>
          <div className="divide-y">
            <div className="flex justify-between py-2 font-semibold">
              <span>Gespart pro Jahr</span>
              <span>{formatEuroyearlySaved(results.yearlySaved)}</span>
              <span>{results.yearlyCigs.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Das sind pro Tag</span>
              <span>{formatEurodailySaved(results.dailySaved)}</span>
              <span>{cigarettesPerDay.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Das sind pro Monat</span>
              <span>{formatEuromonthlySaved(results.monthlySaved)}</span>
              <span>{results.monthlyCigs.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Gespart, seitdem du aufgehört hast zu rauchen</span>
              <span>{formatEuroyearlySaved(results.savedSinceQuit)}</span>
              <span>{results.cigsSinceQuit.toLocaleString("de-DE")} Zigaretten</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Angelegt zu 3% p.a</span>
              <span>{formatEuroinvested(results.invested3)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Angelegt zu 5% p.a.</span>
              <span>{formatEuroinvested(results.invested5)}</span>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};

export default Calculater;