import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Heap = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Heap sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Heap Sort converts the input array into a heap data structure, then
        removes the elements from the heap and places them into the correct
        position within the array. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(nlogn) <br /> Worst-case: O(nlogn) <br />
        <strong>Space Complexity:</strong> <br /> O(1) (in-place sorting) <br />
        <strong>Best for:</strong> <br />
        Applications where the worst-case time needs to be guaranteed without
        extra space for merge sort.
      </Text>
      <pre>
        <code className="language-python">
          {`
import heapq

def heap_sort(arr):
    heapq.heapify(arr)
    return [heapq.heappop(arr) for _ in range(len(arr))]
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Heap;
