import React, { useEffect, useState } from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
  currHour: number | null;
  currMinute: number;
  currSecond: number;
  label: string;
};

const Clock = (props: Props) => {

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {props.label}
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {props.currHour}
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {props.currMinute}
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {props.currSecond}
        </span>
    </div>
  );
};

export default Clock;
