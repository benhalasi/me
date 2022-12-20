import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AuthenticationForQwikArticle from "~/components/article/_/authentication-for-qwik-article";
import CellularAutomatonArticle from "~/components/article/_/cellular-automaton-article";
import CollectionArticle from "~/components/article/_/collection-article";
import HeroiconsForQwikArticle from "~/components/article/_/heroicons-for-qwik-article";
import MvcWidgetsArticle from "~/components/article/_/mvc-widgets-article";
import PastryShopArticle from "~/components/article/_/pastry-shop-article";
import UserPresentableLoggerArticle from "~/components/article/_/user-presentable-logger-article";
import VocabArticle from "~/components/article/_/vocab-article";

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
      <CollectionArticle />
      <VocabArticle />
      <AuthenticationForQwikArticle />
      <HeroiconsForQwikArticle />
      <PastryShopArticle />
      <UserPresentableLoggerArticle />
      <MvcWidgetsArticle />
      <CellularAutomatonArticle />
    </main>
  );
});
