import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { RecoilRoot } from "recoil";
import "../styles/main.css";
import "../styles/reset.ts";
import "swiper/css";
import "swiper/css/pagination";
import { theme } from "../themes/theme";
import { useRouter } from "next/router";
import { CacheProvider, EmotionCache, Global } from "@emotion/react";
import { createEmotionCache } from "../utils";
import reset from "../styles/reset";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  BarController,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/material";
import MainTab from "../components/organisms/MainTab";
import AlarmDrawer from "../components/organisms/AlarmDrawer";
import HomeTab from "../components/organisms/HomeTab";
import _ from "lodash";
import { pages } from "../constants";
ChartJS.register(
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const { library, config } = require("@fortawesome/fontawesome-svg-core");
library.add(fal, far, fas, fad);
declare global {
  interface Window {
    webkit?: any;
    ReactNativeWebView?: any;
  }
}
function MyApp(props: MyAppProps) {
  const router = useRouter();
  const currentPathName = `/${router.pathname.split("/")[1]}`;
  const inMainTabs =
    _.findIndex(pages, (el) => el.pathName === currentPathName) !== -1;
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <title>유튜버 찾을 땐, 유하</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
        />
        <meta name="keywords" content="유하, 유튜브, 유튜버, 광고" />
        <meta
          name="description"
          content="유하에서 국내 모든 유튜버에게 광고를 제안하고 답장을 100% 받아보세요. 광고주와 유튜버의 인플루언서 마케팅 커뮤니티 (브랜디드 콘텐츠, PPL 등)"
        />
        ㄴ
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="유하" />
        <meta property="og:title" content="유튜버 찾을 땐, 유하" />
        <meta
          property="og:description"
          content="유하에서 국내 모든 유튜버에게 광고를 제안하고 답장을 100% 받아보세요. 광고주와 유튜버의 인플루언서 마케팅 커뮤니티 (브랜디드 콘텐츠, PPL 등)"
        />
        <meta property="og:image" content="/image/favicon/share.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://youha.info" />
        <meta name="twitter:card" content="summary" data-react-helmet="true" />
        <meta name="twitter:creator" content="" data-react-helmet="true" />
        <meta
          name="twitter:title"
          content="유튜버 찾을 땐, 유하"
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content="유하에서 국내 모든 유튜버에게 광고를 제안하고 답장을 100% 받아보세요. 광고주와 유튜버의 인플루언서 마케팅 커뮤니티 (브랜디드 콘텐츠, PPL 등)"
          data-react-helmet="true"
        />
        <meta name="twitter:image" content="/image/share.png" />
        <meta name="HandheldFriendly" content="true" />
        <link
          rel="shortcut icon"
          href="/image/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/image/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/image/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/image/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/image/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/image/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/image/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/image/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/image/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicon/android-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/image/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/image/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/favicon/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/image/favicon/ms-icon-144x144.png"
        />
        <script src="https://js.pusher.com/3.2/pusher.min.js" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
        {/* "Mixed content blocked" when running an HTTP AJAX operation in an HTTPS page */}
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Global styles={reset} />
          {!inMainTabs ? (
            <Component {...pageProps} key={router.route} />
          ) : (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                "@media(min-width: 1920px)": {
                  pl: `calc((100vw - 1920px) / 2)`,
                },
              }}
            >
              <MainTab />
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  overflow: "auto",
                  backgroundColor: blueGrey[50],
                  "@media(min-width: 1920px)": {
                    pr: `calc((100vw - 1920px) / 2)`,
                  },
                }}
              >
                <AlarmDrawer />
                <Box
                  sx={{
                    minWidth: 100,
                    flex: 1,
                    overflow: "auto",
                  }}
                >
                  <Component {...pageProps} key={router.route} />
                </Box>
                <HomeTab />
              </Box>
            </Box>
          )}
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
export default MyApp;
