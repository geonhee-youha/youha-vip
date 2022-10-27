import _ from "lodash";
import React from "react";
import createCache from "@emotion/cache";
import { useEffect, useState } from "react";
export function createEmotionCache() {
  return createCache({ key: "css" });
}
import { NextRouter } from "next/router";
const isApp = () => {
  let isApp = false;

  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    isApp = true;
  }

  return isApp;
};

// ReactNative Webview에 postMessage 요청
const sendRouterEvent = (path: string): void => {
  window.ReactNativeWebView.postMessage(
    JSON.stringify({ type: "ROUTER_EVENT", data: path })
  );
};

// 뒤로가기 하는 경우
export const stackRouterBack = (router: NextRouter) => {
  if (isApp()) {
    sendRouterEvent("back");
  } else {
    router.back();
  }
};

// push 하는 경우
export const stackRouterPush = (router: NextRouter, url: string) => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    router.push(url).then();
  }
};

export const deviceTokenUpdateToServer = async (
  deviceToken: any,
  platform: "ios" | "android"
) => {
  // const parsedToken = isIOS ? deviceToken.slice(deviceToken.indexOf('Optional(') + 10, deviceToken.length - 2) : deviceToken.detail.token;
  // fetch(`${API_URL}/user/profile/token`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     token: parsedToken,
  //   },
  //   body: JSON.stringify({
  //     token: isLogout ? '' : fcmToken,
  //     platform: Platform.OS,
  //   }),
  // })
  //   .then((d) => d.json())
  //   .then((d) => {
  //     if (d.success) {
  //     }
  //   });
};
export function isEmail(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isCelluar(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isPassword(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d$!@#$%^&*()]{6,}$/; //  6 ~ 20자 영문, 숫자 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isPhone(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isNumber(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp = /\d{6}/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isNickname1(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9|]+$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isNickname2(asValue: string | null) {
  if (typeof asValue !== "string") return false;
  var regExp = /^[가-힣|a-z|A-Z|0-9|]+$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isByte(str: string, maxByte: number) {
  var str_len = str.length;
  var rbyte = 0;
  var rlen = 0;
  var one_char = "";
  for (var i = 0; i < str_len; i++) {
    one_char = str.charAt(i);
    if (escape(one_char).length > 4) {
      rbyte += 2; //한글2Byte
    } else {
      rbyte++; //영문 등 나머지 1Byte
    }
    if (rbyte <= maxByte) {
      rlen = i + 1; //return할 문자열 갯수
    }
  }
  return rbyte <= maxByte;
}
export function getByte(str: string) {
  var str_len = str.length;
  var rbyte = 0;
  var one_char = "";
  for (var i = 0; i < str_len; i++) {
    one_char = str.charAt(i);
    if (escape(one_char).length > 4) {
      rbyte += 2; //한글2Byte
    } else {
      rbyte++; //영문 등 나머지 1Byte
    }
  }
  return rbyte;
}
export const comma = (num: any) => {
  var len, point, str;
  num = num + "";
  point = num.length % 3;
  len = num.length;
  str = num.substring(0, point);
  while (point < len) {
    if (str != "") str += ",";
    str += num.substring(point, point + 3);
    point += 3;
  }
  return str;
};
export function formatDate(str: string | null) {
  if (!str) return null;
  const date = new Date(str.replace(/-/g, "/"));
  let day = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()] + "요일";
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}
export function formatDateTime(str: string | null) {
  if (!str) return null;
  const date = new Date(str.replace(/-/g, "/"));
  let day = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()] + "요일";
  return `${date.getHours()}시 ${date.getMinutes()}분`;
}
export function formatDateFull(str: string | null) {
  if (!str) return null;
  const date = new Date(str.replace(/-/g, "/"));
  let day = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()] + "요일";
  return ` ${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
}

export function formatNewDateFull(date: Date) {
  let day = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()] + "요일";
  return ` ${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
}

export const dateToString = (date: Date) => {
  let year = date.getFullYear().toString();
  let month =
    (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1).toString();
  let day = (date.getDate() < 10 ? "0" : "") + date.getDate().toString();
  return year + month + day;
};

export function displayedAt(str: string | null) {
  const date = str === null ? 0 : new Date(str).getTime();
  const milliSeconds = new Date().getTime() - date;
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

export const messagedAt = (str: string | null) => {
  if (!str) return "";
  const timestamp = new Date(str.replace(/-/g, "/"));
  const milliSeconds = new Date().getTime() - timestamp.getTime();
  const seconds = milliSeconds / 1000;
  // if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  // if (minutes < 10) return `${Math.floor(minutes)}분 전`;
  const ampm = timestamp.getHours() < 12 ? "오전" : "오후";
  const hour = ((timestamp.getHours() - 1) % 12) + 1;
  return `${ampm} ${hour}:${("0" + timestamp.getMinutes()).slice(-2)}`;
};

export const messagedDate = (str: string | null) => {
  if (!str) return null;
  const date = new Date(str.replace(/-/g, "/"));
  let day = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()] + "요일";
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${day}`;
};

export function getDDay(date: string, go?: boolean) {
  const [day, setDay] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const doThing = (date: string) => {
    setInterval(() => {
      setDays(date);
    }, 1000);
  };
  const setDays = (date: string) => {
    // D-Day 날짜 지정
    const setDate = new Date(date);
    // D-day 날짜의 연,월,일 구하기
    const setDateYear = setDate.getFullYear();
    // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
    const setDateMonth = setDate.getMonth() + 1;
    const setDateDay = setDate.getDate();

    // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
    const now = new Date();

    // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
    const distance = setDate.getTime() - now.getTime();

    // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
    // 밀리초 값이기 때문에 1000을 곱한다.
    // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
    // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
  };
  // D-Day 날짜를 가져오고,
  // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.
  useEffect(() => {
    if (go === true) doThing(date);
  }, [date, go]);
  return { day, hours, minutes, seconds };
}
export const scrollToEl = (
  from: string,
  to: string | number,
  after?: () => void,
  more?: number,
  behavior?: boolean
) => {
  var fromEl: any = document.querySelector(`.${from}`);
  if (fromEl !== null) {
    if (typeof to === "string") {
      if (to === "end") {
        fromEl.scrollTo({
          top: fromEl.scrollHeight,
          left: 0,
          behavior: behavior ? "auto" : "smooth",
        });
        if (after !== undefined) after();
      } else {
        var toEl: any = document.querySelector(`${to}`);
        if (toEl !== null) {
          fromEl.scrollBy({
            top:
              toEl.getBoundingClientRect().top +
              (typeof more === "number" ? more : 0),
            behavior: behavior ? "auto" : "smooth",
          });
          if (after !== undefined) after();
        }
      }
    } else if (typeof to === "number") {
      fromEl.scrollTo({
        top: to,
        left: 0,
        behavior: behavior ? "auto" : "smooth",
      });
      if (after !== undefined) after();
    }
  }
};
export const scrollTo = (
  from: string,
  to: number | null,
  after?: () => void
) => {
  var fromEl: any = document.querySelector(`.${from}`);
  if (fromEl !== null) {
    if (to !== null)
      fromEl.scrollTo({
        top: fromEl.scrollTop + to,
        left: 0,
        behavior: "smooth",
      });
    if (after !== undefined) after();
  }
};

export const rankingDataObject = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
};

export function viewSplitLine(message: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const boldRegex = /{(.*?)}/;
  // 링크를 감지하여 a 태그로 감싸기
  const replace = (message: string) => {
    const convertContent1 = message.replace(boldRegex, function (text: string) {
      return "<b>" + text.replace("{", "").replace("}", "") + "</b>";
    });
    const convertContent = convertContent1.replace(
      urlRegex,
      function (text: string) {
        return '<a href="' + text + '" target="_blank">' + text + "</a>";
      }
    );

    const htmlArr: any = [];
    convertContent.split("\n").forEach(function (text: string) {
      const textHtml = text !== "" ? "<p>" + text + "</p>" : "";
      htmlArr.push(textHtml);
    });
    return { __html: htmlArr.join("") };
  };

  return <div dangerouslySetInnerHTML={replace(message)}></div>;
}
export const queryToObj = (query: string) => {
  // 1. "&" 로 텍스트를 나눈 배열을 만들어준다.
  const list = query.split("&");
  // 2. 배열 값을 map 함수를 통해 "="로 다시 나눈 뒤 이걸 [key, val] 형태라 하자.
  // 3. 각각의 key, val 값을 {property:key, value:val} 값으로 반환해준다.
  // 4. map함수의 결과값인 각각의 객체를 reduce를 통해 하나의 결과값으로 축약해준다.

  const objQuery = list
    .map((item: any) => {
      const [key, val] = item.split("=");
      return { property: key, value: val };
    })
    .reduce((acc: any, cur: any) => {
      acc[cur.property] = cur.value;
      return acc;
    }, {});

  return objQuery;
};

export const objToQuery = (objQuery: any) => {
  let stringQuery = Object.entries(objQuery)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return "?" + stringQuery;
};

export const checkHasIncode = (keyword: any) => {
  const decoded = decodeURI(keyword); // 한글 인코딩
  return decoded;
};
