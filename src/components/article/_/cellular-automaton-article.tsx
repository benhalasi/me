import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
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
      Cell automaton library written in Java for <em>Conway's game of life</em>{" "}
      like simulations.
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
));
