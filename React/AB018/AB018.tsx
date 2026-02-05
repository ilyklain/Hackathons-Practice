/*
  -------------------------------------
  ‣ Airbnb Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Airbnb's booking flow requires a highly reactive Date Range Picker. 
  The UI must reflect price changes and availability in real-time as 
  the user selects their check-in and check-out dates.

  » Problem:
  Build a React component (or logic hook) that manages a stay selection.

  The system should:
    - Handle `checkIn` and `checkOut` state.
    - If a user clicks a date:
        - If no checkIn exists, set it.
        - If checkIn exists but no checkOut, set checkOut (if after checkIn).
        - If both exist, reset and set new checkIn.
    - Calculate total price based on a `pricePerNight` prop.

  » Objective:
  Practice state management, conditional rendering, and effect hooks.

  » Approach:
  - Use `useState` for the date range.
  - Implement a `handleDateClick` function with the logic described.
  - Use a memoized calculation for the total price.

  » Disclaimer:
  You need Tailwind CSS installed to run this component.
*/

import React, { useState, useMemo } from 'react';

interface BookingsProps {
    pricePerNight: number;
}

const BookingPicker: React.FC<BookingsProps> = ({ pricePerNight }) => {
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);

    const handleDateClick = (date: Date) => {
        if (!checkIn || (checkIn && checkOut)) {
            setCheckIn(date);
            setCheckOut(null);
        } else if (checkIn && !checkOut) {
            if (date > checkIn) {
                setCheckOut(date);
            } else {
                setCheckIn(date);
            }
        }
    };

    const nights = useMemo(() => {
        if (!checkIn || !checkOut) return 0;
        const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }, [checkIn, checkOut]);

    const totalPrice = nights * pricePerNight;

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Airbnb Booking Simulation</h2>
            <div className="flex justify-between border-b pb-4">
                <div>
                    <p className="text-xs font-semibold uppercase text-gray-500">Check-in</p>
                    <p className="text-sm">{checkIn ? checkIn.toLocaleDateString() : 'Select date'}</p>
                </div>
                <div>
                    <p className="text-xs font-semibold uppercase text-gray-500">Check-out</p>
                    <p className="text-sm">{checkOut ? checkOut.toLocaleDateString() : 'Select date'}</p>
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-lg font-medium">Price Details</p>
                <div className="flex justify-between text-gray-600">
                    <span>${pricePerNight} x {nights} nights</span>
                    <span className="font-bold text-black">${totalPrice}</span>
                </div>
            </div>

            <button
                disabled={!checkOut}
                className="w-full py-3 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 disabled:opacity-50"
            >
                Reserve Stay
            </button>
        </div>
    );
};

export default BookingPicker;
