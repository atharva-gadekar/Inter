import { Modal, Checkbox } from 'antd';
import { useState } from 'react';

const ModalComponent = ({ visible, onOk, onCancel }) => {
  const [tags, setTags] = useState([]);

  const handleTagChange = (tag, checked) => {
    const newTags = checked
      ? [...tags, tag]
      : tags.filter((t) => t !== tag);
    setTags(newTags);
  };

  const handleOk = () => {
    onOk(tags);
  };

  return (
    <Modal
      title="Select your tags"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Checkbox.Group onChange={handleTagChange} value={tags}>
        <Checkbox value="webd">Web Development</Checkbox>
        <Checkbox value="appd">App Development</Checkbox>
        <Checkbox value="aiml">AI/ML</Checkbox>
      </Checkbox.Group>
    </Modal>
  );
};

export default ModalComponent;
