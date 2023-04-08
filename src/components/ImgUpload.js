import { Button, Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import '../App.css';

export default function App(setFile) {
  return (
    <div
      className="upload-component"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Upload.Dragger
        multiple={false}
        listType="picture"
        action={'http://localhost:3000/'}
        showUploadList={{ showRemoveIcon: true }}
        accept=".png,.jpeg"
        beforeUpload={(file) => {
          setFile(file);
          console.log({ file });
          return false;
        }}
		style={{ maxHeight: '150px' }}
		maxCount={1}
      >
       <CloudUploadOutlined style={{ fontSize: '36px', marginBottom: '12px', color: 'grey' }} />

        <div style={{ fontSize: '18px'}}>Upload your files here</div>
        <Button style={{ marginTop: '12px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '5px', border: 'none' }}>Click Upload</Button>
      </Upload.Dragger>
    </div>
  );
}
