import "./TagSelector.css"
import Button from "../Button";
import { useTagListQuery } from "../../hooks/tag.js"

export default function TagSelector({ id, children }) {
  const tagList = useTagListQuery();
  return <div className="tag-list" id={id}>
    {tagList.map(tag => <Button> {tag.name} </Button >)}
    <Button> {children}</Button>
  </div>

}
