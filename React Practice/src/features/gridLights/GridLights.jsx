import React, { useState } from "react";
import "./gridLights.css";

function Cell({ filled, onClick, isDisabled }) {
  return (
    <button
      className={filled ? "cell cell__activated" : "cell"}
      disabled={isDisabled}
      onClick={onClick}
    />
  );
}

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactive, setIsDeactivate] = useState(null);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const cellActivated = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      cellDeactivated(newOrder);
    }
  };
  const cellDeactivated = () => {
    setIsDeactivate(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivate(false);
        }
        return newOrder;
      });
    }, 400);
  };

  //   console.log(order);
  return (
    <div
      className="grid__light"
      style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
    >
      {config.flat(1).map((val, index) => {
        return val ? (
          <Cell
            key={index}
            onClick={() => cellActivated(index)}
            filled={order.includes(index)}
            isDisabled={order.includes(index) || isDeactive}
          />
        ) : (
          <span key={index} />
        );
      })}
    </div>
  );
};

export default GridLights;
