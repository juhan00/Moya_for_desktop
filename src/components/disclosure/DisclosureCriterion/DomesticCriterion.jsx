import React, {useState} from "react";
import { DisclosureCriterionWrapper } from "./style";

const DomesticCriterion = () => {
  const [period, setPeriod] = useState("oneY");

  const date = {
    today: new Date(),
    oneM: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    sixM: new Date(new Date().setMonth(new Date().getMonth() - 6)),
    oneY: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    threeY: new Date(new Date().setFullYear(new Date().getFullYear() - 3)),
    fiveY: new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
    tenY: new Date(new Date().setFullYear(new Date().getFullYear() - 10))
  }
  function getToday(date){
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
}
  
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log('begin-date : ' + form.date[0].value) // 시작일
    console.log('end-date : ' + form.date[1].value) // 마감일
    const checkedType = [...form.type].filter(input => input.checked)
    console.log(checkedType) // 체크된 타입
  }
  function handleRadioChange(event) {
    setPeriod(event.target.id)
  }
  function handleValueChange(event) {
    return ;
  }

  return (
    <DisclosureCriterionWrapper>
      <div className="disclosure__criterion">
        <div className="disclosure__criterion__header">
          <h4>기간 및 상세보기</h4>
        </div>
        <form name="form" className="disclosure__criterion__body" onSubmit={handleFormSubmit}>
          <div className="setPeriod" key={period}>
            <input type="date" name="date" defaultValue={getToday(date[period])} min={date.sixM} max={date.oneM} onChange={handleValueChange} />
            <input type="date" name="date" defaultValue={getToday(date.today)} min={date.oneM} max={date.oneM} />
            <div>                
              <input type="radio" id="oneM" name="period" onChange={handleRadioChange} checked={period === "oneM"} />
              <label htmlFor="oneM">1개월</label>
            </div>
            <div>
              <input type="radio" id="sixM" name="period" onChange={handleRadioChange} checked={period === "sixM"} />
              <label htmlFor="sixM">6개월</label>
            </div>
            <div>
              <input type="radio" id="oneY" name="period" onChange={handleRadioChange} checked={period === "oneY"} />
              <label htmlFor="oneY">1년</label>
            </div>
            <div>
              <input type="radio" id="threeY" name="period" onChange={handleRadioChange} checked={period === "threeY"} />
              <label htmlFor="threeY">3년</label>
            </div>
            <div>
              <input type="radio" id="fiveY" name="period" onChange={handleRadioChange} checked={period === "fiveY"} />
              <label htmlFor="fiveY">5년</label>
            </div>
            <div>
              <input type="radio" id="tenY" name="period" onChange={handleRadioChange} checked={period === "tenY"} />
              <label htmlFor="tenY">10년</label>
            </div>
          </div>
          <div className="setType">
            <div>
              <label htmlFor="typeA">
                <input type="checkbox" id="typeA" name="type" />
                정기공시
              </label>
            </div>
            <div>
              <label htmlFor="typeB">
                <input type="checkbox" id="typeB" name="type" />
                주요사항보고
              </label>
            </div>
            <div>
              <label htmlFor="typeC">
                <input type="checkbox" id="typeC" name="type" />
                발행공시
              </label>
            </div>
            <div>
              <label htmlFor="typeD">
                <input type="checkbox" id="typeD" name="type" />
                지분공시
              </label>
            </div>
            <div>
              <label htmlFor="typeE">
                <input type="checkbox" id="typeE" name="type" />
                기타공시
              </label>
            </div>
            <div>
              <label htmlFor="typeF">
                <input type="checkbox" id="typeF" name="type" />
                외부감사관련
              </label>
            </div>
            <div>
              <label htmlFor="typeG">
                <input type="checkbox" id="typeG" name="type" />
                펀드공시
              </label>
            </div>
            <div>
              <label htmlFor="typeH">
                <input type="checkbox" id="typeH" name="type" />
                자산유동화
              </label>
            </div>
            <div>
              <label htmlFor="typeI">
                <input type="checkbox" id="typeI" name="type" />
                거래소공시
              </label>
            </div>
            <div>
              <label htmlFor="typeJ">
                <input type="checkbox" id="typeJ" name="type" />
                공정위공시
              </label>
            </div>
          </div>
          <button class="btn__form">적용</button>
          <input class="btn__form" type="reset" value="초기화" onClick={() => setPeriod('oneY')} />
        </form>
      </div>
    </DisclosureCriterionWrapper>
  )
}

export default DomesticCriterion;