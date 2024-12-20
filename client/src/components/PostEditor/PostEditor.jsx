import "./PostEditor.css";
import Bold from "../../assets/icons/Bold.svg";
import Italic from "../../assets/icons/Italic.svg";
import Underline from "../../assets/icons/Underline.svg";
import JustifyCenter from "../../assets/icons/JustifyCenter.svg";
import JustifyLeft from "../../assets/icons/JustifyLeft.svg";
import JustifyRight from "../../assets/icons/JustifyRight.svg";
import JustifyStrecth from "../../assets/icons/JustifyStrecth.svg";
import Smile from "../../assets/icons/Smile.svg";
import TabIn from "../../assets/icons/TabIn.svg";
import TabOut from "../../assets/icons/TabOut.svg";

export default function PostEditor(props) {
  const actions = [
    { icon: Bold },
    { icon: Italic },
    { icon: Underline },
    { icon: JustifyCenter },
    { icon: JustifyLeft },
    { icon: JustifyRight },
    { icon: JustifyStrecth },
    { icon: Smile },
    { icon: TabIn },
    { icon: TabOut },
  ];
  return (
    <div className="post-editor">
      <div className="editor-actions">
        <select>
          <option> Style </option>
          <option> Style </option>
          <option> Style </option>
          <option> Style </option>
          <option> Style </option>
          <option> Style </option>
        </select>
        {actions.map((action) => (
          <img src={action.icon} />
        ))}
      </div>
      <textarea
        id={props.id}
        rows="10"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      ></textarea>
    </div>
  );
}
