import "./Post.css";
import { X } from "lucide-react";
import { useState } from "react";
import LabelInput from "../../components/InputField";
import PostEditor from "../../components/PostEditor/PostEditor";
import ImagePreview from "../../components/ImagePicker/ImagePicker";
import Button from "../../components/Button";
import { AddTag } from "../../components/FilterPost/FilterPost";
import { useMutation } from "../../hooks/net";

export default function CreatePost() {
  const [img, setImg] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = useMutation("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (createPost.error) return <p>Error: {createPost.error}</p>;
  if (createPost.data) return <p>Post created!</p>;
  function handleImg(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Call the mutation function to create a new post
    createPost.mutate(e.target.form);
  }

  function handleImg(e) {
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <form
      encType="multipart/form-data"
      id="create-post-page"
      onSubmit={handleSubmit}
    >
      <h1>Create New Post</h1>
      <p> Start a conversation, a blog, or share a topic. </p>
      <div className="post-meta">
        <div>
          <LabelInput
            id="post_title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <LabelInput
            id="post_thumb"
            type="file"
            accept=".png, .jpg, .jpeg"
            label="Choose post image"
            required
            onChange={handleImg}
          />
        </div>
        <div className="label-input">
          <ImagePreview id="post_image" src={img} />
        </div>
      </div>
      <div className="label-input">
        <label className="label-input" htmlFor="post_content">
          {" "}
          Content{" "}
        </label>
        <PostEditor id="post_content" value={content} onChange={setContent} />
      </div>
      <div className="create-post-footer">
        <div>
          <label htmlFor="post_tags"> Choose post categories </label>
          <div>
            <ul id="create_post_tags">
              {selectedTags.map((tag) => (
                <li key={tag.id} className="tag-element">
                  <span> {tag.name} </span>
                  <Button
                    type="button"
                    className="button-small"
                    onClick={() =>
                      setSelectedTags(
                        selectedTags.filter((value) => value.id != tag.id)
                      )
                    }
                  >
                    {" "}
                    <X />{" "}
                  </Button>
                </li>
              ))}
            </ul>
            <AddTag
              onSubmit={(newTags) =>
                setSelectedTags([...selectedTags, ...newTags])
              }
              value={selectedTags}
            />
          </div>
        </div>
        <div className="create-post-actions">
          <Button> Continue later</Button>
          <Button> Publish </Button>
        </div>
      </div>
    </form>
  );
}
