import {shopItems, users, userShopData} from '../fixtures';

const getQuantity = (userShop, id) => {
  const {quantity} = userShop?.shopItems?.find(({shopItemId}) => shopItemId === Number(id)) || {};
  return quantity;
};

// SHOP

/* SHOP: GET shop item by id */
export const getShopItemById = itemId => shopItems.filter(({id}) => id === itemId);

/* SHOP: GET all shop items */
export const getAllShopItems = () => shopItems;

//  ADMIN-SHOP : delete specific shopItem
export const deleteShopItem = shopItemId => {
  const singleShopItemIndex = shopItems.findIndex(({id}) => id === shopItemId);
  shopItems.splice(singleShopItemIndex, 1);
  return {message: 'Success deleted!'};
};

//  ADMIN-SHOP: POST new ShopItem
export const getNewShopItemAdded = shopItem => {
  shopItems.unshift(shopItem);
  return shopItem;
};

//  ADMIN-SHOP : edit specific shopItem

export const getNewUpdatedShopItem = (shopItem, shopItemId) => {
  const {title: newTitle, credits: newCredits, description: newDescription, images: newImages} = shopItem;
  const singleShopItemIndex = shopItems.findIndex(({id}) => id === Number(shopItemId));
  shopItems[singleShopItemIndex].title = newTitle;
  shopItems[singleShopItemIndex].credits = newCredits;
  shopItems[singleShopItemIndex].description = newDescription;
  shopItems[singleShopItemIndex].images = newImages;

  return shopItems[singleShopItemIndex];
};

// SHOP: USER:  functionality for PUT request for  shopping list  : when you press buy the product id and quantity will be added to the database

export const updateShopItems = (userIdParam, shopItemId) => {
  const loggedInShopItems = userShopData.find(({userId}) => userId === Number(userIdParam));
  const userData = users.find(user => user?.id === Number(userIdParam));
  const {credits: shopItemCredits} = shopItems.find(item => item.id === Number(shopItemId));

  const singleShopItemIndex = loggedInShopItems?.shopItems.findIndex(item => item.shopItemId === shopItemId);
  const userIndex = users.findIndex(user => user.id === Number(userIdParam));

  if (userData.credits < shopItemCredits) {
    return {message: `You need another ${shopItemCredits - userData.credits} credits to buy this product`};
  }
  if (singleShopItemIndex !== -1) {
    loggedInShopItems.shopItems[singleShopItemIndex].quantity += 1;
  } else {
    loggedInShopItems.shopItems.push({shopItemId, quantity: 1});
  }
  users[userIndex].credits -= shopItemCredits;

  return {message: 'Successfully added to shopping list ✅'};
};

// SHOP:USER
export const getItemsAddedToShoppingList = userIdParam => {
  const userShop = userShopData?.find(({userId}) => userId === Number(userIdParam));
  const userShopIds = new Set(userShop?.shopItems?.map(({shopItemId}) => shopItemId));

  return shopItems
    .filter(shopItem => userShopIds.has(shopItem.id))
    .map(shopItem => ({...shopItem, userId: userIdParam, quantity: getQuantity(userShop, shopItem.id)}));
};
