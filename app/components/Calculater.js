"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

const Calculater = () => {
  const [cigarettesPerDay, setCigarettesPerDay] = useState(30);
  const [cigarettesPerBox, setCigarettesPerBox] = useState(30);
  const [pricePerBox, setPricePerBox] = useState(30);
  const [stopSmokingDate, setStopSmokingDate] = useState("2024-12-24");

  const [results, setResults] = useState(null);

  // ✅ formatter for euro with thousand separators, no decimals
  const formatEuro = (value) =>
    value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + "€";

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

    const savedSinceQuit = dailySaved * diffDays;
    const cigsSinceQuit = cigarettesPerDay * diffDays;

    const dailySaving = dailySaved;
    const years = diffDays / 365;

    // ✅ annuity formula with daily contributions
    const invested3 =
      dailySaving *
      ((Math.pow(1 + 0.03 / 365, 365 * years) - 1) / (0.03 / 365));

    const invested5 =
      dailySaving *
      ((Math.pow(1 + 0.05 / 365, 365 * years) - 1) / (0.05 / 365));

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
  };

  return (
    <section className="container ">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-[960px] mx-auto">
        <h2 className="text-xl font-bold mb-4">💰 Smoke-free calculator</h2>

        {/* Inputs */}
        <div className="mb-4">
          <label className="block font-medium">Consumption of cigarettes per day</label>
          <input
            type="number"
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Cigarettes per pack</label>
          <input
            type="number"
            value={cigarettesPerBox}
            onChange={(e) => setCigarettesPerBox(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Price per box (€)</label>
          <input
            type="number"
            step="0.01"
            value={pricePerBox}
            onChange={(e) => setPricePerBox(+e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Stopped smoking on</label>
          <input
            type="date"
            value={stopSmokingDate}
            onChange={(e) => setStopSmokingDate(e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-blue-600 text-white py-3 rounded-md"
        >
          Calculate
        </button>
      </div>

      {results && (
        <div className="bg-white rounded-lg shadow p-6 mt-6 w-full max-w-[960px] mx-auto">
          <h2 className="text-lg font-bold mb-4">📊 Calculation</h2>
          <div className="divide-y">
            <div className="flex justify-between py-2">
              <span>Saved per year</span>
              <span>{formatEuro(results.yearlySaved)}</span>
              <span>{results.yearlyCigs} cigarettes</span>
            </div>
            <div className="flex justify-between py-2">
              <span>That is per day</span>
              <span>{formatEuro(results.dailySaved)}</span>
              <span>{cigarettesPerDay} cigarettes</span>
            </div>
            <div className="flex justify-between py-2">
              <span>That is per month</span>
              <span>{formatEuro(results.monthlySaved)}</span>
              <span>{results.monthlyCigs} cigarettes</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Saved since you quit smoking</span>
              <span>{formatEuro(results.savedSinceQuit)}</span>
              <span>{results.cigsSinceQuit} cigarettes</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Invested at 3% pa</span>
              <span>{formatEuro(results.invested3)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Invested at 5% pa</span>
              <span>{formatEuro(results.invested5)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Calculater;
