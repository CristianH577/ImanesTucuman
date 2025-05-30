import React from "react";

import { Spinner } from "@nextui-org/react";

function TableCustom({
  id,
  className,
  classNames,
  columns,
  rows,
  rowColumnId,
  makeCellContent,
  makeHeaderCell,
  makeRow,
  makeCell,
  ariaLabel,
  selectionMode,
  selectedRows,
  onSelectedRows,
  isLoading,
  emptyMessage,
  tdLabel,
}) {
  const classNames_ = {
    className: className || "",
    table: "",
    thead: "",
    theadRow: "",
    th: "",
    tbody: "",
    row: "",
    td: "",
    ...classNames,
  };
  const columns_ = columns?.length ? columns : [];

  const handleSelectedRow = (id) => {
    onSelectedRows && onSelectedRows(id);
  };

  const rows_ = () => {
    return rows?.map((row, i) => {
      var id = row?.[rowColumnId] || row?.key || row?.id || i;

      const className = `${selectionMode ? "cursor-pointer" : ""} ${
        selectionMode && selectionMode === "single"
          ? "hover:bg-default-100 data-[selected=true]:bg-default-200"
          : ""
      } ${classNames_.row}`;

      const dataRow = {
        "data-selected": selectedRows && selectedRows?.includes(id),
        "data-id": id,
      };

      var tr = <tr onClick={() => handleSelectedRow(id)}></tr>;
      if (makeRow) tr = makeRow(row);

      const existingData = tr?.props || {};
      const mergedData = { ...existingData, ...dataRow };
      const existingClassName = tr?.props?.className || "";
      const mergedClassName = `${existingClassName} ${className}`.trim();

      tr = React.cloneElement(tr, {
        key: id,
        ...mergedData,
        className: mergedClassName || null,
      });

      const cells = columns_.map((col) => {
        const idCol = col?.key || col?.id || col;

        var td = <td></td>;
        const tdObj = {
          key: id + "_" + idCol,
          ...mergedData,
          className: `py-2 px-3 first:rounded-l-lg last:rounded-r-lg ${classNames_.td}`,
        };
        if (makeCell) td = makeCell(row, idCol);
        if (tdLabel) tdObj["data-label"] = col?.label || "";

        td = React.cloneElement(td, tdObj);

        return React.cloneElement(
          td,
          {},
          makeCellContent
            ? makeCellContent(row, idCol)
            : row[idCol]
            ? row[idCol]
            : null
        );

        // return (
        //   <td
        //     key={id + "_" + idCol}
        //     className={`py-2 px-3 capitalize first:rounded-l-lg last:rounded-r-lg ${classNames_.td}`}
        //     // {...datas?.td}
        //   >
        //     {makeCellContent
        //       ? makeCellContent(row, idCol)
        //       : row[idCol]
        //       ? row[idCol]
        //       : null}
        //   </td>
        // );
      });

      return React.cloneElement(tr, {}, cells);
    });
  };

  return (
    <div
      id={id || ""}
      data-slot="container"
      className={`p-4 bg-content1 rounded-large overflow-auto w-full ${classNames_.className}`}
    >
      <table
        aria-label={ariaLabel ? ariaLabel : null}
        className={
          "min-w-full h-auto table-auto space-y-4 " + classNames_?.table
        }
      >
        <thead className={"bg-content2 p-4 " + classNames_.thead}>
          <tr data-slot="theadRow" className={"pb-4 " + classNames_.theadRow}>
            {columns_.map((col, i) => {
              let key = i;
              let label = "";

              if (typeof col === "string") {
                key = col;
                label = col;
              } else if (typeof col === "object") {
                key = col?.id || col?.key || i;
                label = col?.label;
              }

              if (makeHeaderCell) label = makeHeaderCell(col);

              return (
                <th
                  key={key}
                  data-slot="th"
                  className={
                    "p-3 text- align-middle bg-default-200 whitespace-nowrap font-semibold first:rounded-l-lg last:rounded-r-lg " +
                    classNames_.th
                  }
                >
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className={classNames_.tbody}>
          {/* <tr colSpan={columns_.length} className="h-4"></tr> */}

          {isLoading ? (
            <tr>
              <td colSpan={columns_.length} className="text-center p-4">
                <Spinner className="self-center" />
              </td>
            </tr>
          ) : !rows?.length ? (
            <tr>
              <td
                colSpan={columns_.length}
                className="text-center p-4 text-3xl"
              >
                {emptyMessage || "Sin elementos"}
              </td>
            </tr>
          ) : (
            rows_()
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableCustom;
