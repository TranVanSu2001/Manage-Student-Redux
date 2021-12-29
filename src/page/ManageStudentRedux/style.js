import styled from "styled-components";

const ManageStudentPageWrapper = styled.div`
  & > .heading {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .title {
      margin-right: auto;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;

export const ChooseDateCv = styled.div`
  margin-top: 1.9rem;

  display: flex;
  flex-direction: row;
`;

export const NotiChooseDateCv = styled.div`
  text-decoration: underline;
  color: #e2384d;
  margin-right: auto;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

export const DatePickerCv = styled.div``;

export { ManageStudentPageWrapper };
