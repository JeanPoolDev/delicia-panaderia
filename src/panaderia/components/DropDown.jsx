import { useState } from "react";
import { Down, Exit } from "../../icons";

export function DropDown({ onLogout, photoURL, displayName }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        data-popover-target="notifications-menu"
        onClick={() => setOpen(!open)}
        className="rounded-md border border-transparent p-1 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none 
          disabled:opacity-50 disabled:shadow-none cursor-pointer"
        type="button"
      >
        <Down />
      </button>

      {open && (
        <ul
          role="menu"
          data-popover="notifications-menu"
          data-popover-placement="bottom"
          className="absolute right-0 mt-6 z-10 min-w-[350px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
        >
          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <img
              alt="tania andrew"
              src={photoURL}
              className="relative inline-block h-10 w-10 rounded-full object-cover object-center"
            />
            <div className="flex flex-col gap-1 ml-4">
              <p className="text-slate-800 font-medium">{displayName}</p>

            </div>
          </li>

          <li
            role="menuitem"
            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
          >
            <button className="flex items-center" onClick={onLogout}>
              <Exit />
              <div className="flex flex-col gap-1 ml-4">
                <p className="font-bold  text-red-500">
                  Cerrar Sesión.
                </p>
              </div>
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}