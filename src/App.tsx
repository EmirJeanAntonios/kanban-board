import "./App.scss";
import KanbanWrapper from "./components/KanbanWrapper/KanbanWrapper";
function App() {
  return (
    <main>
      <section>
        <KanbanWrapper title="Backlog">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </KanbanWrapper>
      </section>
    </main>
  );
}

export default App;
