import { useState } from "react";

function DataItem({
  dataItem,
  toggleSelect,
  singleSelect,
  handleSingleSelect,
}) {
  const [multiSelect, setMultiSelect] = useState(false);

  return (
    <div
      onClick={
        toggleSelect
          ? () => setMultiSelect(!multiSelect)
          : () => handleSingleSelect(dataItem.id)
      }
      className="item"
    >
      <div className="title">
        <h3>{dataItem.question}</h3>
        {toggleSelect ? (
          <span>{multiSelect ? "-" : "+"}</span>
        ) : (
          <span>{singleSelect === dataItem.id ? "-" : "+"}</span>
        )}
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
