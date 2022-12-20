import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
  <Article
    name="Heroicons for Qwik"
    type="XP"
    links={{
      source: {
        GitHub: "https://github.com/benhalasi/heroicons-x-qwik",
        Npm: "https://www.npmjs.com/package/heroicons-x-qwik",
      },
    }}
  >
    <p>
      <a
        href="https://heroicons.com/"
        target="heroicons"
        rel="noopener noreferrer"
      >
        Heroicons
      </a>{" "}
      is an icon library for vue and react. This project ports it to{" "}
      <a
        href="https://qwik.builder.io/"
        target="qwik"
        rel="noopener noreferrer"
      >
        Qwik
      </a>
    </p>
  </Article>
));
