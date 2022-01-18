import { useEffect } from "react";
import { connect } from "react-redux";
import { LayoutManage } from "src/component";
import {
  actSaveSetListStudent,
  actSetModalStudentVisible,
} from "src/redux/action/student";
import { ManageStudentPageWrapper } from "./style";
import TableStudent from "./TableStudent";
import { Layout } from "antd";

const { Content} = Layout;

const ManageCv = (props) => {
  useEffect(() => {
    props.actSaveSetListStudent([
      {
        name: "Tony Stark",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]);
  }, []);

  return (
    <LayoutManage>
      <Content style={{ minHeight: "600px" }}>
        <ManageStudentPageWrapper>
          <div className="heading" style={{ marginTop: "1rem" }}>
            <div className="title">Quản lý công việc</div>
          </div>

          <TableStudent />
        </ManageStudentPageWrapper>
      </Content>
    </LayoutManage>
  );
};

export default connect(null, {
  actSaveSetListStudent,
  actSetModalStudentVisible,
})(ManageCv);
