import * as React from "react";
import DatePicker from "react-datepicker";

export default function IndexDate({ date, onChangeDate, setIsShowed }) {
  const refDate = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (refDate.current && !refDate.current.contains(event.target)) {
        setIsShowed(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsShowed]);

  const handleOnChange = (dates) => {
    const [start, end] = dates;
    onChangeDate({
      selection: {
        startDate: start,
        endDate: end,
        key: "selection",
      },
    });

    if (start && end) {
      setIsShowed(false);
    }
  };

  return (
    <div className="position-absolute" style={{ zIndex: "999" }} ref={refDate}>
      <DatePicker
        selected={date?.startDate}
        startDate={date?.startDate}
        endDate={date?.endDate}
        onChange={handleOnChange}
        selectsRange
        inline
        maxDate={new Date()}
      />
    </div>
  );
}
