import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";
import AdoptedPetContext from "./AdoptedPetContex.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <div className="test-css">
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <Link to="/">
              <h1>Peduli Hewan</h1>
            </Link>
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
