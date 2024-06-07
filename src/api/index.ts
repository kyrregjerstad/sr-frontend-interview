const mockedModules = [
  {
    id: 1,
    name: "Cake Baking",
  },
  {
    id: 2,
    name: "Under Water Basket Weaving",
  },
  {
    id: 3,
    name: "Advanced Origami",
  },
  {
    id: 4,
    name: "Duct Tape Engineering",
  },
  {
    id: 5,
    name: "Emoji Language (advanced)",
  },
  {
    id: 6,
    name: "Sock Puppetry (beginner)",
  },
];

// helper
export const mockGetModulesFromAPI = async (
  endpoint: string,
  filter?: { name?: string }
) => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (endpoint === "/modules") {
    return {
      resource: mockedModules.filter((module) =>
        module.name.includes(filter?.name ?? "")
      ),
    };
  }

  return {
    error: "Invalid endpoint",
  };
};
