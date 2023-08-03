import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import st from "../../style.module.scss";
import cx from "./DashboardCallCenter.module.scss"
import icon1 from "../../images/icon-branch.svg";
import icon2 from "../../images/icon-calendar.svg";
import { Col, Dropdown, Row } from "react-bootstrap";
import arrowright from "../../images/arrow-right.svg";
import arrowLeft from "../../images/arrow-left.svg";
import { Box, ChakraProvider, VStack, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  CalendarDefaultTheme,
  CalendarControls,
  CalendarPrevButton,
  CalendarNextButton,
  CalendarMonths,
  CalendarMonth,
  CalendarMonthName,
  CalendarWeek,
  CalendarDays,
} from "@uselessdev/datepicker";
import { addDays, subDays } from "date-fns";

export const Branches = () => {
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
    <div className={`${cx.selectDropdown}`}>
      <MultiSelect
        options={options}
        defaultIsOpen={true}
        valueRenderer={customValueRenderer}

        value={selected}
        onChange={setSelected}
        labelledBy={"All Branches"}
        isCreatable={true}
        closeOnChangedValue={true}  
      />
    </div>
  );
};

export const CustomContent = () => {
  const [dates, setDates] = React.useState({});

  const handleSelectDate = (dates: any) => setDates(dates);

  const today = new Date();

  const todays_date = () =>
    setDates({
      start: today,
      end: today,
    });

  const yesterday_date = () =>
    setDates({
      start: subDays(today, 1),
      end: subDays(today, 1),
    });

  const addSevenDays = () =>
    setDates({
      start: today,
      end: addDays(today, 7),
    });

  const subSevenDays = () =>
    setDates({
      start: subDays(today, 7),
      end: today,
    });
  const addMonthDays = () =>
    setDates({
      start: today,
      end: addDays(today, 30),
    });

  const subMonthDays = () =>
    setDates({
      start: subDays(today, 30),
      end: today,
    });

  return (
    <ChakraProvider theme={CalendarDefaultTheme}>
      <Calendar value={dates} onSelectDate={handleSelectDate}>
        <VStack
          spacing={4}
          bgColor="gray.50"
          p={4}
          alignItems="stretch"
          borderEndRadius="md"
          flex={1}
        >
          <Button
            onClick={todays_date}
            colorScheme="white"
            color="black"
            size="xs"
          >
            Today
          </Button>
          <Button
            onClick={yesterday_date}
            colorScheme="white"
            color="black"
            size="xs"
          >
            Yesterday
          </Button>
          <Button
            onClick={addSevenDays}
            colorScheme="white"
            color="black"
            size="xs"
          >
            This Week
          </Button>
          <Button
            onClick={subSevenDays}
            colorScheme="white"
            color="black"
            size="xs"
          >
            Last Week
          </Button>
          <Button
            onClick={addMonthDays}
            colorScheme="white"
            color="black"
            size="xs"
          >
            This Month
          </Button>
          <Button
            onClick={subMonthDays}
            colorScheme="white"
            color="black"
            size="xs"
          >
            Last Month
          </Button>
        </VStack>
        <Box position="relative">
          <CalendarControls>
            <CalendarPrevButton />
            <CalendarNextButton />
          </CalendarControls>

          <CalendarMonths>
            <CalendarMonth>
              <CalendarMonthName />
              <CalendarWeek />
              <CalendarDays />
            </CalendarMonth>
          </CalendarMonths>
        </Box>
      </Calendar>
    </ChakraProvider>
  );
};

