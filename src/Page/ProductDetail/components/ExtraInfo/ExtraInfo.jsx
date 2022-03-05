import React, { useState, useEffect } from "react";
import "./ExtraInfo.scss";
import { Table } from "react-bootstrap";
import { AxiosClient } from "../../../../services/API/axiosConnection";
import localApiName from "../../../../services/API/axiosEndPoint";

const detailInfo = [
  {
    name: "Công nghệ màn hình",
    value: "",
  },
  {
    name: "Độ phân giải màn hình",
    value: "",
  },
  {
    name: "Kích thước màn hình",
    value: "",
  },
  {
    name: "Camera sau",
    value: "",
  },
  {
    name: "Quay video",
    value: "",
  },
  {
    name: "Camera trước",
    value: "",
  },
  {
    name: "Hệ điều hành",
    value: "",
  },
  {
    name: "Chip",
    value: "",
  },
  {
    name: "CPU",
    value: "",
  },
  {
    name: "GPU",
    value: "",
  },
  {
    name: "RAM",
    value: "",
  },
  {
    name: "Bộ nhớ trong",
    value: "",
  },
  {
    name: "SIM",
    value: "",
  },
  {
    name: "Wifi",
    value: "",
  },
  {
    name: "GPS",
    value: "",
  },
  {
    name: "Bluetooth",
    value: "",
  },
  {
    name: "Kích thước",
    value: "",
  },
  {
    name: "Khối lượng",
    value: "",
  },
  {
    name: "Dung lượng pin",
    value: "",
  },
  {
    name: "Loại pin",
    value: "",
  },
];

const handleNewLine = (value) => {
  if (value.includes(" / ")) {
    let finalValue;
    const newValue = value.split(" / ");

    finalValue = newValue.map((val, index) => {
      return (
        <div key={index}>
          {val}
          <br />
        </div>
      );
    });

    return finalValue;
  }
  return value;
};

const ExtraInfo = ({ idProduct, loadingPage }) => {
  const [extraInfo, setExtraInfo] = useState([]);

  async function fetchExtraInfoApi() {
    const { data } = await AxiosClient.get(localApiName.apiExtraInfo);
    let newExtraInfo;
    data.map((item, index) => {
      if (item.id_product === idProduct) {
        newExtraInfo = Object.values(item);
        newExtraInfo.pop(); //Delete first element
        newExtraInfo.shift(); //Delete last element
        newExtraInfo.shift();
        detailInfo.map((item, index) => {
          item.value = newExtraInfo[index];
        });
      }
    });
    setExtraInfo(detailInfo);
  }

  useEffect(() => {
    fetchExtraInfoApi();
  }, []);

  return (
    <div className="table_info">
      <Table striped bordered>
        <tbody>
          {detailInfo.map((item, index) => {
            // console.log(item, index);
            return (
              <tr key={index}>
                <td className="name-column">{item.name}</td>
                <td className="value-column">{handleNewLine(item.value)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ExtraInfo;
