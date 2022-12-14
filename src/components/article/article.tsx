import { component$, Slot } from "@builder.io/qwik";

export type ProjectType = "POC" | "SP" | "XP";

type SubDomain = `${string}.`;
export type BenedekDevLink = `https://${SubDomain | ""}benedek.dev/${string}`;
export type GitHubLink = `https://github.com/${string}`;
export type GitLabLink = `https://gitlab.com/${string}`;

export interface ArticleProps {
  type: ProjectType;
  name: string;
  links?: {
    BenedekDev?: BenedekDevLink;
    source?: {
      GitHub?: GitHubLink;
      GitLab?: GitLabLink;
      Smth?: string;
      Else?: string;
    };
  };
}

export default component$((props: ArticleProps) => {
  const sources = () => {
    if (!props.links?.source) return <></>;

    const sources = Object.entries(props.links.source);
    if (sources.length === 0) return <></>;

    const getJoiner = (index: number, collectionLength: number) => {
      switch (collectionLength - (index + 1)) {
        case 0:
          return "";
        case 1:
          return " and ";
        default:
          return ", ";
      }
    };
    const comp = ([sourceName, sourceHref]: string[]) => (
      <a
        class="hover:underline focus:underline"
        href={sourceHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {sourceName}
      </a>
    );

    if (sources.length === 1) return comp(sources[0]);

    return sources.map((source, i, a) => (
      <>
        {comp(source)}
        {getJoiner(i, a.length)}
      </>
    ));
  };

  return (
    <article class="outline-brutal flex w-full flex-col border border-dotted border-zinc-700 hover:border-transparent focus:border-transparent dark:border-zinc-300">
      <div class="flex w-full flex-row flex-nowrap items-center justify-between gap-2 p-2">
        <span class="text-lg line-clamp-2">
          <span class="pr-1 font-display uppercase">{props.type}</span>
          <span>—</span>
          <span class="pl-1">{props.name}</span>
        </span>
        {props.links?.BenedekDev ? (
          <a
            href={props.links.BenedekDev}
            target={
              props.links.BenedekDev.startsWith("http") ? "_blank" : "_top"
            }
            class="group relative font-display text-xs decoration-zinc-600 hover:underline focus:underline dark:decoration-zinc-400"
          >
            live
            <br />
            here
            <div class="absolute top-[-3px] right-[-4px] h-[6px] w-[6px] rounded-full border-zinc-600 bg-red-600 group-hover:border dark:border-zinc-400"></div>
          </a>
        ) : (
          <></>
        )}
      </div>
      <div class="prose flex-grow border-y border-zinc-300 p-2 dark:border-zinc-600 dark:prose-invert">
        <Slot />
      </div>
      {props.links?.source && Object.entries(props.links?.source).length > 0 ? (
        <div class="ml-auto inline w-fit p-2 text-sm">
          <span>more on</span> {sources()}
        </div>
      ) : (
        <></>
      )}
    </article>
  );
});

export const Placeholder = component$(() => (
  <div class="flex h-full w-full">
    <div class="m-auto">Such Empty</div>
  </div>
));
