import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Merge = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Merge sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Merge Sort divides the unsorted list into 𝑁 N sublists, each containing
        one element (a list of one element is considered sorted), then
        repeatedly merges sublists to produce new sorted sublists until there is
        only one sublist remaining. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(nlogn) <br /> Worst-case: O(nlogn) <br />
        <strong>Space Complexity:</strong> <br /> O(n) (not in-place as it
        requires additional space for the merged arrays) <br />
        <strong>Best for:</strong> <br />
        Handling large datasets efficiently and is stable (does not change the
        relative order of elements with equal keys).
      </Text>
      <pre>
        <code className="language-python">
          {`
def merge_sort(arr):
if len(arr) > 1:
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    merge_sort(left)
    merge_sort(right)

    i = j = k = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            arr[k] = left[i]
            i += 1
        else:
            arr[k] = right[j]
            j += 1
        k += 1

    while i < len(left):
        arr[k] = left[i]
        i += 1
        k += 1

    while j < len(right):
        arr[k] = right[j]
        j += 1
        k += 1
return arr
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Merge;
