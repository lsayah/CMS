import { useState } from "react"
import "./Accordeon.css"
import { ChevronDown } from "lucide-react"

export default function Accordeon({ defaultOpen, label, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen === undefined ? false : defaultOpen)
  return <div className="accordeon" data-open={isOpen}>
    <div className="accordeon-header">
      <span> {label} </span>
      <ChevronDown onClick={() => setIsOpen(!isOpen)} />
    </div>
    <div className="accordeon-content">
      {children}
    </div>
  </div>
}
