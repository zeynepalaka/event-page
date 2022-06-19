import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";

import {Home} from "./pages/Home";
import { Event } from "./pages/Event";

export default function App() {
  return (
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/event/:eventId" element={<Event />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

