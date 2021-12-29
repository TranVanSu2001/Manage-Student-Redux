import React, { useState, useEffect, useMemo } from "react";
import {
  Modal,
  Button,
  Statistic,
  DatePicker,
  Space,
  notification,
  message,
} from "antd";
import { connect } from "react-redux";
import {
  addStudentCvModal,
  actSaveCreateStudent,
  actSaveUpdateStudent,
  actAddCv,
  actSelectedDateCv,
  actGetDateAddCv,
} from "src/redux/action/student";
import { Input, Form } from "antd";
import { MehOutlined } from "@ant-design/icons";
import { ChooseDateCv, NotiChooseDateCv, DatePickerCv } from "./style";

const ModalStuAddCv = (props) => {
  const { isModalAddCv, selectedStudent, dateDeadline, dateCreateCv } = props;
  // const [isModalAddCv, setIsModalAddCv] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name: selectedStudent && selectedStudent.name,
      CV: selectedStudent && selectedStudent.CV,
    });
  }, [isModalAddCv]);

  const showModal = () => {
    props.addStudentCvModal(true);
  };

  const onChange = (date, dateString) => {
    // const dateStringCv = dateString;
    // console.log(dateString);
    // return dateStringCv;
    props.actSelectedDateCv(dateString);
    console.log(dateString);

    ///
    console.log("date1:  ", date);

    const today = new Date();
    const timeNow =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    props.actGetDateAddCv(timeNow);
  };

  //tạo thông báo khi chọn deadline
  const openNotificationPickTrueDeadline = () => {
    notification.open({
      message: "Chọn lại deadline",
      description: `Bạn phải chọn deadline sau ngày ${dateCreateCv}`,
      icon: <MehOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const openNotificationPickDeadline = () => {
    notification.open({
      message: "Chọn deadline",
      description: "Bạn phải chọn deadline!!!",
      icon: <MehOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const key = "updatable";
  const openMessage = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      message.success({
        content: "Thêm công việc thành công!",
        key,
        duration: 2,
      });
    }, 1000);
  };

  const handleOk = async () => {
    const { name, CV } = await form.validateFields(["name", "CV"]);
    const deadline = dateDeadline;
    console.log(deadline);
    const timeAddCv = dateCreateCv;

    const compareDeadlineDate = deadline.slice(0, 2);
    const compareDeadlineMonth = deadline.slice(3, 5);
    const compareDeadlineYear = deadline.slice(6, 10);
    const compareCreateDate = timeAddCv.slice(0, 2);
    const compareCreateMonth = timeAddCv.slice(3, 5);
    const compareCreateYear = timeAddCv.slice(6, 10);

    if (deadline.length == 0) {
      openNotificationPickDeadline();
    } else {
      if (compareDeadlineYear < compareCreateYear) {
        openNotificationPickTrueDeadline();
      } else if (compareDeadlineYear > compareCreateYear) {
        const data = { name, CV, deadline, timeAddCv };
        console.log(data);
        props.actAddCv(data);

        props.addStudentCvModal(false);
        openMessage();
      } else {
        if (compareDeadlineMonth < compareCreateMonth) {
          openNotificationPickTrueDeadline();
        } else if (compareDeadlineMonth > compareCreateMonth) {
          const data = { name, CV, deadline, timeAddCv };
          console.log(data);
          props.actAddCv(data);

          props.addStudentCvModal(false);
          openMessage();
        } else {
          if (compareDeadlineDate < compareCreateDate) {
            openNotificationPickTrueDeadline();
          } else {
            const data = { name, CV, deadline, timeAddCv };
            console.log(data);
            props.actAddCv(data);

            props.addStudentCvModal(false);
            openMessage();
          }
        }
      }
    }
  };

  const handleCancel = () => {
    props.addStudentCvModal(false);
  };

  return (
    <>
      <Modal
        title="Thêm Công Việc"
        visible={isModalAddCv}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Thêm"}
        cancelText={"Hủy"}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            address: "Nam Định",
          }}
        >
          <Form.Item
            label="Tên học sinh"
            name="name"
            tooltip="Trường này không thể thay đổi"
            rules={[
              { required: true, message: "Vui lòng nhập *Tên học sinh*" },
            ]}
          >
            <Input
              placeholder="Nhập tên học sinh"
              size="large"
              disabled="true"
            />
          </Form.Item>
          <Form.Item
            label="Công việc:"
            name="CV"
            tooltip="Trường này là bắt buộc"
            rules={[{ required: true, message: "Vui lòng nhập *Công việc*" }]}
          >
            <Input placeholder="Nhập công việc" size="large" />
          </Form.Item>
        </Form>

        <ChooseDateCv>
          <NotiChooseDateCv>Chọn deadline</NotiChooseDateCv>
          <DatePickerCv>
            <Space direction="vertical">
              <DatePicker onChange={onChange} format="DD/MM/YYYY" />
            </Space>
          </DatePickerCv>
        </ChooseDateCv>
      </Modal>
    </>
  );
};

export default connect(
  (state) => ({
    isModalAddCv: state.Student.isModalAddCv,
    isModalVisible: state.Student.isModalVisible,
    selectedStudent: state.Student.selectedStudent,
    listCv: state.Student.listCv,
    dateDeadline: state.Student.dateDeadline,
    dateCreateCv: state.Student.dateCreateCv,
  }),
  {
    addStudentCvModal,
    actAddCv,
    actSaveCreateStudent,
    actSaveUpdateStudent,
    actSelectedDateCv,
    actGetDateAddCv,
  }
)(ModalStuAddCv);
