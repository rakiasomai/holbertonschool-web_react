/// <reference path="./crud.d.ts" />
import {RowID, RowElement} from "./interface";
import * as CURD from "./crud";

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CURD.insertRow(row);
console.log(newRowID);

const updatedRow: RowElement = {...row, age:23};
CURD.updateRow(newRowID, updatedRow);
console.log(updatedRow);

CURD.deleteRow(newRowID);
