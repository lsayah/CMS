import TagRepository from "../repository/tags.js";
import getConnection from "../connection.js";


export async function getAllTags(req, res) {
    const connection = await getConnection(); 
    const tagRepository = new TagRepository(connection);
    
    try {
      const tags = await tagRepository.getAllTags();
      
      return res.status(200).json({
        success: true,
        data: tags,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "aucun tags trouvé",
      });
    }
  }
