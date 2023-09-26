import Cabecalho from "components/Cabecalho";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";
import FavoritosContext from "contextos/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        {/* rotas aninhadas pois tem rotas dentro da rota paginabase */}
                        <Route path="/" element = {<PaginaBase />}>
                            <Route index element={<Inicio />}></Route> {/*entende direto q é a pagina index msm sem o path*/}
                            <Route path="favoritos" element={<Favoritos />}></Route>
                            <Route path="videos/:id" element={<Player />}></Route>{/*dois ponto faz a URL dinâmica*/}
                            <Route path="*" element={<NaoEncontrada />}></Route>{/*quando a pagina n é encontrada*/}
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;