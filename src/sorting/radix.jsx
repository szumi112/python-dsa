import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Radix = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Radix sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Radix Sort processes each digit of the numbers to be sorted, from the
        least significant digit to the most significant, using a stable
        intermediate sorting algorithm (often Counting Sort). <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(nk) (where 𝑘 k is the number of digits) <br />{" "}
        Worst-case: O(nk) <br />
        <strong>Space Complexity:</strong> <br /> O(n+k) (not in-place) <br />
        <strong>Best for:</strong> <br />
        Large datasets where the length of the numbers (in digits) is relatively
        small.
      </Text>
      <pre>
        <code className="language-python">
          {`
def radix_sort(arr):
RADIX = 10
placement = 1
max_digit = max(arr)

while placement <= max_digit:
    buckets = [[] for _ in range(RADIX)]
    for i in arr:
        tmp = int((i / placement) % RADIX)
        buckets[tmp].append(i)
    a = 0
    for b in range(RADIX):
        buck = buckets[b]
        for i in buck:
            arr[a] = i
            a += 1
    placement *= RADIX
return arr

          `}
        </code>
      </pre>
    </Box>
  );
};

export default Radix;
