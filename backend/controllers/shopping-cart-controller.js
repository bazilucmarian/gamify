import { shoppingCartModel } from "../models/shopping-cart-model";
import { productModel } from "../models/product-model";
import { userModel as User } from "../models/user-model";
import { productModel as Product } from "../models/product-model";

const getQuantity = (userShopItems, idShopItem) => {
  const { quantity } = userShopItems.find(
    ({ shopItemId }) => shopItemId === idShopItem.toString()
  );
  return quantity;
};

// @desc    Fetch all shop items
// @route   GET /api/cart"
// @access  Public

const getAllShoppingItemsFromCart = async (req, res, next) => {
  try {
    const [{ shoppingItems }] = await shoppingCartModel.find({
      userId: req.user._id,
    });

    const shoppingItemsIds = shoppingItems.map(({ shopItemId }) => shopItemId);

    const allShopItemsFromDatabase = await productModel.find({});

    const shoppingCart = allShopItemsFromDatabase
      .filter(({ _id }) => shoppingItemsIds.includes(_id))
      .map((shoppingItem) => ({
        ...shoppingItem._doc,
        id: shoppingItem._id,
        userId: req.user._id,
        quantity: getQuantity(shoppingItems, shoppingItem._id),
      }));
    if (shoppingCart) {
      res.status(200).json({ shoppingCart });
    } else {
      res.status(400).json({ message: "Problems with shopping cart ❗" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add to shopping cart
// @route   POST /api/cart/:productId"
// @access  Public

const addItemToShoppingCart = async (req, res) => {
  try {
    const [userShopData] = await shoppingCartModel.find({
      userId: req.user._id,
    });

    const [user] = await User.find({
      _id: req.user._id,
    });

    const product = await Product.findById(req.params.productId);
    if (user.credits < product.credits) {
      res.status(400).json({
        message: `You need another ${
          product.credits - user.credits
        } credits to buy this product. Choose a new challenge 😃
        `,
      });
    } else {
      const singleShopItemIndex = userShopData?.shoppingItems?.findIndex(
        ({ shopItemId }) => shopItemId === req.params.productId
      );

      if (singleShopItemIndex !== -1) {
        userShopData.shoppingItems[singleShopItemIndex].quantity += 1;
      } else {
        userShopData.shoppingItems.push({
          shopItemId: req.params.productId,
          quantity: 1,
        });
      }
      user.credits -= product.credits;

      const shoppingCartUpdated = await userShopData.save();
      const userUpdated = await user.save();
      if (shoppingCartUpdated) {
        res.status(200).json({
          message: `Product with id ${req.params.productId} was added to cart ✅✅`,
          newUserUpdated: userUpdated,
        });
      } else {
        res
          .status(400)
          .json({ message: "Problem with adding to shopping cart ❗⛔" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove shop item from cart
// @route   DELETE /api/cart/:productId"
// @access  Public

const deleteItemFromShoppingCart = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    const [user] = await User.find({
      _id: req.user._id,
    });

    const [userShopData] = await shoppingCartModel.find({
      userId: req.user._id,
    });

    const singleShopItemIndex = userShopData?.shoppingItems?.findIndex(
      ({ shopItemId }) => shopItemId === req.params.productId
    );

    // update user credits

    const quantity = userShopData.shoppingItems[singleShopItemIndex].quantity;
    const credits = product.credits;
    const refundedCredits = quantity * credits;
    user.credits += refundedCredits;
    const userUpdated = await user.save();

    // delete shop item from cart
    const filteredItems = userShopData?.shoppingItems.filter(
      ({ shopItemId }) => shopItemId !== req.params.productId
    );

    userShopData.shoppingItems = filteredItems;
    await userShopData.save();

    res.status(200).json({
      message: "Success delete a product from cart !",
      newUserUpdated: userUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllShoppingItemsFromCart,
  addItemToShoppingCart,
  deleteItemFromShoppingCart,
};
