import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="flex flex-grow-0 flex-wrap justify-between sm:flex-nowrap">
      <div class="flex-grow font-display text-9xl uppercase sm:flex-grow-0">
        <div class="outline-brutal">bh</div>
      </div>
      <div class="outline-brutal prose prose-sm flex flex-col justify-end p-2 prose-p:my-2 dark:prose-invert sm:max-w-prose">
        <p>I like to command computers around.</p>
        <p>
          I have strong feeling towards Java, especially when it's used for
          larger products. Sadly, with time, Java is less and less feasible for
          building user interfaces and to hande that problem I started to use
          and learn some reactive front-end frameworks.
        </p>
        <p>
          This site is slowly becoming the collection of the stuff I made and
          doesn't make me cry.
        </p>
      </div>
    </header>
  );
});
