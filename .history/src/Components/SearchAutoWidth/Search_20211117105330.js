import React, { useState, useEffect } from "react";
import search from "../../Image/search.svg";
import download from "../../Image/download.svg";
import styled from "styled-components";
const REACT_API_KEY = "1LHNQ9uiuk0L4Sh3vbYK5QHE7WtjJR3rLrVGiRwe8AU";
const accessKey = `?client_id=${REACT_API_KEY}`;

const baseLink = `https://api.unsplash.com/photos/`;
const searchLink = `https://api.unsplash.com/search/photos`;
const Search = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 5
      ) {
        setPage((oldValue) => {
          return oldValue + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Html Markup
  const FormRender = () => {
    return (
      <form action="" className="form">
        <div className="input-control">
          <input
            type="text"
            placeholder="Search for Items e.g Mountain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Search <img src={search} alt="" />
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <AppStyled>
        <header className="header">{FormRender()}</header>
      </AppStyled>
    </>
  );
};
const AppStyled = styled.div`
  header {
    height: 30vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #25354c;
    margin-bottom: 5rem;
    form {
      display: flex;
      justify-content: center;
      width: 50%;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 575px) {
        width: 90%;
      }
      .input-control {
        position: relative;
        width: 70%;
        margin: 0 auto;
        text-align: center;
        transition: all 0.4s ease-in-out;
        @media screen and (max-width: 1064px) {
          width: 80%;
        }
        @media screen and (max-width: 852px) {
          width: 90%;
        }
        @media screen and (max-width: 695px) {
          width: 95%;
        }
        input {
          padding: 0.6rem 2rem;
          background-color: #4f6877;
          outline: none;
          border: none;
          border-radius: 50px;
          filter: drop-shadow(0px 4px 22px rgba(0, 0, 0, 0.25));
          width: 100%;
          color: white;
          font-family: inherit;
        }
        button {
          position: absolute;
          right: 5px;
          top: 50%;
          outline: none;
          border: none;
          transform: translateY(-50%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.3rem 1.5rem;
          background-color: rgba(107, 190, 146, 1);
          cursor: pointer;
          border-radius: 50px;
          img {
            padding-left: 1rem;
          }
        }
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
    grid-auto-rows: 1fr;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 3rem;
    .photo {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background-color: #25354c;
      box-shadow: 1px 8px 23px rgba(0, 0, 0, 0.25);
      .image {
        flex: 2;
        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
      .details {
        color: white;
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;
        img {
          width: 30px;
        }
      }
    }
  }
`;
export default Search;
