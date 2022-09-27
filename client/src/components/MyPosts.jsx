import React, { useEffect } from "react";
import { usePublicaciones } from "../hooks/usePublicaciones.jsx";
import { Helmet } from "react-helmet";

export const MyPosts = () => {
  const { getPublicacionesId } = usePublicaciones();
  const { deletePublicacion } = usePublicaciones();
  const { publicaciones } = usePublicaciones();

  useEffect(() => {
    const usuarioId = 1;
    getPublicacionesId(usuarioId);
  }, []);

  const handleClick = (datos) => {
    deletePublicacion(datos);
    window.location.reload(false);
  };

  return (
    <div className="container">
      <Helmet>
        <title>My Posts | Posts Web</title>
      </Helmet>
      {publicaciones &&
        publicaciones.map((valor) => (
          <div className="card main" key={valor._id}>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{valor.contenido}</p>
              </blockquote>
              <div className="my-posts-buttons">
                <button
                  type="button"
                  className="btn btn-primary text-uppercase"
                  onClick={() => handleClick(valor._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
