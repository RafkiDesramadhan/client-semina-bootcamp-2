import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/Breadcrumb";
import Table from "../../components/TableWithAction";
import SearchInput from "../../components/SearchInput";
import AlertMessage from "../../components/Alert";
import DateRange from "../../components/InputDate";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, setPage, setDate } from "../../redux/orders/actions";
import { fetchListEvents } from "../../redux/lists/actions";
import { formatDate } from "../../utils/formatDate";

export default function OrderPage() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders);

  let [isShowed, setIsShowed] = React.useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, orders.page, orders.date]);

  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

  const displayDate = `${
    orders.date?.startDate ? formatDate(orders.date?.startDate) : ""
  }${orders.date?.endDate ? " - " + formatDate(orders.date.endDate) : ""}`;

  return (
    <Container className="mt-3">
      <BreadCrumb textSecound={"orders"} />
      <Row>
        <Col
          sm={4}
          className="cursor pointer position-relative"
          onMouseDown={(e) => {
            e.stopPropagation();
            setIsShowed(true);
          }}
        >
          <div style={{ pointerEvents: "none" }}>
            <SearchInput disabled query={displayDate} />
          </div>

          {isShowed ? (
            <DateRange
              date={orders.date}
              setIsShowed={setIsShowed}
              onChangeDate={(ranges) => dispatch(setDate(ranges.selection))}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>

      <Table
        status={orders.status}
        thead={[
          "Nama",
          "Email",
          "Judul",
          "Tanggal Event",
          "Tanggal Order",
          "Tempat",
        ]}
        data={orders.data}
        tbody={["name", "email", "title", "date", "orderDate", "venueName"]}
        pages={orders.pages}
        actionNotDisplay
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>
  );
}
