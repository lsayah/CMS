import "./ImagePicker.css"
import Image from "../../assets/icons/Image.svg"

export default function ImagePicker() {
  return <div className="image-picker placeholder">
    <img src={Image} width="64" height="64"/>
    <input type="file" placeholder="Click or drag an image"/>
  </div>
}
