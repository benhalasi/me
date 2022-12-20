import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
  <Article
    name="Pastry Shop"
    type="POC"
    links={{
      live: "https://benhalasi.github.io/pastry/",
      source: {
        GitHub: "https://github.com/benhalasi/pastry",
      },
    }}
  >
    <p>Example website for a pastry shop.</p>
    <p>
      The UI is built with{" "}
      <a
        href="https://m2.material.io/design"
        target="gmd"
        rel="noopener noreferrer"
      >
        Google Material Design
      </a>
      , configured with webpack, it also has a fully fledged Java Spring
      back-end configured.
    </p>
  </Article>
));
