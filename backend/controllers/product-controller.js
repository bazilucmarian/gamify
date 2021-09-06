import { productModel as Product } from "../models/product-model";

const getNextPageProducts = (productsFromDatabases, pageFromUrl, pageSize) => {
  if (productsFromDatabases.length) {
    return { nextPage: pageFromUrl + 1, pageLimit: pageSize };
  }
  return null;
};

/*
Description:     Fetch all products
Route:     GET /api/products?_page="#"&_limit="#"
Access:  PUBLIC/ADMIN
*/

const getProducts = async (req, res) => {
  const pageFromUrl = Number(req.query._page);
  const pageSize = Number(req.query._limit);

  try {
    const products = await Product.find({})
      .limit(pageSize)
      .skip(pageSize * (pageFromUrl - 1));

    if (products) {
      const productsModified = products.map((product) => ({
        ...product._doc,
        id: product._id,
      }));

      res.status(200).json({
        products: productsModified,
        next: getNextPageProducts(products, pageFromUrl, pageSize),
      });
    } else {
      res.status(400).json({ message: "No available products ❗⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:     Fetch single product
Route:       GET /api/products/:id"
Access:  PUBLIC/ADMIN
*/

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400);
      next(new Error("Product Not Found ❗⛔"));
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:      create new product
Route:        POST /api/products"
Access:  ADMIN
*/

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      userId: req.user._id,
      title: req.body.title,
      description: req.body.description,
      credits: req.body.credits,
      images: req.body.images,
    });
    const createdNewProduct = await newProduct.save();
    if (createdNewProduct) {
      res
        .status(200)
        .json({ message: "Successfully created new product ! ✅✅" });
    } else {
      res.status(400).json({
        message: "Oups.. something wrong with new product created ❗",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:      delete product
Route:       DELETE /api/products/:id"
Access:  ADMIN
*/

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.status(200).json({ message: "Successfully remove product ✅✅" });
    } else {
      res.status(404).json({ message: "Product Not Found ❗⛔" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
Description:  update product
Route:        PUT /api/products/:id"
Access:       ADMIN
*/

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.title = req.body.title;
      product.description = req.body.description;
      product.credits = req.body.credits;
      product.images = req.body.images;
      const updateProduct = await product.save();
      res
        .status(200)
        .json({ updateProduct, message: "Successfully update product ! ✅✅" });
    } else {
      res.status(404).json({ message: "Oups.. product not found  ❗" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
