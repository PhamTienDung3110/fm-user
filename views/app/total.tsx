import React from "react";
import CusText from "../components/cusText";
import Utils from "@/utils/format";

function Total() {
  return (
    <span className="flex justify-between items-center cus-box-1">
      <CusText bold>Tổng:</CusText>
      <CusText bold>{Utils.formatCurrency(1000)}</CusText>
    </span>
  );
}

export default Total;
