"use client";

import React, { useState } from "react";
import CusText from "../components/cusText";
import { Divider } from "antd";
import Utils from "@/utils/format";

const dataDebt = [
    {
        id: 1,
        name: "Long",
        cost: 100000,
        isDebt: true,
        detail: "Detail about Long",
        time: "2024-07-30T10:00:00Z"
    },
    {
        id: 2,
        name: "Minh",
        cost: 150000,
        isDebt: false,
        detail: "Detail about Minh",
        time: "2024-07-30T11:00:00Z"
    },
    {
        id: 3,
        name: "Linh",
        cost: 200000,
        isDebt: true,
        detail: "Detail about Linh",
        time: "2024-07-30T12:00:00Z"
    },
    {
        id: 4,
        name: "Tuan",
        cost: 120000,
        isDebt: false,
        detail: "Detail about Tuan",
        time: "2024-07-30T13:00:00Z"
    },
    {
        id: 5,
        name: "Hoa",
        cost: 180000,
        isDebt: true,
        detail: "Detail about Hoa",
        time: "2024-07-30T14:00:00Z"
    },
    {
        id: 6,
        name: "Anh",
        cost: 220000,
        isDebt: false,
        detail: "Detail about Anh",
        time: "2024-07-30T15:00:00Z"
    },
    {
        id: 7,
        name: "Phuong",
        cost: 130000,
        isDebt: true,
        detail: "Detail about Phuong",
        time: "2024-07-30T16:00:00Z"
    }
];


function Debt() {
  const [listData, setListData] = useState(dataDebt);

  return (
    <span className="cus-box-1">
      <CusText bold>Vay/Nợ:</CusText>
      {listData.map((ele) => (
        <>
          <Divider className="my-2" />
          <div className="flex justify-between" key={ele.id}>
            <p>{ele.name}</p>
            <div className="flex">
              {/* <p className="w-10">{Utils.extractDayFromDate(ele.time)}</p> */}
              <p>{ele.detail}</p>
            </div>
            <CusText bold red>
              -{Utils.formatCurrency(ele.cost)}
            </CusText>
          </div>
        </>
      ))}
    </span>
  );
}

export default Debt;
