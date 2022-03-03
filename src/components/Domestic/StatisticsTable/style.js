import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  max-width: 1600px;
  width: 100%;
  margin: 26px 36px 36px;
  padding: 25px 32px 35px;
  border-radius: 12px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 2px;
`;
export const Row = styled.tr`
  height: 38px;
  &.table__header {
    color: #ffffff;
    text-align: end;
  }
`;
export const Cell = styled.td`
  vertical-align: middle;
  width: 60px;
  font-size: 14px;
  line-height: 22px;
  text-align: end;
  padding-right: 20px;
  &.table__title--category {
    color: #767676;
    text-align: start;
    padding-left: 20px;
    border-bottom: 1px solid #5fb6ad;
  }
  &.table__title {
    border-bottom: 1px solid #5fb6ad;
  }
  &.table__category {
    text-align: start;
  }
  h1 {
    color: #5fb6ad;
    padding-left: 20px;
  }
  h2 {
    color: #111111;
    padding-left: 40px;
  }
  h3 {
    color: #767676;
    padding-left: 60px;
  }
`;
