import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
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
          vocab-front - handles UI and authorizing users, built on nodejs and
          qwik.
        </li>
      </ul>
    </div>
  </Article>
));
