import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  const route = await Promise.resolve("/app/stage-2"); // fetch stage
  console.log("fetching");
  const pathname = resolvedUrl.split("?")[0]; // e.g., '/app/stage-1'
  if (pathname !== route) {
    return {
      redirect: {
        destination: route,
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};
