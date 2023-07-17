import { useEffect, useState } from "react";
import Preloader from "../../components/Preloader/Preloader";
import { getAllCatagores } from "../../services/services";
import CategoreList from "../../components/CategoreList/CategoreList";
import Search from "../../components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filter, setFilter] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilter(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCatagores().then((res) => {
            setCatalog(res.categories);
            setFilter(
                search
                    ? res.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : res.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search func={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoreList catalog={filter} />
            )}
        </>
    );
};

export default Home;
