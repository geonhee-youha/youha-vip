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
import "../styles/index.css";
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
  ArcElement,
  RadarController,
  Tooltip,
  Legend,
  RadialLinearScale,
  PieController,
  DoughnutController,
} from "chart.js";
import _ from "lodash";

ChartJS.register(
  LineController,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PieController,
  DoughnutController,
  Tooltip,
  Legend
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
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet="utf-8" />
        <title>Jellysmack X youha 크리에이터 지원 프로젝트</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="jellysmack, 젤리스맥, youha, 유하, 펀딩, 크리에이터, 한도조회"
        />
        <meta
          name="description"
          content="글로벌 크리에이터 지원 플랫폼 Jellysmack과 유튜버 데이터 분석 플랫폼 youha가 만나 크리에이터의 미래를 지원합니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jellysmack X youha" />
        <meta property="og:title" content="Jellysmack X youha 크리에이터 지원 프로젝트" />
        <meta
          property="og:description"
          content="글로벌 크리에이터 지원 플랫폼 Jellysmack과 유튜버 데이터 분석 플랫폼 youha가 만나 크리에이터의 미래를 지원합니다."
        />
        <meta property="og:image" content="/images/favicon/share.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://youha.info" />
        <meta name="twitter:card" content="summary" data-react-helmet="true" />
        <meta name="twitter:creator" content="" data-react-helmet="true" />
        <meta
          name="twitter:title"
          content="Jellysmack X youha 크리에이터 지원 프로젝트"
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content="글로벌 크리에이터 지원 플랫폼 Jellysmack과 유튜버 데이터 분석 플랫폼 youha가 만나 크리에이터의 미래를 지원합니다."
          data-react-helmet="true"
        />
        <meta name="twitter:image" content="/images/share.png" />
        <meta name="HandheldFriendly" content="true" />
        <link
          rel="shortcut icon"
          href="/images/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
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
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
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
          <Component {...pageProps} key={router.route} />
          {/* <LocalNav />
          <GlobalHeader />
          <GlobalFooter /> */}
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
export default MyApp;
