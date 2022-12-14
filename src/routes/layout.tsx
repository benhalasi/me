import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/layout/footer";
import Header from "../components/layout/header";

export default component$(() => {
  return (
    <>
      <div
        class={
          "mx-auto flex min-h-full w-full flex-col xl:max-w-7xl 2xl:max-w-7xl"
        }
      >
        <Header />
        <Slot />
        <Footer></Footer>
      </div>
    </>
  );
});
