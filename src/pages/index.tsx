import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, []);
  return <></>;
}
