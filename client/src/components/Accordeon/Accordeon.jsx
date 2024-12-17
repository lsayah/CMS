import { useState } from "react"
import "./Accordeon.css"
import { ChevronDown } from "lucide-react"

export default function Accordeon({ defaultOpen, label, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen === undefined ? false : defaultOpen)
  return <div data-accordeon={isOpen}>
    <div data-header>
      <span> {label} </span>
      <ChevronDown onClick={() => setIsOpen(!isOpen)} />
    </div>
    <div data-content>
      {children}
    </div>
  </div>
}
