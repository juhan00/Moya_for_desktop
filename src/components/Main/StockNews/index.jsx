import React, { useState } from "react";
import { StockNewsWrapper } from "./style";

const StockNews = ({ type, data }) => {
  const [stockNews, setStockNews] = useState(
    type === "domestic" ? data.items.slice(0, 13) : data.items.slice(0, 8),
  );

  return (
    <StockNewsWrapper className={type}>
      <div className="top">
        <h2>주요 종목 뉴스</h2>
      </div>
      <ul>
        {stockNews.map((item) => (
          <li key={item.id}>
            <div className="title" onClick={() => window.open(item.link)}>
              {item.title}
            </div>
            <div className="date">{item.date}</div>
          </li>
        ))}
      </ul>
    </StockNewsWrapper>
  );
};

export default StockNews;
