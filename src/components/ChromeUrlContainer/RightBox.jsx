import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getChromeBookmarks } from "../../IndexedDb";
import ItemContainer from "../UrlContainer/ItemContainer";
import Marker from "../UrlContainer/Marker";
import { FlexContainer, RightBoxEl } from "../UrlContainer/RightBox";
import { Title } from "../UrlContainer/styled/Title.styled";
import { TitleWrapper } from "../UrlContainer/styled/TitleWrapper.styled";
import LoadingCenter from "../Utils/Loader/LoaderCenter";
import { GetScrollUpMarker } from "../Utils/Scroll/GetThrottled";

const RightBox = () => {
  const [chromeBookmarks, setChromeBookmarks] = useState([]);
  const [isScroll, setIsScroll] = useState(false);
  const scrollRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const { onScroll, handleScrollUp } = GetScrollUpMarker({
    setIsScroll,
    scrollRef,
  });

  useEffect(() => getChromeBookmarks(setChromeBookmarks), []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  });

  const TotalUrlMap = () => (
    <ItemContainer urls={chromeBookmarks} urlType="chrome-extension" />
  );

  return (
    <RightBoxEl>
      <TitleWrapper>
        <Title>크롬북마크</Title>
      </TitleWrapper>
      <FlexContainer onScroll={onScroll} ref={scrollRef}>
        {!loading && TotalUrlMap()}
        {/* 로딩창 */}
        {loading && <LoadingCenter />}
        <Marker isScroll={isScroll} onClick={handleScrollUp} />
      </FlexContainer>
    </RightBoxEl>
  );
};

export default RightBox;
