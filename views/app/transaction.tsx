"use client";

import React, { useEffect, useState } from "react";
import CusText from "../components/cusText";
import Utils from "@/utils/format";
import { Divider, Select } from "antd";

interface dataTransactionProps {
  id: number;
  category: string;
  detail: string;
  cost: number;
  time: string;
}

const dataTransactionTemp: dataTransactionProps[] = [
  {
    id: 1,
    category: "ăn uống",
    detail: "ăn sáng",
    cost: 1000,
    time: "30/7/2024",
  },
  {
    id: 2,
    category: "ăn uống",
    detail: "ăn trưa",
    cost: 2000,
    time: "30/7/2024",
  },
  {
    id: 3,
    category: "ăn uống",
    detail: "ăn tối",
    cost: 3000,
    time: "30/7/2024",
  },
  {
    id: 4,
    category: "giải trí",
    detail: "xem phim",
    cost: 5000,
    time: "29/7/2024",
  },
  {
    id: 5,
    category: "mua sắm",
    detail: "mua quần áo",
    cost: 7000,
    time: "28/7/2024",
  },
  {
    id: 6,
    category: "đi lại",
    detail: "xe bus",
    cost: 1500,
    time: "27/7/2024",
  },
  {
    id: 7,
    category: "giải trí",
    detail: "đi cafe",
    cost: 2000,
    time: "26/7/2024",
  },
  {
    id: 8,
    category: "ăn uống",
    detail: "ăn vặt",
    cost: 1000,
    time: "25/7/2024",
  },
  {
    id: 9,
    category: "sức khỏe",
    detail: "mua thuốc",
    cost: 3000,
    time: "24/7/2024",
  },
  {
    id: 10,
    category: "giải trí",
    detail: "chơi game",
    cost: 4000,
    time: "23/7/2024",
  },
];

const dataSelectTime = [
  { value: "1", label: "Tuần" },
  { value: "2", label: "Tháng" },
  { value: "3", label: "Năm" },
];

function Transaction() {
  const [currentSelectTime, setCurrentSelectTime] = useState("1");
  const [currentRangeTime, setCurrentRangeTime] = useState("");
  const [dataTransaction, setDataTransaction] = useState(dataTransactionTemp);

  useEffect(() => {
    let startTime;
    let endTime;
    if (currentSelectTime == "1") {
      startTime = Utils.getWeekForDate(new Date()).start;
      endTime = Utils.getWeekForDate(new Date()).end;
    } else if (currentSelectTime == "2") {
      startTime = Utils.getMonthPeriodForDate(new Date()).start;
      endTime = Utils.getMonthPeriodForDate(new Date()).end;
    }
    setCurrentRangeTime(
      `${Utils.extractDatePart(Utils.formatDate(startTime), "month")} - ${Utils.extractDatePart(
        Utils.formatDate(endTime),
        "month"
      )}`
    );
    handleDataTransaction(startTime, endTime)
  }, [currentSelectTime]);

  const handleDataTransaction = (startTime: Date | undefined, endTime: Date | undefined) => {
    if(startTime && endTime) {
      console.log(startTime);
      console.log(endTime);
    }
  }

  const handleChangeTime = (value: string) => {
    console.log(`selected ${value}`);
    setCurrentSelectTime(value);
  };

  return (
    <div className="flex flex-col cus-box-1 mt-3">
      <div className="flex justify-between align-center">
        <CusText bold>Transaction</CusText>
        <CusText>{currentRangeTime}</CusText>
        <Select
          defaultValue="1"
          style={{ width: 100 }}
          onChange={handleChangeTime}
          value={currentSelectTime}
          options={dataSelectTime}
        />
      </div>
      <div>
        {dataTransaction.map((ele) => (
          <div key={ele.id}>
            <Divider className="my-2" />
            <div className="flex justify-between">
              <div className="flex">
                <p className="w-10">{Utils.extractDayFromDate(ele.time)}</p>
                <p>{ele.category}</p>
              </div>
              <CusText bold red>
                -{Utils.formatCurrency(ele.cost)}
              </CusText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;
