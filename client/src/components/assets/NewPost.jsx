import React, { useState } from "react";
import Swal from "sweetalert2";

export const NewPost = () => {
  const [publicacion, setPublicacion] = useState("");

  const handleClick = () => {
    Swal.fire({
      html: `<form>
        <div class="mb-3">
        <label class="form-label">NEW POST</label>
        <textarea class="form-control" name="contenido" rows="3"
        required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">POST</button>
        </form>
 `,
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <div className="text-center main">
      <button
        type="button"
        className="btn btn-primary text-uppercase"
        onClick={() => handleClick()}
      >
        New Post
      </button>
    </div>
  );
};
