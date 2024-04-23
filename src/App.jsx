import { useState } from "react";
import "./App.css";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Insertion from "./sorting/insertion";
import External from "./sorting/external";
import Radix from "./sorting/radix";
import Counting from "./sorting/counting";
import Bucket from "./sorting/bucket";
import Heap from "./sorting/heap";
import Quick from "./sorting/quick";
import Merge from "./sorting/merge";

function App() {
  const navigate = useNavigate();
  return (
    <Box>
      <Heading>Sorting Algorithms</Heading>
      <Button m="1" onClick={() => navigate("/insertion")}>
        Insertion
      </Button>
      <Button m="1" onClick={() => navigate("/merge")}>
        Merge
      </Button>
      <Button m="1" onClick={() => navigate("/quick")}>
        Quick
      </Button>
      <Button m="1" onClick={() => navigate("/heap")}>
        Heap
      </Button>
      <Button m="1" onClick={() => navigate("/bucket")}>
        Bucket
      </Button>
      <Button m="1" onClick={() => navigate("/counting")}>
        Counting
      </Button>
      <Button m="1" onClick={() => navigate("/radix")}>
        Radix
      </Button>
      <Button m="1" onClick={() => navigate("/external")}>
        External
      </Button>

      <Routes>
        <Route path="/insertion" element={<Insertion />} />
        <Route path="/merge" element={<Merge />} />
        <Route path="/quick" element={<Quick />} />
        <Route path="/heap" element={<Heap />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/counting" element={<Counting />} />
        <Route path="/radix" element={<Radix />} />
        <Route path="/external" element={<External />} />
      </Routes>
    </Box>
  );
}

export default App;
