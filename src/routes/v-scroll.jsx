import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "../styles/index.css";

const Row = ({ itemData, index, style }) => {
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      Row {index}
    </div>
  );
};

export default function VirtualizeScroll() {
  return (
    <div style={{ height: "30vh" }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemData={null}
            itemCount={1000}
            itemSize={100}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}