export const CustomContentDay = () => {
  const [dates, setDates] = React.useState({});

  const handleSelectDate = (dates: any) => setDates(dates);

  const today = new Date();

  const todays_date = () =>
    setDates({
      start: today,
      end: today,
    });

  const yesterday_date = () =>
    setDates({
      start: subDays(today, 1),
      end: subDays(today, 1),
    });

  const addSevenDays = () =>
    setDates({
      start: today,
      end: addDays(today, 7),
    });

  const subSevenDays = () =>
    setDates({
      start: subDays(today, 7),
      end: today,
    });
  const addMonthDays = () =>
    setDates({
      start: today,
      end: addDays(today, 30),
    });

  const subMonthDays = () =>
    setDates({
      start: subDays(today, 30),
      end: today,
    });

  return (
    <ChakraProvider theme={CalendarDefaultTheme}>
      <Calendar value={dates} onSelectDate={handleSelectDate}>
        <Box position="relative">
          <CalendarControls>
            <CalendarPrevButton />
            <CalendarNextButton />
          </CalendarControls>

          <CalendarMonths>
            <CalendarMonth>
              <CalendarMonthName />
              <CalendarWeek />
              <CalendarDays />
            </CalendarMonth>
          </CalendarMonths>
        </Box>
      </Calendar>
    </ChakraProvider>
  );
};
export const BusinessDate = () => {
  return (
    <Dropdown className={`${st.calendarDropdown}`}>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={icon2} className={`${st.icon}`} />
        Business Date
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <CustomContent />
      </Dropdown.Menu>
    </Dropdown>
  );
};


export const ActionDropdown = () => {
  return (

    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Actions
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          <li><NavLink to="#">Add Tags</NavLink></li>
          <li><NavLink to="#">Remove Tags</NavLink></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export const Month = () => {
  return (
    <Dropdown className={`${st.calendarDropdown}`}>
      <Dropdown.Toggle id="dropdown-basic">Month</Dropdown.Toggle>
      <Dropdown.Menu className={`${st.monthDropdown}`}>
        <div className={`${st.monthDropdown}`}>
          <div className={`${st.monthDropdownhead}`}>
            <img src={arrowLeft} alt="" className={`${st.montharrowicon}`} />
            <b>2022</b>
            <img src={arrowright} alt="" className={` ${st.montharrowicon}`} />
          </div>
          <div>
            <Row className={`${st.monthDropdowndetails}`}>
              <Col lg={3} className="mb-4">
                Jan
              </Col>
              <Col lg={3} className="mb-4">
                Feb
              </Col>
              <Col lg={3} className="mb-4">
                Mar
              </Col>
              <Col lg={3} className="mb-4">
                Apr
              </Col>
              <Col lg={3} className="mb-4">
                May
              </Col>
              <Col lg={3} className="mb-4">
                Jun
              </Col>
              <Col lg={3} className="mb-4">
                Jul
              </Col>
              <Col lg={3} className="mb-4">
                Aug
              </Col>
              <Col lg={3} className="mb-4">
                Sep
              </Col>
              <Col lg={3} className="mb-4">
                Oct
              </Col>
              <Col lg={3} className="mb-4">
                Nov
              </Col>
              <Col lg={3} className="mb-4">
                Dec
              </Col>
            </Row>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Day = () => {
  return (
    <Dropdown className={`${st.calendarDropdown}`}>
      <Dropdown.Toggle id="dropdown-basic">Day</Dropdown.Toggle>
      <Dropdown.Menu>
        <CustomContentDay />
      </Dropdown.Menu>
    </Dropdown>
  );
};
export const Week = () => {
  return (
    <Dropdown className={`${st.calendarDropdown}`}>
      <Dropdown.Toggle id="dropdown-basic">Week</Dropdown.Toggle>
      <Dropdown.Menu className={`${st.monthDropdown}`}>
        <div className={`${st.monthDropdown}`}>
          <div className={`${st.monthDropdownhead}`}>
            <img src={arrowLeft} alt="" className={`${st.montharrowicon}`} />
            <b>2022</b>
            <img src={arrowright} alt="" className={` ${st.montharrowicon}`} />
          </div>
          <div className={`${st.monthDropdowndetails}`}>
          <Row>
            <Col lg={6} className="mb-4">
            5 Sep - 11 Sep
            </Col>
            <Col lg={6} className="mb-4">
            12 Sep - 18 Sep
            </Col>
            <Col lg={6} className="mb-4">19 Sep - 25 Sep
            </Col>
            <Col lg={6} className="mb-4">26 Sep - 02 Oct
            </Col>
          </Row>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};