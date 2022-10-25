import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "./components/Card";

import styles from "./style/style.module.css";
function App() {
  const [items, setItems] = useState();
  const BASE_URL = " https://62ac07b69fa81d00a7a869f3.mockapi.io/api/files";
  const URL_finished =
    " https://62ac07b69fa81d00a7a869f3.mockapi.io/api/files?fileStatus=true";
  const URL_notFinished =
    " https://62ac07b69fa81d00a7a869f3.mockapi.io/api/files?fileStatus=false";

  const handleChange = (event) => {
    if (event.target.value === "false") {
      const fetchData = async () => {
        const DataResource = await fetch(URL_notFinished);
        const data = await DataResource.json();
        setItems(data);
      };
      fetchData();
    } else if (event.target.value === "true") {
      const fetchData = async () => {
        const DataResource = await fetch(URL_finished);
        const data = await DataResource.json();
        setItems(data);
      };
      fetchData();
    }
  };
  const deleteFile = (id) => {
    const newFilmInfo = items.filter((item) => item.id !== id);
    setItems(newFilmInfo);

    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <Container className={styles.nav}>
      <Navbar bg="light" expand="lg">
        <Container fluid style={{ direction: "rtl" }}>
          <Navbar.Brand>پرونده های من </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <form onChange={(event) => handleChange(event)}>
                <div style={{ margin: "10px", display: "inline-flex" }}>
                  <p>تکمیل شده</p>
                  <input value="false" type="radio" name="radio" />
                </div>
                <div style={{ margin: "10px", display: "inline-flex" }}>
                  <p>تکمیل نشده</p>
                  <input value="true" type="radio" name="radio" />
                </div>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Container className={styles.test}>
          {items?.map((item) => (
            <div key={item.id}>
              <div id={item.id}>
                <Card infos={item} deleteFile={deleteFile}></Card>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </Container>
  );
}

export default App;
