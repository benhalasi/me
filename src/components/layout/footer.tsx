import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="flex flex-grow-0 flex-wrap justify-end">
      <div class="hidden font-display text-9xl uppercase">bh</div>
      <div class="flex w-full flex-col flex-nowrap justify-end p-2 align-bottom text-sm sm:max-w-max">
        <span class="flex-shrink flex-grow-0 pr-1">
          Contact me via the InterWeb:
        </span>
        <ol class="prose-ol list-inside list-disc">
          <li class="prose-li">
            <a
              href="mailto:aslix1u0n@mozmail.com"
              class="hover:underline focus:underline"
            >
              email (proxied)
            </a>
          </li>
          <li class="prose-li">
            <a
              class="hover:underline focus:underline"
              href="https://github.com/bhalasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li class="prose-li">
            <a
              class="hover:underline focus:underline"
              href="https://www.linkedin.com/in/benedek-halasi-15b226184/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ol>
      </div>
    </footer>
  );
});
