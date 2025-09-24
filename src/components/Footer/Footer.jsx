import { useState } from "react";

function Footer({setx1,x1}) {

  return (
    <>
      <footer>
        <h2>Componente de React: {x1}</h2>
        <button
          onClick={() => {
            setx1("Nuevo Valor");
          }}
        >
          Actualizar Estado
        </button>
      </footer>
    </>
  );
}
export default Footer;
