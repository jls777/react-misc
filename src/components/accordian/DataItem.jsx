import { useState } from "react";

function DataItem({
  dataItem,
  toggleSelect,
  singleSelect,
  handleSingleSelect,
}) {
  const [multiSelect, setMultiSelect] = useState(false);

  return (
    <div className="item">
      <div className="title">
        <h3>{dataItem.question}</h3>
        <span
          onClick={
            toggleSelect
              ? () => setMultiSelect(!multiSelect)
              : () => handleSingleSelect(dataItem.id)
          }
        >
          +
        </span>
      </div>
      {toggleSelect
        ? multiSelect && <div className="content">{dataItem.answer}</div>
        : singleSelect === dataItem.id && (
            <div className="content">{dataItem.answer}</div>
          )}
    </div>
  );
}

export default DataItem;
