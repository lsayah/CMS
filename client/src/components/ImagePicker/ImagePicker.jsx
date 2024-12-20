import "./ImagePicker.css";
import Image from "../../assets/icons/Image.svg";

export default function ImagePreview() {
  return (
    <div>
      <div className="image-picker placeholder">
        <img src={Image} width="64" height="64" />
      </div>
    </div>
  );
}
