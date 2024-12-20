import "./ImagePicker.css";
import Image from "../../assets/icons/Image.svg";

export default function ImagePreview({ src }) {
  return (
    <div>
      <div className="image-picker placeholder">
        {src ? <img src={src} /> : <img src={Image} width="64" height="64" />}
      </div>
    </div>
  );
}
