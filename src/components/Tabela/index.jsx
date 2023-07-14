import React, { useState } from "react";
import logo from "../../logo.svg";
import { BsFillTrashFill, BsPencilSquare, BsFillEyeFill } from "react-icons/bs";
import FiltrosTabela from "./components/FiltrosTabela";

const Tabela = () => {
  const [hoveredItems, setHoveredItems] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const newHoveredItems = [...prevHoveredItems];
      newHoveredItems[index] = true;
      return newHoveredItems;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const newHoveredItems = [...prevHoveredItems];
      newHoveredItems[index] = false;
      return newHoveredItems;
    });
  };

  const teste = ["1", "2", "3"];

  return (
    <>
      <FiltrosTabela />
      <br />
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th
              style={{
                fontSize: "14px",
                paddingLeft: "30px",
                textAlign: "left",
                width: "140px",
                fontFamily: "sans-serif",
                color: "#999292",
              }}
            >
              <strong style={{ color: "#6c757d" }}>Criado por</strong>
            </th>
            <th
              style={{
                fontSize: "14px",
                padding: "8px",
                width: "500px",
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#999292",
              }}
            >
              <span style={{ color: "#6c757d" }}>Anotação</span>
            </th>
            <th
              style={{
                fontSize: "14px",
                padding: "8px",
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#999292",
              }}
            >
              <span style={{ color: "#6c757d" }}>Data</span>
            </th>
            <th
              style={{
                fontSize: "14px",
                padding: "8px",
                textAlign: "left",
                fontFamily: "sans-serif",
                color: "#999292",
              }}
            >
              <strong>Opções</strong>
            </th>
          </tr>
        </thead>
        {teste.map((item, index) => (
          <tbody key={index}>
            <tr
              style={{
                height: "200px",
                background: hoveredItems[index] ? "rgba(0, 0, 0, 0.1)" : "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "30px",
                  }}
                >
                  <img
                    src={logo}
                    alt="Avatar"
                    style={{ width: "72px", height: "72px", marginBottom: "4px" }}
                  />
                  <span
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#999292",
                    }}
                  >
                    Nome do Criador
                  </span>
                </div>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    bottom: "5px",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <h4 style={{ marginBottom: "4px", color: "#6c757d" }}>TESTE</h4>
                    <p style={{ marginBottom: "4px", color: "#999292" }}>
                      Descrição curta da anotação
                    </p>
                    <div>
                      <a href="#" style={{ color: "#0264b9" }}>
                        <strong>Ver mais</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ textAlign: "left" }}>
                <strong
                  style={{
                    position: "relative",
                    bottom: "50px",
                    fontFamily: "sans-serif",
                    color: "#999292",
                  }}
                >
                  03/05/2023
                </strong>
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    bottom: "20px",
                  }}
                >
                  <BsPencilSquare style={{ margin: "5px", color: "#538bf1" }} />
                  <BsFillTrashFill style={{ margin: "5px", color: "red" }} />
                  <BsFillEyeFill style={{ margin: "5px", color: "#2c4664" }} />
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Tabela;
