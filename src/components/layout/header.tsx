import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="flex flex-grow-0 flex-wrap justify-between sm:flex-nowrap">
      <div class="flex-grow font-display text-9xl uppercase sm:flex-grow-0">
        <div class="outline-brutal">bh</div>
      </div>
      <div class="outline-brutal prose prose-sm flex flex-col justify-end p-2 prose-p:my-2 dark:prose-invert sm:max-w-prose">
        <p>
          I like to command computers around and they usually do what I wanted
          them instead of what i told them to do.
        </p>
        <p>
          I do love Java but still realize that javascript on the server side is
          probably not in the worst 100 things that happend to humanity.
        </p>
        <p>
          This <span class="line-through">is</span> will be the collection of
          stuff I made and does not make me cry.
        </p>
      </div>
    </header>
  );
});
