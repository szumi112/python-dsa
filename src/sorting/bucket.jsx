import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Bucket = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Bucket sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Bucket Sort distributes the elements into several "buckets". Each bucket
        is sorted individually, either using a different sorting algorithm, or
        by recursive bucket sort. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(n+k) (where 𝑘 k is the number of buckets) <br />{" "}
        Worst-case: O(n 2 ) (when all elements are in one bucket)
        <br />
        <strong>Space Complexity:</strong> <br /> O(n⋅k) (not in-place as it
        requires additional arrays) <br />
        <strong>Best for:</strong> <br />
        When the input is uniformly distributed across the range.
      </Text>
      <pre>
        <code className="language-python">
          {`
def bucket_sort(arr):
max_value = max(arr)
size = max_value // len(arr) + 1
buckets = [[] for _ in range(size)]
for i in range(len(arr)):
    j = arr[i] // size
    buckets[j].append(arr[i])
arr.clear()
for bucket in buckets:
    arr.extend(sorted(bucket))
return arr
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Bucket;
