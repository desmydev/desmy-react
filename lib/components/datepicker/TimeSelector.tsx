import React from "react";

interface TimeSelectorProps {
  label: string;
  value: string; // Format: "HH:mm AM/PM"
  onChange: (value: string) => void;
}

export default class TimeSelector extends React.Component<TimeSelectorProps> {
 parseTime(value: string) {
        if (!value || !value.includes(":")) {
          return { h: 12, m: 0, meridian: "AM" };
        }
      
        const [timePart, meridian = "AM"] = value.trim().split(" ");
        const [hStr, mStr] = timePart.split(":");
        const h = parseInt(hStr, 10);
        const m = parseInt(mStr, 10);
      
        return {
          h: isNaN(h) ? 12 : h,
          m: isNaN(m) ? 0 : m,
          meridian: meridian.toUpperCase() === "PM" ? "PM" : "AM"
        };
 }

 formatTime(h: number, m: number, meridian: string) {
    const hh = String(h || 12).padStart(2, "0");
    const mm = String(m || 0).padStart(2, "0");
    return `${hh}:${mm} ${meridian || "AM"}`;
  }

  updateTime(part: "h" | "m" | "meridian", direction: "up" | "down") {
  const { h, m, meridian } = this.parseTime(this.props.value);
  let hour = h;
  let min = m;
  let period = meridian;

  if (part === "h") {
    // Adjust the hour (12-hour format)
    hour = direction === "up" ? (hour % 12) + 1 : hour - 1 || 12;
  } else if (part === "m") {
    // Adjust the minute
    min = direction === "up" ? (min + 1) % 60 : (min - 1 + 60) % 60;
  } else if (part === "meridian") {
    // Only toggle the period (AM/PM) when the meridian part is being updated
    period = period === "AM" ? "PM" : "AM";
  }

  // After adjusting, update the time with the potentially updated period
  this.props.onChange(this.formatTime(hour, min, period));
}

  render() {
    const { label, value } = this.props;
    const { h, m, meridian } = this.parseTime(value);

    return (
      <div className="text-xs text-center">
        <label className="flex w-full text-center lg:text-start font-bold mb-1">{label}</label>
        <div className="inline-flex items-center rounded p-2 gap-4 shadow dark:bg-darkBackground">
          {["h", "m", "meridian"].map((part) => (
            <div key={part} className="flex flex-col items-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.updateTime(part as any, "up");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                    <path fill="currentColor"  d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"></path>
                </svg>
              </button>
              <div className="flex size-10 font-black text-xl text-center justify-center items-center">
                {part === "h" && h}
                {part === "m" && String(m).padStart(2, "0")}
                {part === "meridian" && meridian}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.updateTime(part as any, "down");
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                    <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
