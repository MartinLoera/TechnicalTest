import { addPost } from "./helpers/addPost";
import { deletePost } from "./helpers/deletePost";
import { getPosts } from "./helpers/getPosts";
import { getPostsById } from "./helpers/getPostsById";
import { updatePost } from "./helpers/updatePost";

export const TechnicalTestApp = () => {

  return (
    <>
        <div>
            Appbar
        </div>

        <form >
            <input type="text" placeholder="Buscar Post por id"/>
        </form>

        <button>Crear publicacion</button>

        <div>
            publicaciones 
            <button>Eliminar Post</button>
            <button>Remplazar Post</button>

        </div>


    </>
  )


}
