import React, { useState } from "react";

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ display: "block" }}>
        <b style={{ marginBottom: "5px" }}>Anotação</b>
      </div>
      <div>
        <select
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px 10px",
            paddingRight: "30px",
            fontSize: "14px",
            width: "500px",
          }}
          name=""
          value={selectedOption}
        //   onChange={handleOptionChange}
        >
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="#">Todos</option>
          <option value="#">Ativos</option>
          <option value="#">Desativados</option>
        </select>
      </div>
    </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <div style={{ display: "block" }}>
          <b style={{ marginBottom: "5px" }}>Criado por</b>
        </div>
        <div>
          <select
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "5px 10px",
              paddingRight: "30px",
              fontSize: "14px",
              width: "500px",
            }}
            name=""
            value={selectedOption}
            // onChange={handleOptionChange}
          >
            <option value="" disabled selected>
              Selecione uma opção
            </option>
            <option value="#">Todos</option>
            <option value="#">Ativos</option>
            <option value="#">Desativados</option>
          </select>
        </div>
      </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ display: "block" }}>
            <b style={{ marginBottom: "5px" }}>Visivel para o cliente</b>
          </div>
          <div>
            <select
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "5px 10px",
                paddingRight: "30px",
                fontSize: "14px",
                width: "500px",
              }}
              name=""
              value={selectedOption}
            //   onChange={handleOptionChange}
            >
              <option value="" disabled selected>
                Selecione uma opção
              </option>
              <option value="#">Todos</option>
              <option value="#">Ativos</option>
              <option value="#">Desativados</option>
            </select>
          </div>
        </div>
        </>
  );
};

export default SelectComponent;
