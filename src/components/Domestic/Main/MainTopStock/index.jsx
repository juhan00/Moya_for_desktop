import React from "react";
import { TopStock } from "./style";

function MainTopStock(props) {
  return (
    <TopStock>
      <div style={{ display: "flex" }}>
        <h2>Top종목</h2>
        <ul style={{ display: "flex", marginLeft: "auto" }}>
          <li>상한가</li>
          <li>하한가</li>
          <li>상승</li>
          <li>보합</li>
          <li>하락</li>
          <li>거래량상위</li>
          <li>시가총액상위</li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>순위</th>
            <th>종목명</th>
            <th>현재가</th>
            <th>전일비</th>
            <th>등락률</th>
            <th>거래량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>2</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>3</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>4</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>5</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>6</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>7</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>8</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>9</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
          <tr>
            <td>10</td>
            <td>노루페인트우</td>
            <td>25,500</td>
            <td>5,150</td>
            <td>+25.31%</td>
            <td>68,090</td>
          </tr>
        </tbody>
      </table>
    </TopStock>
  );
}

export default MainTopStock;
