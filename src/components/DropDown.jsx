import { Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DropDown = ({ items }) => {
  return (
    <div className="dropDown">
      <Dropdown
        menu={{ items, selectable: true, defaultSelectedKeys: ["1"] }}
        className="dropDown"
      >
        <Typography.Link>
          <Space>
            Languages
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>
  );
};

export default DropDown;
