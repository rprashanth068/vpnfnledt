import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Form } from "../../IndividualsForm/IndividualsForm";

export const defaultMargin = 10;

//const save_ico = require("../../../icons/NRD-00001_02013_ICO_Save cccccc_001.svg");
const delete_ico = require("../../../icons/NRD-00001_02013_ICO_Delete 52525b_001.svg");
const delete_icon1 = require("../../../icons/NRD-00001_02013_ICO_Delete cccccc_001.svg");
//const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");
//const plus_ico = require("../../../icons/NRD-00001_02013_ICO_New 52525b_001.svg");
//const toggle_ico = require("../../../icons/NRD-00001_02013_ICO_ToggleLeft cccccc_001.svg");
//const save_icon = require("../../../icons/NRD-00001_02013_ICO_Save ff6600_001.svg");
//const delete_icon = require("../../../icons/NRD-00001_02013_ICO_Delete ff6600_001.svg");
const edit_icon = require("../../../icons/NRD-00001_02013_ICO_Edit ff6600_001 (1).svg");
const plus_icon = require("../../../icons/NRD-00001_02013_ICO_New ff6600_001 (2).svg");
import { state, country, canadaStates, usStates } from "../../../data/Address";
import { comments, documents, parents } from "../../../data/data";
import { Typeahead } from "react-typeahead";


interface IHelloWorldState {
  states: state;
  countries: country;
  save: any;
  edit: any;
  edit2: any;
  delete: any;
  plus: any;
  delete1: any;
  delete2: any;
  delete3: any;
  comments: comments;
  documents: documents;
  selectedComment: any;
  tComments: any;
  selectedDocument: any;
  tDocuments: any;
  selected: any;
  selectedCountry: number;
  zipvalidator: boolean;
  activeForm: number;
  homequatere: boolean;
}

export default class HelloWorld extends React.Component<
  IHelloWorldProps,
  IHelloWorldState
> {
  /*   render() {
    return <Form />;
  } */
  constructor(props) {
    super(props);

    this.state = {
      states: state,
      countries: country,
      //save: save_ico,
      //edit: edit_ico,
      edit2: edit_ico,
      delete: delete_ico,
      //plus: plus_ico,
      delete1: delete_icon1,
      delete2: delete_ico,
      //delete3: delete_ico,
     // comments: comments,
      //documents: documents,
      //selectedComment: {},
      tComments: [],
      //selectedDocument: {},
      tDocuments: [],
      selected: [],
      selectedCountry: 0,
      zipvalidator: true,
      activeForm: 0,
      homequatere: false
    };
  }

  refe2;
  refe1;

  public iconOver = type => {
    switch (type) {
      case "save":
        this.setState({ save: save_icon });
        break;
      case "edit":
        this.setState({ edit: edit_icon });
        break;
      case "edit2":
        this.setState({ edit2: edit_icon });
        break;
      case "delete":
        this.setState({ delete: delete_icon });
        break;
      case "plus":
        this.setState({ plus: plus_icon });
        break;
      case "delete1":
        this.setState({ delete1: delete_icon });
        break;
      case "delete2":
        this.setState({ delete2: delete_icon });
        break;
      case "delete3":
        this.setState({ delete3: delete_icon });
        break;
      default:
        break;
    }
  };

  changeHomeQuarter = e => {
    this.setState({ homequatere: e.target.checked });
  };

  iconOut = type => {
    switch (type) {
      case "save":
        this.setState({ save: save_ico });
        break;
      case "edit":
        this.setState({ edit: edit_ico });
        break;
      case "edit2":
        this.setState({ edit2: edit_ico });
        break;

      case "delete":
        this.setState({ delete: delete_ico });
        break;
      case "plus":
        this.setState({ plus: plus_ico });
        break;
      case "delete1":
        this.setState({ delete1: delete_icon1 });
        break;
      case "delete2":
        this.setState({ delete2: delete_ico });
        break;
      case "delete3":
        this.setState({ delete3: delete_ico });
        break;

      default:
        break;
    }
  };


  selectCountry = e => {
    this.setState({ selectedCountry: e.target.selectedIndex });
  };

  getValidator = e => {
    if (e.target.value === "") {
      this.setState({ zipvalidator: true });
      return;
    }
    switch (this.state.selectedCountry) {
      case 214:
        this.setState({
          zipvalidator: /^(([A-Za-z][A-Za-z]\s\d{5}))$/.test(e.target.value)
        });
        return;
      case 0:
        this.setState({
          zipvalidator: /^(([A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d))$/.test(
            e.target.value
          )
        });
        return;
      default:
        this.setState({ zipvalidator: true });
        return;
    }
  };





  public render(): React.ReactElement<IHelloWorldProps> {
    const states =
      this.state.selectedCountry === 0
        ? canadaStates
        : this.state.selectedCountry === 214
        ? usStates
        : [];


    /* return ( */



       /*  To be Included only===
       export default class App extends React.Component, {} {
          public render(): React.ReactElement<> {
            return (
              <div className={style.main}>
                <IndividualsForm />
              </div>
            );
          }
        } */


         /*  toggleForms = () => {
    this.setState({ activeForm: this.state.activeForm === 0 ? 1 : 0 });
  }; */



        <div>
        <Form activeForm={this.state.activeForm}
              delete3={this.state.delete3}
              delete1={this.state.delete1}
              plus={this.state.plus}
              save={this.state.save}
              comments={this.state.comments}
              selectedComment={this.state.selectedComment}
              documents={this.state.documents}
              selectedDocument={this.state.selectedDocument}
              iconOver={this.iconOver}
              iconOut={this.iconOut}
              ></Form>
      </div>
    </>
  )
}
}



