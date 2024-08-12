import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Toggle from "../components/Toggle/Toggle";
import TextInput from "../components/TextInput/TextInput";
import { mockGetModulesFromAPI } from "../api";

type SearchRes = {
  id: number;
  name: string;
};

function HomePage() {
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState<SearchRes[]>([]);
  const debouncedValue = useDebounce(search);
  const [selectedResources, setSelectedResources] = useState<SearchRes[]>([]);

  useEffect(() => {
    mockGetModulesFromAPI("/modules", { name: debouncedValue }).then(
      (response) => {
        setSearchRes(response.resource || []);
      },
    );
  }, [debouncedValue]);

  return (
    <div>
      <h2>Module addition</h2>
      <Card>
        <TextInput
          label="Search Module"
          value={search}
          onChange={(input) => setSearch(input)}
        />
      </Card>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {searchRes.map(({ id, name }) => (
            <ResultCard
              key={id}
              id={id}
              name={name}
              checked={selectedResources.some((resource) => resource.id === id)}
              setSelectedResources={setSelectedResources}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {selectedResources.map((resource) => (
            <SelectedResourceCard
              key={resource.id}
              id={resource.id}
              name={resource.name}
              setSelectedResources={setSelectedResources}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

type ResultCard = {
  id: number;
  name: string;
  checked: boolean;
  setSelectedResources: Dispatch<SetStateAction<SearchRes[]>>;
};

const ResultCard = ({
  id,
  name,
  setSelectedResources,
  checked,
}: ResultCard) => {
  return (
    <Card>
      <p>{name}</p>
      <Toggle
        checked={checked}
        onChange={() => {
          if (checked) {
            setSelectedResources((previous) =>
              previous.filter((item) => item.id !== id),
            );
          } else {
            setSelectedResources((previous) => [...previous, { id, name }]);
          }
        }}
      />
    </Card>
  );
};

const SelectedResourceCard = ({
  id,
  name,
  setSelectedResources,
}: {
  id: number;
  name: string;
  setSelectedResources: Dispatch<SetStateAction<SearchRes[]>>;
}) => {
  return (
    <Card>
      <p>{name}</p>
      <button
        onClick={() =>
          setSelectedResources((previous) =>
            previous.filter((item) => item.id !== id),
          )
        }
        style={{
          color: "white",
          background: "red",
        }}
      >
        X
      </button>
    </Card>
  );
};

function useDebounce<T>(value: T, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
