import React, {JSX} from "react";

interface ResponsiveGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  cols?: number;
  gap?: number;
}

export function ResponsiveGrid<T>({
  items,
  renderItem,
  cols = 3,
}: ResponsiveGridProps<T>) {

  const totalCompleteRows = Math.floor(items.length / cols);
  const rows: JSX.Element[] = [];

  //TODO: make this auto-calculated and use correctly on code.
  const baseCssBlock = `grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6`;

  for (let index = 0; index < totalCompleteRows; index++) {
    const row = items.slice(index * cols, (index + 1) * cols);
    rows.push(
        <div key={index} className={`${baseCssBlock}`}>
          {row.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {renderItem(item, itemIndex)}
            </React.Fragment>
          ))}
        </div>
    );
  }

  const remainingItems = items.length % cols;
  if (remainingItems > 0) {
    const row = items.slice(items.length - remainingItems);
    rows.push(
        <div key={totalCompleteRows} className={`grid gap-6 py-4 grid-cols-1 lg:grid-cols-2 lg:w-max lg:mx-auto`}>
          {row.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {renderItem(item, itemIndex)}
            </React.Fragment>
          ))}
        </div>
    )
  }

  return (
      <>{rows}</>
  );
}
