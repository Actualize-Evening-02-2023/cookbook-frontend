import { useState } from "react";
import axios from "axios";

export function RecipesNew() {
  const [uploadedImg, setUploadedImg] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    params.append("image_file", uploadedImg);

    axios.post("http://localhost:3000/recipes.json", params).then(response => {
      console.log(response);
      event.target.reset();
      window.location.href = "/";
    });
  };

  const handleSetFile = event => {
    if (event.target.files.length > 0) {
      setUploadedImg(event.target.files[0]);
    }
  };

  return (
    <div id="recipes-new">
      <h1>New recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Chef: <input name="chef" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text" />
        </div>
        <div>
          Directions: <input name="directions" type="text" />
        </div>
        <div>
          Prep Time: <input name="prep_time" type="number" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Upload Image: <input type="file" onChange={handleSetFile} />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
