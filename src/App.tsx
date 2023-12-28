import "./App.scss";
import Kanban from "./components/Kanban/Kanban";
import useFirebaseGoogleAuth from "./hooks/useFirebaseGoogleAuth";

function App() {
  const { handleSignInWithGooglePopup, user } = useFirebaseGoogleAuth();
  console.log(user);
  if (!user) {
    return <button onClick={handleSignInWithGooglePopup}>Sign In with google</button>
  }

  return (
    <main>
      <section className="kanban_section_wrapper">
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>{" "}
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>{" "}
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>{" "}
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>{" "}
        <Kanban title="Backlog">
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
          <Kanban.Card>1</Kanban.Card>
        </Kanban>
      </section>
    </main>
  );
}

export default App;
