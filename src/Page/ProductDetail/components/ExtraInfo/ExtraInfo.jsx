import React from "react";
import "./ExtraInfo.scss";
import { Table } from "react-bootstrap";

const detailInfo = [
  {
    name: "Kích thước màn hình",
    value: "6.1 inches",
  },
  {
    name: "Công nghệ màn hình",
    value: "OLED",
  },
  {
    name: "Độ phân giải màn hình",
    value: "2532 x 1170 pixels",
  },
  {
    name: "Camera trước",
    value: "12MP, f/2.2",
  },
  {
    name: "Camera sau",
    value: "Camera góc rộng: 12MP, f/1.6<br>Camera góc siêu rộng: 12MP, ƒ/2.4",
  },
  {
    name: "Quay video",
    value:
      "4K 2160p@30fps<br>FullHD 1080p@30fps<br>FullHD 1080p@60fps<br>HD 720p@30fps",
  },
  {
    name: "Chipset",
    value: "Apple A15",
  },
  {
    name: "Dung lượng RAM",
    value: "4 GB",
  },
  {
    name: "Pin",
    value: "Khoảng 3.200mAh",
  },
  {
    name: "Công nghệ sạc",
    value:
      "Sạc nhanh 20W, Sạc không dây, Sạc ngược không dây 15W, Sạc pin nhanh, Tiết kiệm pin",
  },
  {
    name: "Cổng sạc",
    value: "Lightning",
  },
  {
    name: "Thẻ SIM",
    value: "2 SIM (nano‑SIM và eSIM)",
  },
  {
    name: "Hệ điều hành",
    value: "iOS15",
  },
  {
    name: "Kích thước",
    value: "160.8 x 78.1 x 7.65mm",
  },
  {
    name: "Trọng lượng",
    value: "240g",
  },
  {
    name: "Chất liệu mặt lưng",
    value: "Kính",
  },
  {
    name: "Chất liệu khung viền",
    value: "Kim loại",
  },
];

const handleNewLine = (value) => {
  if (value.includes("<br>")) {
    let finalValue;
    const newValue = value.split("<br>");
    {
      finalValue = newValue.map((val, index) => {
        return (
          <div key={index}>
            {val}
            <br />
          </div>
        );
      });
    }
    return finalValue;
  }
  return value;
};

const ExtraInfo = () => {
  return (
    <Table striped bordered>
      <tbody>
        {detailInfo.map((item, index) => (
          <tr key={index}>
            <td className="name-column">{item.name}</td>
            <td className="value-column">{handleNewLine(item.value)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ExtraInfo;
