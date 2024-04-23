import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Quick = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Quick sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Quick Sort picks an element as pivot and partitions the given array
        around the picked pivot so that elements on left of pivot are always
        less than the pivot while the elements at the right are greater than the
        pivot. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(nlogn) <br /> Worst-case: O(n 2 ) (this occurs when
        the smallest or largest element is always picked as the pivot) <br />
        <strong>Space Complexity:</strong> <br /> O(logn) (in-place but uses
        stack space for recursion)
        <br />
        <strong>Best for:</strong> <br />
        Average-case scenarios; not stable but can be made stable with some
        modifications.
      </Text>
      <pre>
        <code className="language-python">
          {`
def quick_sort(arr):
if len(arr) <= 1:
    return arr
else:
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Quick;
