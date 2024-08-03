import data from "./data";
import "./styles.css";
import DataItem from "./DataItem";
import { useState } from "react";

function Accordian() {
  const [toggleSelect, setToggleSelect] = useState(false);
  const [singleSelect, setSingleSelect] = useState(null);

  function handleSingleSelect(id) {
    setSingleSelect(id === singleSelect ? null : id);
  }

  return (
    <div className="wrapper">
      <button
        className="enable-btn"
        onClick={() => setToggleSelect(!toggleSelect)}
      >
        {toggleSelect ? "Multi Select" : "Single Select"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <DataItem
              key={dataItem.id}
              dataItem={dataItem}
              toggleSelect={toggleSelect}
              handleSingleSelect={handleSingleSelect}
              singleSelect={singleSelect}
            />
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
