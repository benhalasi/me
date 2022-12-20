import { component$ } from "@builder.io/qwik";
import Article, { BenedekDevLink } from "../article";

export default component$(() => (
  <Article
    name="Collection"
    type="XP"
    links={{
      live: "/" as BenedekDevLink,
      source: {
        GitHub: "https://github.com/benhalasi/me",
      },
    }}
  >
    <>
      <p>
        Project I made to have my play-around-projects collected in a portfolio
        like style.
      </p>
      <p>
        The stack is quite simple;{" "}
        <a
          href="https://qwik.builder.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qwik
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind
        </a>
        . SSG and deploying with GitHub workflows to GitHub Pages and Firebase.
      </p>
    </>
  </Article>
));
