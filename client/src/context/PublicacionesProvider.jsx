import React, { useState, createContext } from "react";
import axios from "axios";
const PublicacionesContext = createContext();

export const PublicacionesProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);

  // Se obtienen todas las publicaciones:
  const getPublicaciones = async () => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/get-publicacion`;
    try {
      const { data } = await axios.get(url);
      setPublicaciones(data);
    } catch (e) {
      console.log("Error in the request");
    }
  };

  // Se obtienen todas las publicaciones del usuario:
  const getPublicacionesId = async (datos) => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/get-publicacion/${datos}`;
    try {
      const { data } = await axios.get(url);
      setPublicaciones(data);
    } catch (e) {
      console.log("Error in the request");
    }
  };

  // Se elimina una publicacion:
  const deletePublicacion = async (datos) => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/delete-publicacion/${datos}`;
    try {
      await axios.delete(url).then((res) => {
        alert(res.data);
      });
    } catch (e) {
      alert("No se pudo eliminar la publicacion");
    }
  };

  // Se genera una publicacion:
  const postPublicacion = async (datos) => {
    const url = `http://${process.env.REACT_APP_BACKEND_URL}/post-publicacion`;
    try {
      await axios
        .post(url, {
          contendio: datos,
        })
        .then((res) => {
          alert(res.data);
        });
    } catch (e) {
      alert("No se realizar la publicacion");
    }
  };

  return (
    <PublicacionesContext.Provider
      value={{
        getPublicaciones,
        getPublicacionesId,
        deletePublicacion,
        postPublicacion,
        publicaciones,
      }}
    >
      {children}
    </PublicacionesContext.Provider>
  );
};

export default PublicacionesContext;
