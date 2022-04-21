import React from "react";
import "./style.css";

import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
  Lookup,
  Toolbar,
  Item,
} from "devextreme-react/data-grid";

import { Button } from "devextreme-react/button";

import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import { employees, states } from "./data.js";

const dataSource = new DataSource({
  store: new ArrayStore({
    data: employees,
    key: "ID",
  }),
});

class TT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItemKeys: [],
    };
    this.selectionChanged = this.selectionChanged.bind(this);
    this.deleteRecords = this.deleteRecords.bind(this);
  }

  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid
          id="gridContainer"
          dataSource={dataSource}
          showBorders={true}
          selectedRowKeys={this.state.selectedItemKeys}
          onSelectionChanged={this.selectionChanged}
        >
          <Selection mode="multiple" />
          <Paging enabled={false} />
          <Editing
            mode="cell"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
          />

          <Column dataField="Prefix" caption="Title" width={55} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="Position" width={170} />
          <Column dataField="StateID" caption="State" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="BirthDate" dataType="date" />
          <Toolbar>
            <Item name="addRowButton" showText="always" />
            <Item location="after">
              <Button
                onClick={this.deleteRecords}
                icon="trash"
                disabled={!this.state.selectedItemKeys.length}
                text="Delete Selected Records"
              />
            </Item>
          </Toolbar>
        </DataGrid>
      </div>
    );
  }

  deleteRecords() {
    this.state.selectedItemKeys.forEach((key) => {
      dataSource.store().remove(key);
    });
    this.setState({
      selectedItemKeys: [],
    });
    dataSource.reload();
  }

  selectionChanged(data) {
    this.setState({
      selectedItemKeys: data.selectedRowKeys,
    });
  }
}

export default TT;