import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ScissorsIcon,
  PencilIcon,
  GemIcon,
  SpaceIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";

const services = [
  { id: 1, name: "Haircut", icon: ScissorsIcon, price: 50 },
  { id: 2, name: "Tattoo", icon: PencilIcon, price: 120 },
  { id: 3, name: "Piercing", icon: GemIcon, price: 40 },
  { id: 4, name: "Spa", icon: SpaceIcon, price: 80 },
];

const artists = [
  { id: 0, name: "Any Artist" },
  { id: 1, name: "Liam" },
  { id: 2, name: "Noah" },
  { id: 3, name: "Oliver" },
  { id: 4, name: "Elijah" },
];

const availableTimes = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const TAX_RATE = 0.1;

const AppointmentPage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(1);
  const [selectedArtist, setSelectedArtist] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // Generate next 30 days for calendar
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => {
    const d = new Date(today.getFullYear(), today.getMonth(), i + 1);
    return d;
  });

  const service = services.find((s) => s.id === selectedService);
  const subtotal = service ? service.price : 0;
  const taxes = +(subtotal * TAX_RATE).toFixed(2);
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left: Booking Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="mb-8 text-gray-400">
            Choose your desired service, artist, and time slot.
          </p>

          {/* Select a Service */}
          <div>
            <h2 className="font-semibold mb-2">Select a Service</h2>
            <div className="flex gap-4 mb-6">
              {services.map((s) => (
                <button
                  key={s.id}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg border-2 transition-all
                    ${
                      selectedService === s.id
                        ? "border-yellow-400 bg-yellow-900/20 text-yellow-300"
                        : "border-gray-700 bg-gray-900 hover:border-yellow-400"
                    }`}
                  onClick={() => setSelectedService(s.id)}
                >
                  <s.icon size={20} />
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Choose an Artist */}
          <div>
            <h2 className="font-semibold mb-2">Choose an Artist</h2>
            <div className="flex gap-4 mb-6">
              {artists.map((a) => (
                <button
                  key={a.id}
                  className={`px-5 py-2 rounded-lg border-2 transition-all
                    ${
                      selectedArtist === a.id
                        ? "border-yellow-400 bg-yellow-900/20 text-yellow-300"
                        : "border-gray-700 bg-gray-900 hover:border-yellow-400"
                    }`}
                  onClick={() => setSelectedArtist(a.id)}
                >
                  {a.name}
                </button>
              ))}
            </div>
          </div>

          {/* Select Date & Time */}
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            {/* Calendar */}
            <div>
  <h2 className="font-semibold mb-2">Select Date & Time</h2>
  <div className="bg-gray-900 rounded-lg p-4">
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => setSelectedDate(date)}
      minDate={new Date()}
      inline
      calendarClassName="!bg-gray-900 !text-white"
      dayClassName={date =>
        date &&
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth()
          ? "!bg-yellow-400 !text-black font-bold"
          : "!hover:bg-yellow-900/30 !text-gray-200"
      }
    />
  </div>
</div>
            {/* Time Slots */}
            <div className="flex-1">
              <h2 className="font-semibold mb-2 invisible md:visible">Available Times</h2>
              <select
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {availableTimes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Add Notes */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Add Notes</label>
            <textarea
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400"
              rows={3}
              placeholder="Any special requests or details?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Payment Preview */}
          <div className="mb-8">
            <h2 className="font-semibold mb-2">Payment Preview</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Service</span>
                <span>{service ? service.name : "-"}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Taxes (10%)</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-yellow-400">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            className={`w-full py-3 rounded-md font-semibold text-lg transition-all ${
              selectedService && selectedArtist !== null && selectedDate && selectedTime
                ? "bg-yellow-400 text-black hover:bg-yellow-500"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
            disabled={
              !selectedService || selectedArtist === null || !selectedDate || !selectedTime
            }
          >
            Confirm & Book Appointment
          </button>
        </div>

        {/* Right: Booking Summary */}
        <div className="w-full md:w-96">
          <div className="bg-[#181511] rounded-xl p-6 shadow-lg sticky top-8">
            <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
            <div className="flex items-center mb-2 text-yellow-400">
              <ScissorsIcon size={18} className="mr-2" />
              <span className="font-semibold">
                {service ? service.name : "Select a service"}
              </span>
            </div>
            <div className="flex items-center mb-2 text-yellow-400">
              <UserIcon size={18} className="mr-2" />
              <span>
                {artists.find((a) => a.id === selectedArtist)?.name || "Any Artist"}
              </span>
            </div>
            <div className="flex items-center mb-2 text-yellow-400">
              <CalendarIcon size={18} className="mr-2" />
              <span>
                {selectedDate
                  ? selectedDate.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Select a date"}
              </span>
            </div>
            <div className="flex items-center mb-4 text-yellow-400">
              <ClockIcon size={18} className="mr-2" />
              <span>{selectedTime || "Select time"}</span>
            </div>
            <div className="mb-4 text-xs text-gray-400">
              <b>Studio Policy</b>
              <br />
              Please arrive 10 minutes prior to your appointment. Cancellations must be made at least 24 hours in advance. Late arrivals may result in a shortened service or rescheduling. No-shows will be charged 50% of the service fee. We appreciate your understanding.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;