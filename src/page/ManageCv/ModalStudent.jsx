import { useEffect, useMemo } from "react";
import { Modal, Form, Input, InputNumber } from "antd";
import { connect } from "react-redux";
import {
  actSetModalStudentVisible,
  actSaveSetSelectedStudent,
  actSaveCreateStudent,
  actSaveUpdateStudent,
} from "src/redux/action/student";

const ModalStudent = (props) => {
  const { isModalVisible, selectedStudent } = props;
  const [form] = Form.useForm();

  const isCreateMode = useMemo(() => {
    if (selectedStudent) {
      return false;
    }

    return true;
  }, [selectedStudent]);

  useEffect(() => {
    form.setFieldsValue({
      name: selectedStudent && selectedStudent.name,
      age: selectedStudent && selectedStudent.age,
    });
  }, [isModalVisible]);

  const handleOk = async () => {
    const { name, age, address } = await form.validateFields([
      "name",
      "age",
      "address",
    ]);

    const data = {
      name,
      age,
      address,
    };

    if (isCreateMode) {
      props.actSaveCreateStudent(data);
    } else {
      props.actSaveUpdateStudent({
        indexOfStudent: selectedStudent.key - 1,
        studentInfo: data,
      });
    }

    props.actSetModalStudentVisible(false);
  };

  const handleCancel = () => {
    props.actSetModalStudentVisible(false);
  };

  const afterClose = () => {
    props.actSaveSetSelectedStudent(null);
  };

  return (
    <Modal
      title={!isCreateMode ? "Chỉnh sửa học sinh" : "Tạo mới học sinh"}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={afterClose}
      cancelText="Hủy"
      okText={!isCreateMode ? "Cập nhật" : "Tạo mới"}
      maskClosable={false}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          address: "Nam sssĐịnh",
        }}
      >
        <Form.Item
          label="Tên học sinh"
          name="name"
          tooltip="Trường này là bắt buộc"
          rules={[
            { required: true, message: "Vui lòng nhậppp *Tên học sinh*" },
          ]}
        >
          <Input placeholder="Nhập tên học sinh" size="large" />
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[{ required: false, message: "Vui lòng nhậdddp *Tuổi*" }]}
        >
          <InputNumber
            placeholder="Nhập số tuổi"
            style={{ width: "100%" }}
            size="large"
            min={10}
            max={24}
          />
        </Form.Item>

        <Form.Item label="Địa chỉ" name="address">
          <Input placeholder="Nhập địa chỉ" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default connect(
  (storeState) => ({
    isModalVisible: storeState.Student.isModalVisible,
    selectedStudent: storeState.Student.selectedStudent,
  }),
  {
    actSetModalStudentVisible,
    actSaveSetSelectedStudent,
    actSaveCreateStudent,
    actSaveUpdateStudent,
  }
)(ModalStudent);
