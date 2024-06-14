import Card from "./components/Card/Card";
import { Tabs } from "./components/Tabs/Tabs";

function App() {
  return (
    <div>
      <h2>Tabs</h2>
      <Tabs
        tabs={[
          { name: "Tab1", content: <Tab1Content /> },
          { name: "Tab2", content: <Tab2Content /> },
        ]}
      />
    </div>
  );
}

export default App;

const Tab1Content = () => {
  // add fetch logic here
  return (
    <div>
      <h2>Tab 1</h2>
      <Card>This is the tab 1 content</Card>
    </div>
  );
};

const Tab2Content = () => {
  // add fetch logic here
  return (
    <div>
      <h2>Tab 2</h2>
      <Card>This is the content of tab 2</Card>
    </div>
  );
};
