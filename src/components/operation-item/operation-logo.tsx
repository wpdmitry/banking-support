import React from "react";

import bcm from "../../tools/bcm";

import { Operation } from "../../services/operations-service";

import { UserLogo, MerchantLogo } from "../logos";
import { MoneyBagIcon, BankBuildingIcon } from "../icons";

import styles from "./operation-logo.module.scss";

const b = bcm(styles);

type OperationLogoProps = {
  operation: Operation;
  size?: number;
};

function OperationLogo({ operation, size = 30 }: OperationLogoProps) {
  return (
    <div className={b()} style={{ height: size, width: size }}>
      {operation.type === "1" && (
        <MerchantLogo merchantId={operation.merchant.id} width="100%" />
      )}
      {operation.type === "2" && <MoneyBagIcon style={{ width: "50%" }} />}
      {operation.type === "3" && <MoneyBagIcon style={{ width: "50%" }} />}
      {operation.type === "4" && (
        <UserLogo userId={operation.user.id} width="100%" />
      )}
      {operation.type === "5" && <BankBuildingIcon style={{ width: "50%" }} />}
      {operation.type === "6" && <BankBuildingIcon style={{ width: "50%" }} />}
    </div>
  );
}

export default OperationLogo;
