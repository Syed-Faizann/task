"use client"

import { Calendar, Clock } from "lucide-react"

export default function QuestionDeadline({ value, onChange }) {
  const handleDateChange = (e) => {
    const newDate = e.target.value
    onChange?.({ ...value, date: newDate }) 
  }

  const handleTimeChange = (e) => {
    const newTime = e.target.value
    onChange?.({ ...value, time: newTime }) 
  }

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Date */}
        <div className="relative">
          <input
            type="date"
            value={value?.date || ""}
            onChange={handleDateChange}
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

        {/* Time */}
        <div className="relative">
          <input
            type="time"
            value={value?.time || ""}
            onChange={handleTimeChange}
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
          <Clock
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4E4E4E] pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}
