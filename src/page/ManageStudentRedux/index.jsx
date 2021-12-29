import { useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { LayoutManage } from "src/component";
import {
  actSaveSetListStudent,
  actSetModalStudentVisible,
} from "src/redux/action/student";
import { ManageStudentPageWrapper } from "./style";
import TableStudent from "./TableStudent";
import ModalStudent from "./ModalStudent";
import ModalStuAddCv from "./ModalStuAddCv";

const ManageStudent = (props) => {
  useEffect(() => {
    props.actSaveSetListStudent([
      {
        name: "Tony Stark",
        age: 32,
        address: "New York No. 1 Lake Park",
      },
    ]);
  }, []);

  const showModal = () => {
    props.actSetModalStudentVisible(true);
  };

  return (
    <LayoutManage>
      <ManageStudentPageWrapper>
        <div className="heading">
          <div className="title">Quản lý học sinh</div>

          <div className="group">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={showModal}
              style={{
                background: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)",
              }}
            >
              Thêm mới
            </Button>
          </div>
        </div>

        <TableStudent />
        <ModalStudent />
        <ModalStuAddCv />
      </ManageStudentPageWrapper>
    </LayoutManage>
  );
};

export default connect(null, {
  actSaveSetListStudent,
  actSetModalStudentVisible,
})(ManageStudent);
