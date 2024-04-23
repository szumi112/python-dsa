import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const External = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <Box>
      <Heading>External sort</Heading>
      <Text>
        <strong>How it works:</strong> <br />
        External Sort involves dividing the data into manageable chunks that are
        sorted in memory and then merged. It’s typically used for sorting huge
        datasets that cannot fit into the main memory. <br />
        <strong>Time Complexity:</strong>
        <br /> Depends on the data access patterns, disk read/write speed, and
        algorithm used for merging.
        <br />
        <strong>Space Complexity:</strong> <br /> Depends on the system but
        generally requires disk storage roughly equivalent to the data to be
        sorted. <br />
        <strong>Best for:</strong> <br />
        Very large datasets, such as in database systems and big data
        applications where data does not fit in RAM.
      </Text>
      <pre>
        <code className="language-python">
          {`
def external_sort(file_segment):
# This is a highly simplified version. Real implementation will need file handling.
data = read_data(file_segment)
data_sorted = sorted(data)
write_data(file_segment, data_sorted)
          `}
        </code>
      </pre>
    </Box>
  );
};

export default External;
