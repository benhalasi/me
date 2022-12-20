import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
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
      Solution to the problem of having the same or different instances of an{" "}
      <em>'Interactive UI fragment'</em> on multiple pages in an MVC app.
    </p>
  </Article>
));
