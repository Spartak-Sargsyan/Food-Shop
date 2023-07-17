import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import { Routing } from "./constant/RouteConstant";
import { Route, Routes } from "react-router-dom";
import Recipe from "./pages/Recipe/Recipe";
function App() {
    return (
        <>
            <Header />
            <main className="container content">
                <Routes basename="/react-food">
                    <Route exact path={Routing.home} element={<Home />} />
                    <Route
                        path={`${Routing.category}/:name`}
                        element={<Category />}
                    />
                    <Route path={`${Routing.meal}/:id`} element={<Recipe />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
