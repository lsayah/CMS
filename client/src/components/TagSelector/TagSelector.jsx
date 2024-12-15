import "./TagSelector.css"
import Button from "../Button";

function useTagListQuery() {
  return [{
    id: 1,
    name: "tech"
  }, {
    id: 2,
    name: "cyber"
  }, {
    id: 3,
    name: "finance"
  }, {
    id: 4,
    name: "advice"
  }]
}
export default function TagSelector(props) {
  const tagList = useTagListQuery();
  return <div className="tag-list" id={props.id}>
    {tagList.map(tag => <Button> {tag.name} </Button >)}
  </div>

}
