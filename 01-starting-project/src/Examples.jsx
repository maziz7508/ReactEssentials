import { useState } from "react";
import { EXAMPLES } from "./data";
import TabButton from "./components/TabButton/TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [selectedTopics, setSelectedTopics] = useState();
  function handleSelect(selectedButton) {
    console.log(`You selected the button =>`, selectedButton);
    setSelectedTopics(selectedButton);
    console.log("selectedTopics =>", selectedTopics);
  }

  let tabContent = <p>Please select a tab to see the content.</p>;
  if (selectedTopics) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopics].title}</h3>
        <p>{EXAMPLES[selectedTopics].description}</p>
        <pre>{EXAMPLES[selectedTopics].code}</pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopics === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopics === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
