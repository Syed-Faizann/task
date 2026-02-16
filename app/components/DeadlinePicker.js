"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function DeadlinePicker() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
           w-full
                border
                border-gray-300
                text-[#222222]
                rounded-full
                px-3 py-2 pr-10
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#12BAB0]
                [&::-webkit-calendar-picker-indicator]:opacity-0
              "
            />
            <Calendar
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4E4E4E] pointer-events-none"
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="
               w-full
                border
                border-gray-300
                text-[#222222]
                rounded-full
                px-3 py-2 pr-10
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-[#12BAB0]
                [&::-webkit-calendar-picker-indicator]:opacity-0
              "
              placeholder="hh:mm"
            />
            <Clock
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4E4E4E] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
