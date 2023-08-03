import React, { useCallback, useState } from "react";
import st from "../../style.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import cx from "./Orders.module.scss";
import table from "../../datatable.module.scss";
import { Card, Button, Row, Col, Modal, Form, Dropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { alpha, Box, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { BsPlusLg } from "react-icons/bs";
import icon1 from "../../images/icon-branch.svg";
import icon2 from "../../images/icon-calendar.svg";
import icon3 from "../../images/icon-call.svg";
import icon4 from "../../images/icon-export.svg";
import icon5 from "../../images/icon-call.svg";
import iconRefresh from "../../images/icon-refresh.svg";
import iconFilter from "../../images/icon-filter.svg";
import Modals from "../../components/Modals/OrderModal";

import { Branches, BusinessDate, Export, ActionDropdown } from "./OrderDropdowns";

interface Data {
  reference: string;
  number: string;
  branch: string;
  customer: string;
  status: string;
  source: string;
  total: string;
  business: string;
}

const rows = [
  {
    reference: "14045",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14046",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14047",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14048",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14049",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14050",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14051",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14052",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14053",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14054",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14055",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14056",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14057",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14058",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14059",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14060",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14061",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14062",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14063",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14064",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14065",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14066",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14067",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14068",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14069",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14070",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14071",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14072",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14073",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
  {
    reference: "14074",
    number: "1092",
    branch: "Mall 1",
    customer: "-",
    status: "Done",
    source: "Cashier",
    total: "50",
    business: "2022-09-11",
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "reference",
    numeric: false,
    disablePadding: true,
    label: "Reference",
  },
  {
    id: "number",
    numeric: true,
    disablePadding: false,
    label: "Number",
  },
  {
    id: "branch",
    numeric: true,
    disablePadding: false,
    label: "Branch",
  },
  {
    id: "customer",
    numeric: true,
    disablePadding: false,
    label: "Customer",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "source",
    numeric: true,
    disablePadding: false,
    label: "Source",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  {
    id: "business",
    numeric: true,
    disablePadding: false,
    label: "Business Date",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>

        {numSelected === 0 ? <>  {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}</>
          : <>
            <TableCell className="p-0" style={{ width: '220px' }}>
              <div className={`${table.actionCheckbox}`}>
                <div className={`${table.selectedCount}`}>
                  {numSelected} Selected
                </div>
                <div className={`${table.actionDropdown}`}>
                  <ActionDropdown />
                </div>
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </>}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState("");

  const handleShow = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setModalName(modalname);
    setShow(status);
  };

  const handleClose = () => {
    setModalName("");
    setShow(false);
  };

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <div className={`${table.mainTitleRow}`}>
          <ul className={`${table.filterList}`}>
            <li>
              <button className={`btn ${table.filterBtn} ${table.active}`}>
                All
              </button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>Today</button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>Draft</button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>Pending</button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>Archive</button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>Ahead</button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>
                Call Center
              </button>{" "}
            </li>
            <li>
              <button className={`btn ${table.filterBtn}`}>API</button>{" "}
            </li>
          </ul>
          <ul className={`${table.rightActionIcons}`}>
            <li>
              <NavLink className={`${table.refreshBtn}`} to="#">
                <img src={iconRefresh} />
              </NavLink>
            </li>
            <li>
              <button
                className={`${table.filterBtn} btn`}
                onClick={() => {
                  handleShow("order filter", true);
                  console.log("check");
                }}
              >
                <img src={iconFilter} className={`${st.icon}`} />
                Filters
              </button>
            </li>
            <li>
              <Dropdown className={`${table.plusDropdown}`}>
                <Dropdown.Toggle id="dropdown-basic">
                  <BsPlusLg />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <ul className={`${table.dropDownUl}`}>
                    <li>
                      <label
                        className={`${table.checkbox} ${table.disabled}`}
                      >
                        <input type="checkbox" disabled checked />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Reference
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" checked />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Number
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Branch
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Customer
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Status
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Source
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Total
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Business Date 
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Opened At 
                      </label>
                    </li>
                    <li>
                      <label className={`${table.checkbox}`}>
                        <input type="checkbox" />
                        <span className={`${table.checkmark}`}></span>{" "}
                        Actions
                      </label>
                    </li>
                  </ul>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </Toolbar>
      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
};

function EnhancedTable() {
  const navigate = useNavigate();
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("branch");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.reference);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const TablePaginationActions = (event: any) => {
    console.log(event, "TablePaginationActions");
    return (
      <>
        <div className={`${table.pagination}`}></div>
      </>
    );
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  function defaultLabelDisplayedRows({ from, to, count }: any) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }

  function redirectToAnotherPage(id: string) {
    navigate(`${id}`);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.reference);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.reference)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.reference}
                      selected={isItemSelected}
                    >
                      <TableCell
                        padding="checkbox"
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        onClick={() => { redirectToAnotherPage(row.reference) }}
                      >
                        {row.reference}
                      </TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.number}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.branch}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.customer}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.status}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.source}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.total}</TableCell>
                      <TableCell onClick={() => { redirectToAnotherPage(row.reference) }} align="left">{row.business}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          count={rows.length}
          // component={TablePaginationActions}
          labelDisplayedRows={defaultLabelDisplayedRows}
          labelRowsPerPage=" "
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={[]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default function Orders() {
  const [lgShow, setLgShow] = useState(false);

  // Modals

  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState("");
  const handleShow = (modalname: string, status: boolean) => {
    console.log(modalname, status, "handleShow");
    setModalName(modalname);
    setShow(status);
  };
  const handleClose = () => {
    setModalName("");
    setShow(false);
  };

  const Control = ({ children, ...props }: ControlProps) => {
    // @ts-ignore
    const { emoji, onEmojiClick } = props.selectProps;
    const style = { cursor: "pointer" };

    return (
      <components.Control {...props}>
        <span onMouseDown={onEmojiClick} style={style}>
          <img src={icon1} className={`${st.icon}`} />
        </span>
        {children}
      </components.Control>
    );
  };

  const options = [
    {
      value: "1",
      label: "Orders",
    },
    {
      value: "2",
      label: "Orders Items",
    },
    {
      value: "3",
      label: "Orders Payment",
    },
    {
      value: "4",
      label: "Orders 1",
    },
  ];
  const [selected, setSelected] = useState([]);
  const customValueRenderer = (selected: any, options: any) => {
    return (
      <>
        <img src={icon1} className={`${st.icon}`} /> All Branches
      </>
    );
  };
  return (
    <>
      <section className={`${st.pageWrapper}`}>
        <div className={`${st.pageTitle}`}>
          <div className={`${st.pageTitleRow}`}>
            <div className={`${st.rowTitleLeft}`}>
              <h5>Orders</h5>
            </div>
            <div className={`${st.rowTitleRight}`}>
              <Branches />

              <BusinessDate />
              <Export />

              <button
                className={`btn`}
                onClick={() => {
                  handleShow("order call", true);
                }}
              >
                <img src={icon5} className={`${st.icon}`} />
                New Call Center Order
              </button>
            </div>
          </div>
        </div>

        <div className={`${st.pageWrapperInside}`}>
          <Card>
            <Card.Body>
              <div className={`${table.dataTableBox}`}>
                <Box sx={{ width: 1 }}>
                  <EnhancedTable />
                </Box>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>

      <Modals show={show} handleClose={handleClose} modalName={modalName} />
    </>
  );
}
