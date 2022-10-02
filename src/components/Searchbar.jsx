import styled from "styled-components";
// import Icon from "./Icon";
import { MovieContext } from "../context-api/MovieContext";
import { useContext } from "react";

const Searchbar = () => {

    const { searchTerm, handleSearch } = useContext(MovieContext);

    return (
        <SearchSection>
            <div className="container xs">
                <form>
                    <label htmlFor="header-search" className="visually-hidden">Search</label>
                    <input type="search" name="search" autoComplete="off" placeholder="Search" id="header-search" value={searchTerm} onChange={handleSearch} />
                    {/* <button type="submit"><Icon name="search" /></button> */}
                </form>
            </div>
        </SearchSection>
    )
}

const SearchSection = styled.section`
    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 15px 0;
        
        input {
            width: 100%;
            padding: 16px;
            border: 0;
            border: 1px solid #4c4545;
            border-radius: 0;
            border-radius: 5px;
            font-size: 1.2rem;

            &:focus {
                border-color: #000;
            }
        }
        button {
            width: 50px;
            background: #000;
            color: #fff;
            padding: 16px;
            border: 0;
            cursor: pointer;
            border: 1px solid #000;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;

            svg {
                stroke: #fff;
                stroke-width: 3px;
                width: 20px;
            }
        }
    }
`;

export default Searchbar;