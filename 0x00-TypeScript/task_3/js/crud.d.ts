import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): number;
export function deleteRow(row_id: RowID): void;
export function updateRow(row_id: RowID, row: RowElement): RowID;
