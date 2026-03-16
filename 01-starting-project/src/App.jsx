import Header from "./components/Header/Header";
import CoreConcepts from "./CoreConcepts";
import Examples from "./Examples";
// export default Header;
// let tabContent = "Please select a tab to see the content.";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header />
      <CoreConcepts />
      {/* <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </section> */}

      {/* <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopics === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopics === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopics === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopics === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section> */}
      <Examples />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
