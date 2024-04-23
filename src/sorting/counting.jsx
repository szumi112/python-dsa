import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Counting = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>Counting sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        Counting Sort counts the number of objects that have each distinct key
        value and uses arithmetic to calculate the positions of each key value
        in the output sequence. <br />
        <strong>Time Complexity:</strong>
        <br /> Average: O(n+k) (where 𝑘 k is the range of the input data) <br />{" "}
        Worst-case: O(n+k) <br />
        <strong>Space Complexity:</strong> <br /> O(k) (not in-place as it
        requires additional space proportional to the range of data)
        <br />
        <strong>Best for:</strong> <br />
        Small range of integers or when the range of input data elements is not
        significantly greater than the number of elements to be sorted.
      </Text>
      <pre>
        <code className="language-python">
          {`
def counting_sort(arr):
max_val = max(arr)
m = max_val + 1
count = [0] * m                

for a in arr:
    count[a] += 1             
i = 0
for a in range(m):            
    for c in range(count[a]):  
        arr[i] = a
        i += 1
return arr
          `}
        </code>
      </pre>
    </Box>
  );
};

export default Counting;
