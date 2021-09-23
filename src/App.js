import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <>
      <Header title="Lista zadań" />
      <main className="main">
        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={<TaskList tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </main>
    </>
  );
}

export default App;
