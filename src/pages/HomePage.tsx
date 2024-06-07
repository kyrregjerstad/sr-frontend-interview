import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Toggle from "../components/Toggle/Toggle";
import TextInput from "../components/TextInput/TextInput";
import { mockGetModulesFromAPI } from "../api";

function HomePage() {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    mockGetModulesFromAPI("/modules", { name: search }).then((response) => {
      console.log(response);
    });
  }, [search]);

  return (
    <div>
      <h2>Module addition</h2>
      <Card>
        <TextInput
          label="Search Module"
          value={search}
          onChange={(input) => setSearch(input)}
        />
        <Toggle checked={checked} onChange={setChecked} />
      </Card>
    </div>
  );
}

export default HomePage;
