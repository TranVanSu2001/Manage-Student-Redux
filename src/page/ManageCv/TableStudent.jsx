import { Table, Button, Popconfirm } from "antd";
import { connect } from "react-redux";
import {
  actSetModalStudentVisible,
  actSaveSetSelectedStudent,
  actSaveDeleteStudent,
} from "src/redux/action/student";

const TableStudent = (props) => {
  const { listCv } = props;

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => <a>{name}</a>,
      width: "15%",
    },
    {
      title: "Công việc",
      dataIndex: "CV",
      width: "20%",
    },
    {
      title: "Thời gian tạo",
      dataIndex: "timeAddCv",
      width: "10%",
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      width: "10%",
    },
  ];

  const data = listCv.map((student, indexOfStudent) => ({
    key: indexOfStudent + 1,
    ...student,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default connect(
  (storeState) => ({
    listStudent: storeState.Student.listStudent,
    isModalAddCv: storeState.Student.isModalAddCv,
    listCv: storeState.Student.listCv,
  }),
  {
    actSetModalStudentVisible,
    actSaveSetSelectedStudent,
    actSaveDeleteStudent,
  }
)(TableStudent);
