import React from "react";
import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
import Highlight from "./children/Highlight";
import { Provider } from "react-redux";
import store from "../store";

function Assignment3() {
  return (
    <Provider store={store}>
      <div>
        <h1>Assignment 3</h1>
        <TodoList />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
          libero harum dicta, quidem debitis, odio vel consequuntur accusamus
          vitae sint nobis, et amet sunt ratione! Odio molestiae laudantium
          provident quas? Labore tempore asperiores delectus impedit nisi illo
          repudiandae quibusdam.
        </Highlight>
        <ConditionalOutput />
        <Styles />
        <Classes />
        <PathParameters />
        <JavaScript />
      </div>
    </Provider>
  );
}

export default Assignment3;
