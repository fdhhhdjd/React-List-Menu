import React from "react";
import ReactToExcel from "react-html-table-to-excel";

const Table = () => {
  const handleCalculation = (type) => {
    switch (type) {
      case "summation":
        var arr = [];
        while (arr.length < 90) {
          var a = Math.floor(Math.random() * 10);
          var b = Math.floor(Math.random() * 10);
          var text = a.toString() + " + " + b.toString() + " = ";
          if (!arr.includes(text)) {
            arr.push(text);
          }
        }
        var table = document.getElementById("mytable");
        var output = "";
        for (var i = 1; i <= 30; i++) {
          output += "<tr>";
          for (var j = 0 + 3 * (i - 1); j < 3 * i; j++) {
            console.log(arr[j]);
            output += "<td style='font-size:23px;'>" + arr[j] + "</td>";
          }
          output += "<tr>";
        }
        table.innerHTML = output;
        break;
    }
  };
  return (
    <>
      <div>
        <span>Phép Cộng</span>&nbsp;
        <button onClick={() => handleCalculation("summation")}>+</button>{" "}
        &nbsp;&nbsp;
        <span>Phép Trừ</span>&nbsp;
        <button onClick={() => handleCalculation("Subtraction")}>-</button>
        &nbsp;&nbsp;
        <span>Phép Nhân</span>&nbsp;
        <button onClick={() => handleCalculation("multiplication")}>*</button>
        &nbsp;&nbsp;
        <span>Phép Chia</span>&nbsp;
        <button onClick={() => handleCalculation("division")}>/</button>
        &nbsp;&nbsp;
        <ReactToExcel
          table="mytable"
          filename="excelFile"
          sheet="sheet 1"
          buttonText="EXPORT"
        />{" "}
        &nbsp;&nbsp;
        <h2>React Calculation</h2>
      </div>
      <table id="mytable"></table>
    </>
  );
};

export default Table;
