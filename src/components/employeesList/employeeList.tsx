import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./employeeList.module.scss";

import EmployeeItem from "../employeesItem/employeeItem";

const EmployeeList = () => {
  return (
    <div className={styles.list}>
      <EmployeeItem name={"Andrey"} />
    </div>
  );
};

export default EmployeeList;
