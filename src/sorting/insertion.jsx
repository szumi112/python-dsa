import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Insertion = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Insertion sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Insertion Sort builds the final sorted array one item at a time. It
        iterates through the input elements and removes one element in each
        iteration, finds its appropriate location in the sorted list, and
        inserts it there. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: 𝑂 ( 𝑛 2 ) O(n 2 ) <br /> Worst-case: 𝑂 ( 𝑛 2 ) O(n 2 ){" "}
        <br />
        <strong>Space Complexity:</strong> <br /> 𝑂 ( 1 ) O(1) (in-place
        sorting) <br />
        <strong>Best for:</strong> <br />
        Small datasets or arrays that are already partially sorted, since it has
        a fast best-case runtime.
      </Text>
      <pre>
        <code className="language-python">
          {`
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Insertion;
