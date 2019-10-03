import React from "react";
import { Link } from "gatsby-plugin-intl";
import { Visible, Hidden } from "react-grid-system";

import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          margin: "auto",
        }}
      >
        <img
          alt="404 Corgi"
          src={require("../images/corgi.jpg")}
          style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            margin: "auto",
            display: "block",
            position: "relative",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: 5,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          ERROR 404: CORGI FOUND
        </h1>
        <Hidden xs sm>
          <p
            style={{
              position: "absolute",
              top: 50,
              color: "white",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
            }}
          >
            Congrat you've found the corgi 😊
            <br /> Now you can return to the home page by touching (clicking)
            its cute snout 🥰
          </p>
        </Hidden>
        <Link
          to="/"
          style={{
            position: "absolute",
            width: "9%",
            height: "12%",
            top: "37%",
            left: "72%",
            opacity: 0,
          }}
        />
      </div>
      <Visible xs sm>
        <p style={{ textAlign: "center" }}>
          Congrat you've found the corgi 😊
          <br /> Now you can return to the home page by touching (clicking) its
          cute snout 🥰
        </p>
      </Visible>
    </div>
  </Layout>
);

export default NotFoundPage;
