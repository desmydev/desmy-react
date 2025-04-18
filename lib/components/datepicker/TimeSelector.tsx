import React from "react";

interface TimeSelectorProps {
  label: string;
  value: string; // Format: "HH:mm AM/PM"
  onChange: (value: string) => void;
}

export default class TimeSelector extends React.Component<TimeSelectorProps> {
  parseTime(value: string) {
    const [time, meridian = "AM"] = value.split(" ");
    const [h, m] = time.split(":").map(Number);
    return { h, m, meridian };
  }

  formatTime(h: number, m: number, meridian: string) {
    const hh = String(h).padStart(2, "0");
    const mm = String(m).padStart(2, "0");
    return `${hh}:${mm} ${meridian}`;
  }

  updateTime(part: "h" | "m" | "meridian", direction: "up" | "down") {
    const { h, m, meridian } = this.parseTime(this.props.value);
    let hour = h;
    let min = m;
    let period = meridian;

    if (part === "h") {
      hour = direction === "up" ? (hour % 12) + 1 : hour - 1 || 12;
    } else if (part === "m") {
      min = direction === "up" ? (min + 1) % 60 : (min - 1 + 60) % 60;
    } else if (part === "meridian") {
      period = period === "AM" ? "PM" : "AM";
    }

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
