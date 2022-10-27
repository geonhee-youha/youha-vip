import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { mainTabs } from "../../constants";
export default function Page() {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("/")[1]}`;
  const tabIndex = _.findIndex(
    mainTabs,
    (el) => el.pathName === currentPathName
  );
  const targetSlugs = mainTabs[tabIndex]?.slugs;
  useEffect(() => {
    router.replace(
      tabIndex === -1
        ? `/`
        : `${router.pathname}${targetSlugs ? targetSlugs[0].pathName : ""}`
    );
  }, []);
  return <></>;
}
