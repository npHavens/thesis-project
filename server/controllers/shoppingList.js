const db = require('../../db/db-config');
const Promise = require('bluebird');

// Shopping List Handlers

exports.createShoppingList = (username) => {
  return new Promise((resolve, reject) => {
    db.collection('shoppingLists').doc(username).set({
      items: {}
    })
    .then(() => {
      resolve('Created shopping list for user ', username);
    })
    .catch(() => {
      reject('Did not create shopping list for user ', username);
    });
  });
}

exports.getShoppingList = (username) => {
  return new Promise((resolve, reject) => {
    db.collection('shoppingLists').doc(username).get()
    .then((doc) => {
      resolve(doc.data().items);
    })
    .catch(() => {
      module.exports.createShoppingList(username);
      console.log('no shopping list, created shopping list for user')
      reject({});
    });
  })
}

exports.addItemToShoppingList = (username, product) => {
  let items;
  return new Promise((resolve, reject) => {
    module.exports.getShoppingList(username)
    .then((shoppingListItems) => {
      items = shoppingListItems;
      items[product.id] = product;
      db.collection('shoppingLists').doc(username).set({
        items: items
      })
      .then(()=> {
        console.log('adding to product list');
        console.log('product merchant:', product.merchant);
        //start a transaction that
        //check if product is already in collection
        //if not, add product to collection
        //else update the current price and the list of users watching the item
        db.collection('productList').doc(product.merchant).collection('products').doc(product.id).set({
          'currentPrice': product.currentPrice,
          users: username
        }, {merge: true});
        return ''
      })
      .then(()=> {
        resolve(items);
      })
      .catch(() => {
        reject('Couldnt add item to shopping list');
      })
    })
    .catch(() => {
      module.exports.createShoppingList(username);
      resolve('No existing shopping list. Create shopping list. Try adding item again');
    })


  })
}

exports.removeItemFromShoppingList = (username, productId) => {
  var items;
  return new Promise((resolve, reject) => {
    module.exports.getShoppingList(username)
    .then((shoppingListItems) => {
      items = shoppingListItems;
      delete items[productId];
      db.collection('shoppingLists').doc(username).set({
        items: items
      })
      resolve(items);
    })
    .catch(() => {
      reject('no shopping list');
    })
  });
}

exports.updateShoppingList = (username, list) => {
  return new Promise((resolve, reject) => {
    db.collection('shoppingLists').doc(username).set({
      items: list
    })
    .then(() => {
      resolve('Shopping List Updated');
    })
    .catch(() => {
      reject('Did not save updated shopping list');
    })
  });
}


