"use client";
import { useState, useEffect } from "react";

export default function DealControls() {
  const [lowerPrice, setLowerPrice] = useState("10");
  const [upperPrice, setUpperPrice] = useState("40");
  const [numberResults, setNumberResults] = useState("15");

  useEffect(() => {
    // TODO: EXECUTE QUERY ON CHANGE, UPDATE DATA

    if (lowerPrice) {
      console.log(`Min: $${lowerPrice}`);
    }

    if (upperPrice) {
      console.log(`Max: $${upperPrice}`);
    }

    if (numberResults) {
      console.log(`Number results: ${numberResults}`);
    }
  }, [lowerPrice, upperPrice, numberResults]);

  return (
    <div className="flex gap-4 items-center justify-center p-4 bg-slate-800">
      <div>
        <label className="mr-1 text-white">Min $: </label>
        <select
          value={lowerPrice}
          name="lowerPrice"
          id="lowerPrice"
          onChange={(e) => setLowerPrice(e.target.value)}
          className="p-1 rounded-md"
        >
          <option value="">Choose</option>
          <option value="0">$0</option>
          <option value="10">$10</option>
          <option value="20">$20</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="60">$60</option>
          <option value="70">$70</option>
          <option value="80">$80</option>
          <option value="90">$90</option>
          <option value="100">$100</option>
        </select>
      </div>

      <div>
        <label className="mr-1 text-white">Max $: </label>
        <select
          value={upperPrice}
          name="upperPrice"
          id="upperPrice"
          onChange={(e) => setUpperPrice(e.target.value)}
          className="p-1 rounded-md"
        >
          <option value="">Choose</option>
          <option value="0">$0</option>
          <option value="10">$10</option>
          <option value="20">$20</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="60">$60</option>
          <option value="70">$70</option>
          <option value="80">$80</option>
          <option value="90">$90</option>
          <option value="100">$100</option>
        </select>
      </div>

      <div>
        <label className="mr-1 text-white"># Results: </label>
        <select
          value={numberResults}
          name="numberResults"
          id="numberResults"
          onChange={(e) => setNumberResults(e.target.value)}
          className="p-1 rounded-md"
        >
          <option value="">Choose</option>
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
          <option value="20">20 per page</option>
          <option value="25">25 per page</option>
          <option value="30">30 per page</option>
        </select>
      </div>
    </div>
  );
}
