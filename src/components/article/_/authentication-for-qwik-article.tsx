import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
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
      Big challange that this project tacles is that Qwik does not have support
      for general request intercepting (or for AOP).
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
          Strongly encapsulating - hiding - sessions thus preventing session and
          authorization related issues.
        </li>
      </ul>
    </div>
  </Article>
));
