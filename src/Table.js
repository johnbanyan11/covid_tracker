import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("000,000")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
