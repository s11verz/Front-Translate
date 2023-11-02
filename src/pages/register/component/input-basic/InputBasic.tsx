import React from "react";
import styles from "./InputBasic.module.scss";

const InputBasic: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputBasic;
