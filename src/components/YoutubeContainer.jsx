import React, { useEffect, useState } from "react";
import axios from "axios";
import { youtubeOptions } from "../utils/apiOptions";
import YouTubeVideoCard from "./YoutubeVideoCard";
import { Container, Heading, Stack, Text } from "@chakra-ui/react";

import SpinnerComp from "./Spinner";

const YoutubeContainer = ({ query }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(
          youtubeOptions(
            query + " exercise",
            import.meta.env.VITE_REACT_APP_EXERCISE
          )
        );

        setVideos(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Container my="10" maxW={"container.lg"}>
        <Heading
          color="#435B66"
          fontFamily={"poppins"}
          textTransform={"capitalize"}
          my={5}
        >
          {query} Tutorial's
        </Heading>
        <Stack gap={10} direction={["column", "row"]}>
          {loading ? (
            <SpinnerComp />
          ) : videos.length > 0 ? (
            videos
              .slice(0, 3)
              .map((e) => <YouTubeVideoCard key={e.views} video={e} />)
          ) : (
            <Text>API request's exhausted 😭</Text>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default YoutubeContainer;
