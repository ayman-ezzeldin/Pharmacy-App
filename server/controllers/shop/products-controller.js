const Product = require("../../models/Product");



const getFilteredProducts = async (req, res) => {

  const { category = [], brand = [], sortBy = 'price-lowtohigh' } = req.query

  let filters = {}

  if (category.length > 0) {
    filters.category = { $in: category.split(',') }
  }
  if (brand.length > 0) {
    filters.brand = { $in: brand.split(',') }
  }

  let sort = {}

  switch (sortBy) {
    case 'price-lowtohigh':
      sort.price = 1
      break;
    case 'price-hightolow':
      sort.price = -1
      break;
    case 'title-atoz':
      sort.title = 1
      break;
    case 'title-ztoa':
      sort.title = -1
      break;
  
    default:
      sort.price = 1
      break;
  }

  try {
    const products = await Product.find(filters).sort(sort);
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Cannot fetch products",
    });
  }
};

module.exports = {
  getFilteredProducts,
}