import React from "react";

type PageLogProps = {
  user_id: number; //유저의 id
  type: "product" | "brand"; //상품 페이지에 대한 로그인지, 브랜드 페이지에 대한 로그인지
  id: number; //상품 혹은 브랜드의 id
  from: string; //해당 페이지로 어디에서 push되었는지
};

export type BrandProps = {
  id: number; //브랜드 id
  title: string; //브랜드명
  urls: {
    type: "homepage" | "ranking"; //홈페이지인지 유튜버인지
    url: string; //링크 주소
  }[]; //브랜드 유튜버 or 홈페이지 링크들
  thumbnails: {
    type: "image" | "video"; //이미지인지 비디오인지
    pathname: string; //패스
  }[]; //브랜드 썸네일 이미지들
  favorite: {
    value: boolean; //내가 찜했는지
    counts: number; //총 찜 카운트
  }; //좋아요
  products: {
    counts: number;
  }; //이 브랜드에 포함된 상품 갯수
  ranks: {
    date: Date; //기준일
    value: number; //순위
  }[]; //주차별 랭킹
}; //브랜드에 포함된 상품 리스트는 따로 api 요청할 것

export type ProductProps = {
  id: number; //상품 id
  title: string; //상품명
  url: string; //상품 구매링크 주소
  thumbnails: {
    type: "image" | "video"; //이미지인지 비디오인지
    pathname: string; //패스
  }[]; //상품 썸네일 이미지들
  category: {
    large: string;
    medium: string | null;
    small: string | null;
  }; //카테고리 대/중/소
  favorite: {
    value: boolean; //내가 찜했는지
    counts: number; //총 찜 카운트
  }; //좋아요
  brand: BrandProps; //브랜드 정보
  amount: {
    value: number; //중량
    unit: "g" | "ml"; //단위
    servings: number; //X회 제공량
  }; //총 중량
  price: {
    lowest: number; //최저가
  }; //가격
  nutrition: {
    calorie: number; //칼로리
    carbohydrate: number; //탄수화물
    protein: number; //단백질
    fat: number; //지방
    saturatedFat: number | null;
    transFat: number | null;
    sodium: number | null;
    sugar: number | null;
    cholesterol: number | null;
  };
  details: {
    type: "image" | "video"; //이미지인지 비디오인지
    pathname: string; //패스
  }[]; //상품 상세 이미지들
  tags: {
    type: "favor" | "allergy" | "nutrition"; //맛태그인지 알러지태그인지 영양태그인지
    value: any; //검색이나 다른 곳에 쓰기 위한 값
    label: string; //유저들에게 보여질 레이블
  }[];
  ranks: {
    date: Date; //기준일
    value: number; //순위
  }[]; //주차별 랭킹
  review: {
    counts: number; //리뷰 수
    rating: number; //평점 값
  }; //후기 및 리뷰
}; //상품에 포함된 1)리뷰목록과 2)유사상품은 따로 api로 받을 예정
