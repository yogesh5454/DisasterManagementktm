import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MdArrowDropDown } from "react-icons/md";

export default function Pmrelief() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
       <MenuButton className="flex items-center justify-center px-6 py-4 text-white border-l border-r border-[#c40079] bg-[#0a2240] cursor-pointer focus:outline-none">
  Pm Relief
  <MdArrowDropDown className="ml-1 text-xl" />
</MenuButton>

      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
             action
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
             Another Action
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
             Something else here
            </a>
          </MenuItem>
        
        </div>
      </MenuItems>
    </Menu>
  )
}
