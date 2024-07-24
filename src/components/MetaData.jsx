import React, { useEffect } from "react";

export default function MetaData({ title, description }) {
  useEffect(() => {
    // Function to create and append a meta tag
    const appendMetaTag = (name, content, property = false) => {
      const meta = document.createElement("meta");
      if (property) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
    };

    // Set the document title
    document.title =
      title ||
      "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH";

    // Create and append meta tags
    appendMetaTag(
      "description",
      description ||
        "Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
    );
    appendMetaTag(
      "og:title",
      title ||
        "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH",
      true
    );
    appendMetaTag(
      "og:description",
      description ||
        "Welcome to AADYAH, a pioneering force in space technology innovation and exploration.",
      true
    );
    appendMetaTag(
      "twitter:title",
      title ||
        "AADYAH Aerospace Trusted by the ones who push the boundaries | AADYAH"
    );
    appendMetaTag(
      "twitter:description",
      description ||
        "Welcome to AADYAH, a pioneering force in space technology innovation and exploration."
    );

    // Cleanup function to remove the appended tags
    return () => {
      document.head
        .querySelectorAll(
          'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]'
        )
        .forEach((meta) => meta.remove());
    };
  }, [title, description]);

  return null; // This component does not render any visible output
}
