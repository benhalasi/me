import { component$ } from "@builder.io/qwik";
import Article from "../article";

export default component$(() => (
  <Article
    name="User Presentable Logger"
    type="XP"
    links={{
      source: {
        GitHub: "https://github.com/benhalasi/user-presentable-logger",
      },
    }}
  >
    <p>
      Logger library for presenting the results, issues of batch and background
      jobs and events to the user.
    </p>
    <p>
      This project is built with a 'managment' type application in mind where
      users have to handle multiple types of processes in a way that a dashboard
      with ongoing jobs, unresolved issues, unexpected or expected events is
      neccessary.
    </p>
  </Article>
));
