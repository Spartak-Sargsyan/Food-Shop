import { useState } from "react";
import "./Search.css";

const Search = ({ func }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = () => func(search);
    
    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleChange = (e) => setSearch(e.target.value);

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    name="search"
                    id="search-field"
                    placeholder="Search"
                    onKeyDown={handleKey}
                    onChange={handleChange}
                    value={search}
                />
                <button className="btn btn-me" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
