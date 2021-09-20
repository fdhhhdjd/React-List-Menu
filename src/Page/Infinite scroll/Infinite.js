import React, { useEffect, useState } from "react";
import { Card, Button, Space } from "antd";
const clientID = "?client_id=Kjvc6jsM_edLeH0xVdPi6q69NLSvaRvUckg7plajh1k";
const mainUrl = "https://api.unsplash.com/photos/";
const searchUrl = "https://api.unsplash.com/search/photos/";

const Infinite = () => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const fetchApiImage = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPhoto((oldPhoto) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhoto, ...data.results];
        } else {
          return [...oldPhoto, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };
  useEffect(() => {
    fetchApiImage();
  }, [page]);
  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);
  return (
    <div className="container">
      <h2>Infinite image 😇</h2>
      <Space style={{ marginBottom: 16, marginTop: 10 }}>
        <input
          type="text"
          placeholder="search"
          value={query}
          style={{ width: 300 }}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
        />
        <Button type="primary" onClick={handelSubmit}>
          Search
        </Button>
      </Space>
      <div className="row">
        {photo.map((image, index) => (
          <>
            <div className="col-md-4">
              <Card
                cover={
                  <img
                    src={image.urls.regular}
                    alt="Image"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                }
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Infinite;
