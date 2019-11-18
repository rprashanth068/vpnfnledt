import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const plus_ico = require("../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg");

export interface DocumentstableProps {
  delete3: any;
  plus: any;
  documents: any;
  selecteddocument: any;
  iconOver: any;
  iconOut: any;
  
}

const selectDocument = (event, row) => {
  row._docname = row.docname;
  this.setState({ selectedDocument: row });
  this.state.documents.map(d => {
    if (d.id === row.id) {
      d.selected = !d.selected;
      if (d.selected) {
        this.setState({ selectedDocument: row });
      } else {
        this.setState({ selectedDocument: {} });
        this.refe1.value = "";
      }
    } else {
      d.selected = false;
    }
  });
  //console.log(documents);
};

const saveDocuments = () => {
  this.state.tDocuments.map(d => {
    d.docname = d._docname ? d._docname : d.docname;
  });
  this.setState({ documents: this.state.tDocuments });
};

const  changeDocument = event => {
  let e = event.target.value;
  event.preventDefault();

  let _dDoument1 = this.state.documents;

  let t = {};
  _dDoument1.forEach(d => {
    if (d.id === this.state.selectedDocument["id"]) {
      d._docname = e;
      t = d;
    }
  });
  this.setState({ selectedDocument: t });
  this.setState({ tDocuments: _dDoument1 });
};



export const Documentstable: React.FC<DocumentstableProps> = props => {
  const [edit,setEdit] = React.useState(edit_ico)
  const [delete3, setdelete3] = React.useState(delete_ico);
  const [plus, setplus] = React.useState(plus_ico);
  return (
    <>
      <h5>Documents</h5>
      <div className={styles.mLeft}>
        <img
          src={this.state.edit2 as string}
          height="18px"
          width="18px"
          alt="editicon"
          onMouseOver={() => this.iconOver("edit2")}
          onMouseOut={() => this.iconOut("edit2")}
        />
        &nbsp; &nbsp; &nbsp;
        <img
          src={this.state.delete as string}
          height="18px"
          width="18px"
          alt="deleteicon"
          onMouseOver={() => this.iconOver("delete")}
          onMouseOut={() => this.iconOut("delete")}
        />
      </div>
      <div
        className={`${styles["ms-TextField"]} ${styles["table-input"]} ${styles.mLeft}`}
      >
        <input
          type="text"
          className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
          ref={node => (this.refe1 = node)}
          value={this.state.selectedDocument["_docname"]}
          id="formGroupExampleInput"
          placeholder=" "
          onChange={e => this.changeDocument(e)}
        />
        <img
          src={this.state.delete1 as string}
          height="20px"
          width="20px"
          alt="deleteicon"
          onMouseOver={() => this.iconOver("delete1")}
          onMouseOut={() => this.iconOut("delete1")}
          onClick={this.saveDocuments}
        />
      </div>

      <div className={`${styles["document-Tabel"]} ${styles.mLeft}`}>
        <table className={styles["table-Head"]}>
          <thead>
            <tr>
              <th scope="row">
                <div className="form-check form-check-align">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                </div>
              </th>
              <th scope="col">Document Name</th>
              <th scope="col">Date</th>
              <th scope="col">Who Uploaded</th>
            </tr>
          </thead>
        </table>
      </div>

      <div
        className={`${styles["document-Tabel"]} ${styles["scroll-table"]} ${styles.mLeft}`}
      >
        <table className={styles["table-Body"]}>
          <tbody>
            {this.state.documents.map(row => (
              <tr>
                <td scope="row">
                  <div className="form-check form-check-align">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      name="document_chk"
                      defaultValue={row.selected}
                      checked={row.selected}
                      onChange={e => {
                        this.selectDocument(e, row);
                      }}
                    />
                  </div>
                </td>
                <td>{row.docname}</td>
                <td>{row.dateuploaded}</td>
                <td>{row.whouploaded}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        )} )
      </div>
    </>
  );
};
