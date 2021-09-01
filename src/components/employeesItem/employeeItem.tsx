import React from "react";
import PropTypes from "prop-types";
import styles from "./employeeItem.module.scss";
import { ProgressBar } from "../progressBar/ProgressBar";

const EmployeeItem = (employee: { name: string }) => {
  console.log(employee);
  return (
    <div className={styles.container}>
      <ProgressBar />
      <h1>Hey Ho ! La La ley, {employee.name} </h1>
    </div>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object,
};
EmployeeItem.defaultProps = {
  employee: {},
};
export default EmployeeItem;
