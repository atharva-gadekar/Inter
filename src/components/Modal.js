import { useState } from "react";
import { Modal, Button } from "antd";

const ModalComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Click Me
      </Button>
      <Modal
        title="Select Your Tags"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <div className="flex flex-wrap">
          <Tag />
          <Tag />
          <Tag />
        </div>
      </Modal>
    </>
  );
};

const Tag = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`px-3 py-2 rounded-md cursor-pointer m-1 ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={handleSelect}
    >
      {isSelected ? "Selected" : "Not Selected"}
    </div>
  );
};

export default ModalComponent;
