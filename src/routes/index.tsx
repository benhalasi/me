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
          live: "/" as BenedekDevLink,
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
          live: "https://vocab.benedek.dev/",
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
      <Article
        name="User Presentable Logger"
        type="XP"
        links={{
          source: {
            GitHub: "https://github.com/benhalasi/user-presentable-logger",
          },
        }}
      >
        <p>
          Logger library for presenting the results, issues of batch and
          background jobs and events to the user.
        </p>
        <p>
          This project is built with a 'managment' type application in mind
          where users have to handle multiple types of processes in a way that a
          dashboard with ongoing jobs, unresolved issues, unexpected or expected
          events is neccessary.
        </p>
      </Article>
      <Article
        name="MVC Widgets"
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
      <Article
        name="Cellular Automaton"
        type="XP"
        links={{
          source: {
            GitHub: "https://github.com/benhalasi/cellular-automaton",
          },
        }}
      >
        <p>
          Cell automaton library written in Java for{" "}
          <em>Conway's game of life</em> like simulations.
        </p>
        <p>
          It aims at handling low-level implementation details; building the
          cellular grid, mapping neighbours, handling state changes and so on.
        </p>
        <div>
          <ul class="prose-sm mt-0">
            <li>Runner that handles iterations and exporting to bmp</li>
            <li>Some prewritten algorithms as example</li>
            <li>Exporting to bmp</li>
          </ul>
        </div>
      </Article>
    </main>
  );
});
