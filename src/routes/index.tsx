import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Article, {
  BenedekDevLink,
  Placeholder,
} from "~/components/article/article";

export const head: DocumentHead = {
  title: "benedek.dev - collection",
  meta: [
    {
      name: "description",
      content:
        "Project I made to have my play-around-projects collected in a portfolio like style.",
    },
  ],
};

export default component$(() => {
  return (
    <main
      class={
        "grid w-full flex-grow grid-cols-1 flex-wrap gap-2 py-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
      }
      style={"grid-auto-rows: minmax(15rem, auto);"}
    >
      <Article
        name="Collection of Stuff I Made"
        type="XP"
        links={{
          BenedekDev: "/" as BenedekDevLink,
          source: {
            GitHub: "https://github.com/benhalasi/me",
          },
        }}
      >
        <>
          <p>
            Project I made to have my play-around-projects collected in a
            portfolio like style.
          </p>
          <p>
            The stack is quite simple; built with{" "}
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
            . Hosted with SSG and GitHub Pages
          </p>
        </>
      </Article>
      <Article
        name="Language Learning Webapp"
        type="SP"
        links={{
          BenedekDev: "https://vocab.benedek.dev/",
          source: {},
        }}
      >
        <Placeholder />
      </Article>
      <Article
        name="Authentication for Qwik"
        type="SP"
        links={{
          source: {},
        }}
      >
        <p>
          Spring Authentication like module for Qwik, to enable an easier
          implementation of sessions and authorization in qwik projects.
        </p>
        <p>
          The general goals of the project
          <ul>
            <li>
              Providing configurable, minimum code{" "}
              <a
                href="https://qwik.builder.io/qwikcity/data/overview/#request-and-response-handlers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Handlers
              </a>{" "}
              with the needed authentication level.
            </li>
            <li>
              Strongly encapsulating - hiding - sessions thus preventing session
              and authorization related issues.
            </li>
          </ul>
        </p>
      </Article>
      <Article
        name="Pastry Shop"
        type="POC"
        links={{
          BenedekDev: "https://pastry.benedek.dev/",
        }}
      >
        <Placeholder />
      </Article>
      <Article
        name="MVC page independent widget"
        type="POC"
        links={{
          source: {
            GitHub:
              "https://github.com/benhalasi/spring-web-mvc-module-independent-widget",
          },
        }}
      >
        <p>
          Solution to the problem of having the same instance of{" "}
          <em>interactable UI fragment</em> on multiple pages in an MVC
          arhitecture.
        </p>
      </Article>
    </main>
  );
});
