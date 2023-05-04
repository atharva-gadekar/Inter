import { useContext, useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { UserContext } from "../utils/context/UserContext";
import axios from "axios";

const ModalComponent = ({isModalVisible,setIsModalVisible}) => {
  const { user, setUser, token, isNewUser, setIsNewUser } = useContext(UserContext);
  const [tags, setTags] = useState([]);
  const[secondarytags,setSecondarytags]=useState([]);


  //fetching all tags 
  useEffect(() => {
    axios.get(`https://inter-api-8q0x.onrender.com/interests/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      const uniqueTags = new Set(response.data);
      setTags(uniqueTags);
    })
    .catch(error => {
      console.log(error);
    });
  }, [token]);
  


//fetching single tag
const handleSelectTag = (interestName) => {
  axios.get(`https://inter-api-8q0x.onrender.com/interests/${interestName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    const newTags = response.data;
    setSecondarytags([...secondarytags, ...newTags]);
  })
  .catch(error => {
    console.log(error);
  });
};




  const handleOk = () => {
    setIsNewUser(false);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsNewUser(false);
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Select Your Tags"
      visible={isModalVisible}
      maskClosable={false}
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
      bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}
    >
     <div className="flex flex-wrap mt-3">
  {Array.from(tags).map(tag => (
    <Tag key={tag._id} name={tag.name} handleSelectTag={handleSelectTag} />
  ))}
  {Array.from(secondarytags).map(secondarytag => (
    <Tag key={secondarytag} name={secondarytag} handleSelectTag={handleSelectTag} />
  ))}
</div>

    </Modal>
  );
};

const Tag = ({ name, handleSelectTag }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    handleSelectTag(name);
  };

  return (
    <div
      className={`px-3 py-2 rounded-md cursor-pointer m-1 ${
        isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={handleSelect}
    >
      {name}
    </div>
  );
};

export default ModalComponent;
