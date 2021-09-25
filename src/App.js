import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

function App() {
  const [hideDone, sethideDone] = useState(false);

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  };

  return (
    <>
      <Header title="Lista zadań" />
      <main className="main">
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={<TaskList tasks={tasks} hideDone={hideDone} />}
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />
      </main>
    </>
  );
}

export default App;
