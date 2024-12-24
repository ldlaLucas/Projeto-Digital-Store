import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="NotFound">
      <h1>404 PAGINA NÃO ENCONTRADA</h1>
      <p>
        A pagina que esta procurando nao existe, contate o suporte ou volte para
        a pagina inicial no botao a baixo.
      </p>
      <button
        className="NotFoundButton"
        onClick={() => navigate("/")}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = "var(--dark-gray-2)")
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = "var(--primary)")
        }
      >
        Voltar para Home
      </button>
    </div>
  );
};

export default NotFound;