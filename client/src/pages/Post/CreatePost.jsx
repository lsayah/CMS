import "./Post.css";
import { PlusCircle } from "lucide-react";
import LabelInput from "../../components/InputField";
import PostEditor from "../../components/PostEditor/PostEditor";
import TagSelector from "../../components/TagSelector/TagSelector";
import ImagePreview from "../../components/ImagePicker/ImagePicker";
import Button from "../../components/Button";

export default function CreatePost() {
  return (
    <div id="create-post-page">
      <h1>Create New Post</h1>
      <p> Start a conversation, a blog, or share a topic. </p>
      <div className="post-meta">
        <div>
          <LabelInput id="post_title" label="Title" />
          <LabelInput id="post_title" label="Choose post image" type="file" />
        </div>
        <div className="label-input">
          <ImagePreview id="post_image" />
        </div>
      </div>
      <div className="label-input">
        <label className="label-input" htmlFor="post_content">
          {" "}
          Content{" "}
        </label>
        <PostEditor id="post_content" />
      </div>
      <div className="create-post-footer">
        <div className="label-input">
          <label htmlFor="post_tags"> Choose post categories </label>
          <TagSelector id="post_tags">
            <PlusCircle />
            <span> Ajouter </span>
          </TagSelector>
        </div>
        <div className="create-post-actions">
          <Button> Continue later</Button>
          <Button> Publish </Button>
        </div>
      </div>
    </div>
  );
}
