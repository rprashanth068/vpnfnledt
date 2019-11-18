import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
const save_icon = require("../../../icons/NRD-00001_02013_ICO_Save ff6600_001.svg");
const delete_icon = require("../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg");
const toggle_ico = require("../../../icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg");

export interface INameProps {}


const  toggleForms = () => {
  this.setState({ activeForm: this.state.activeForm === 0 ? 1 : 0 });
};

export const MainHeader: React.FC<INameProps> = props => {
  return (
    <>
      <div className={styles["container main-container"]}>
        <div className={styles["contact-header-container"]}>
          <h5 className={styles["contact-header"]}>Contact</h5>
        </div>
        <div className={`${styles.row} ${styles["contact-toolbar"]}`}>
          <div className={`${styles["col-2"]} ${styles["toolbarAlign"]}`}>
            <img
              src={this.state.save as string}
              height="16px"
              width="16px"
              alt="saveicon"
              onMouseOver={() => this.iconOver("save")}
              onMouseOut={() => this.iconOut("save")}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <img
              src={this.state.delete1 as string}
              height="16px"
              width="16px"
              alt="deleteicon"
              onMouseOver={() => this.iconOver("delete1")}
              onMouseOut={() => this.iconOut("delete1")}
            />
          </div>
          <div className={styles["col-1"]}>
            <span className={styles.togglespan}>Individuals</span>
          </div>
          &nbsp; &nbsp;
          <div className={`${styles["col-1"]} ${styles["align-center"]}`}>
            <img
              src={toggle_ico as string}
              height="15px"
              width="25px"
              className={styles.toggleicon}
              alt="toggleicon"
              onClick={this.toggleForms}
            />
          </div>
          &nbsp; &nbsp;
          <div className={styles["col-2"]}>
            <span className={styles.togglespan}>Entities</span>
          </div>
        </div>
      </div>
      )} )
    </>
  );
};
