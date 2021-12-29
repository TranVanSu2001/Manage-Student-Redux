import { Table, Button, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  actSetModalStudentVisible,
  actSaveSetSelectedStudent,
  actSaveDeleteStudent,
  addStudentCvModal,
  actSelectedAdd,
} from "src/redux/action/student";

const TableStudent = (props) => {
  const { listStudent, isModalAddCv } = props;

  const onEditStudent = (studentInfo) => {
    props.actSaveSetSelectedStudent(studentInfo);
    props.actSetModalStudentVisible(true);
  };

  const onAddStudentCv = (studentInfo) => {
    props.actSelectedAdd(studentInfo);
    props.addStudentCvModal(true); //modal show
  };

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
      width: "20%",
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "15%",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "15%",
    },
    {
      title: "",
      dataIndex: "function",
      width: "15%",
      render: (value, studentInfo) => (
        <div>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            shape="circle"
            onClick={() => onEditStudent(studentInfo)}
            style={{
              marginRight: "1rem",
              background: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
            }}
          />

          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => props.actSaveDeleteStudent(studentInfo.key - 1)}
            okText="Có"
            cancelText="Không"
          >
            <Button
              type="primary"
              danger
              size="small"
              icon={<DeleteOutlined />}
              shape="circle"
              style={{
                background: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)",
              }}
            />
          </Popconfirm>
          {/* set add CV */}
          <Button
            type="primary"
            size="normal"
            icon={<PlusOutlined />}
            style={{
              marginLeft: "1rem",
              background: "linear-gradient(315deg, #21d190 0%, #d65bca 74%)",
            }}
            onClick={() => onAddStudentCv(studentInfo)}
          >
            Thêm CV
          </Button>
        </div>
      ),
    },
  ];

  const data = listStudent.map((student, index) => ({
    key: index + 1,
    ...student,
  }));

  return <Table columns={columns} dataSource={data} />;
};

export default connect(
  (storeState) => ({
    listStudent: storeState.Student.listStudent,
    isModalAddCv: storeState.Student.isModalAddCv,
  }),
  {
    actSetModalStudentVisible,
    actSaveSetSelectedStudent,
    actSaveDeleteStudent,
    addStudentCvModal,
    actSelectedAdd,
  }
)(TableStudent);
