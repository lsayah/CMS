exports.createArticle = async (req, res) => {
  try {
    const body = req.body;
    res.status(201).json({
      success: true,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
