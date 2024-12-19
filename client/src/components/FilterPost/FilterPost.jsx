import { useMemo, useState } from "react";
import { useTagListQuery } from "../../hooks/tag"
import { X, Plus, Search, Eye } from "lucide-react"
import Button from "../Button"
import LabelInput from "../InputField";
import "./FilterPost.css"

export default function FilterPost() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState();
  function onSubmit(e) {
    e.preventDefault();
    console.log(selectedTags);
    console.log(search);
  }
  return <form className="filter-post" onSubmit={onSubmit}>
    <div className="filter-input">
      <input type="search" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <button type="submit"> <Search /> </button>
    </div>
    <ul className="tag-selected">
      {selectedTags.map(tag => (
        <li key={tag.id} className="tag-element">
          <span> {tag.name} </span>
          <Button type="button" className="button-small" onClick={() => setSelectedTags(selectedTags.filter(value => value.id != tag.id))}> <X /> </Button>
        </li>
      ))}
    </ul>

    <div>
      <AddTag
        onSubmit={newTags => setSelectedTags([...selectedTags, ...newTags])}
        value={selectedTags} />
    </div>
  </form>
}

function AddTag({ onSubmit, value }) {
  const allTags = useTagListQuery();
  const tags = useMemo(() => allTags.filter((tag) => {
    return value.findIndex(({ id }) => tag.id === id) === -1
  }), [allTags, value]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  function submit() {
    setIsDialogOpen(false);
    onSubmit(selectedTags);
    setSelectedTags([]);
  }

  function toggle(tag) {
    function isSelected(tag) {
      return selectedTags.find(selectedTag => selectedTag.id === tag.id) === -1;
    }
    isSelected(tag) ? setSelectedTags(selectedTags.filter(isSelected)) : setSelectedTags([...selectedTags, tag])
  }
  return <div className="add-tag">
    <Button type="button" className="button-small" onClick={() => setIsDialogOpen(true)}> <Plus /> </Button>
    <dialog open={isDialogOpen}>
      <div className="dialog-header">
        <h2> Ajouter un tag </h2>
        <Button type="button" className="button-small" onClick={submit}> <X /> </Button>
      </div>
      <div className="dialog-body">
        {tags.length == 0 ? <span> Aucun tag à selectionner </span> :
          <ul className="tag-selection">
            {tags.map(tag => <li key={tag.id}><LabelInput onClick={() => toggle(tag)} type="checkbox" label={tag.name} /> </li>)}
          </ul>
        }
        <Button type="button" onClick={submit} className="button-full"> Confirmer </Button>
      </div>
    </dialog>
    <div className="backdrop" onClick={submit} />
  </div>
}
