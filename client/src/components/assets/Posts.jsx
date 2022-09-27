import React, { useEffect } from "react";
import { usePublicaciones } from "../../hooks/usePublicaciones.jsx";

export const Posts = () => {
  const { getPublicaciones } = usePublicaciones();
  const { publicaciones } = usePublicaciones();

  useEffect(() => {
    getPublicaciones();
  }, []);

  return (
    <>
      {publicaciones &&
        publicaciones.map((valor) => (
          <div className="card main" key={valor._id}>
            <div className="card-header">{valor.createdAt}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{valor.contenido}</p>
              </blockquote>
            </div>
          </div>
        ))}
    </>
  );
};
