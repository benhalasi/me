import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Article, { BenedekDevLink } from "~/components/article/article";

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
        name="Collection"
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
            . SSG and deploying with GitHub workflows to GitHub Pages and
            Firebase.
          </p>
        </>
      </Article>
      <Article
        name="Vocab"
        type="SP"
        links={{
          BenedekDev: "https://vocab.benedek.dev/",
          source: {
            GitHub: "https://github.com/benhalasi/vocab",
          },
        }}
      >
        <p>
          Web Application for building foreign vocabulary. It handles users,
          vocabulary-sets, and produces questions for the users based on their
          previous answares.
        </p>
        <div>
          Current stack, orchastrated by kubernetes:
          <ul class="prose-sm mt-0">
            <li>db - postgres</li>
            <li>
              vocab-core - enables querying and modifying data via REST Api
              documented by open-api and swagger. It's built on java, quarkus.
            </li>
            <li>
              vocab-front - handles UI and authorizing users, built on nodejs
              and qwik.
            </li>
          </ul>
        </div>
      </Article>
      <Article
        name="Authentication for Qwik"
        type="SP"
        links={{
          source: {},
        }}
      >
        <p>
          It's like the authentication part of Spring Security but for Qwik, to
          enable an easier implementation of sessions and authorization in qwik
          projects.
        </p>
        <p>
          Big challange that this project tacles is that Qwik does not have
          support for general request intercepting (or for AOP).
        </p>
        <div>
          The general goals of the project:
          <ul class="prose-sm mt-0">
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
        </div>
      </Article>
      <Article
        name="Pastry Shop"
        type="POC"
        links={{
          BenedekDev: "https://benhalasi.github.io/pastry/" as BenedekDevLink,
          source: {
            GitHub: "https://github.com/benhalasi/pastry",
          },
        }}
      >
        <p>Example website for a pastry shop.</p>
        <p>
          The UI is built with Google Material Design, configured with webpack,
          it also has a fully fledged Java Spring back-end configured.
        </p>
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
          Solution to the problem of having the same or different instances of
          an <em>'Interactive UI fragment'</em> on multiple pages in an MVC app.
        </p>
      </Article>
    </main>
  );
});
