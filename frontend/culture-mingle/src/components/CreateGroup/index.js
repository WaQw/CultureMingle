import { Form, Input, Modal, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CreateGroup = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
    };

    return (
        <Modal
            open={open}
            title="Start Your Group!"
            okText="Done"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields().then((values) => {
                    form.resetFields();
                    onCreate(values);
                })
                .catch((info) => {
                console.log('Validate Failed:', info);
                });
            }}
            style={{textAlign:'center'}}
            centered="true"
        >

            <Form form={form} layout="vertical" name="form_in_modal">
        
                <Form.Item name="title" label={<label style={{ fontSize: "16px" }}>Title</label>} style={{marginTop:"30px"}}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of your group!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="location" label={<label style={{ fontSize: "16px" }}>Location</label>}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the location of your group!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="description" label={<label style={{ fontSize: "16px" }}>Description</label>}
                    rules={[
                        {
                            required: true,
                            message: 'Please input the description of your group!',
                        },
                    ]}
                >
                    <TextArea rows={3} />
                </Form.Item>

                <Form.Item label={<label style={{ fontSize: "16px" }}>Photo</label>}>
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

            </Form>

        </Modal>
  );
}

export default CreateGroup;