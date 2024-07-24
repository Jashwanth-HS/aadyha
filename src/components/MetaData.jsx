import Head from "next/head";
import React from "react";

export default function MetaData({ title, description }) {
  return (
    <head>
      <title>
        {title ||
          "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH "}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
        }
      />
      <meta
        property="og:title"
        content={
          title ||
          "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH "
        }
      />
      <meta
        property="og:description"
        content={
          description ||
          "Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
        }
      />
      <meta
        name="twitter:title"
        content={
          title ||
          "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH "
        }
      ></meta>
      <meta
        name="twitter:description"
        content={
          description ||
          "Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
        }
      ></meta>
    </head>
  );
}
