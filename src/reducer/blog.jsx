const reducer = (state = {}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                ...state,
                shops: action.shops,
                comments: action.comments,
                lastShopId: action.lastShopId,
                lastCommentId: action.lastCommentId
            }
        case "SHOP_ADD":
            let newId = ++state.lastShopId;
            let newShop = {
                id: newId,
                title: action.shop.title,
                description: action.shop.description,
                img: action.shop.img,
                date: new Date(),
                like: 0
            };
            return {
                ...state,
                shops: [...state.shops, newShop],
                lastShopId: newId
            };
        case "SHOP_DELETE":
            return {
                ...state,
                shops: state.shops.filter((item) => item.id != action.shopId)
            }
        case "SHOP_LIKE":
            return {
                ...state,
                shops: state.shops.map((item) => {
                    if (item.id == action.id) {
                        item.like++;
                    }
                    return item;
                })
            }

        case "SHOP_COMMENT":
            let newCommentId = ++state.lastCommentId;
            let newComment = {
                id: newCommentId,
                postId: action.comment.postId,
                author: action.comment.author,
                text: action.comment.text
            };
            return {
                ...state,
                comments: [...state.comments, newComment],
                lastCommentId: newCommentId
            };

        case "ADD_ITEM":

            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            };

        case "INIT_USERS":
            return {
                ...state,
                users: action.users,
                lastUserId: action.lastUserId,
                currentUser: action.currentUser
            }

        case "SIGNUP":
            let newIdUser = ++state.lastUserId;
            let newUser = {
                id: newIdUser,
                login: action.user.login,
                password: action.user.password,
            };
            return {
                ...state,
                users: [...state.users, newUser],
                lastUserId: newIdUser
            };

        case "SIGNIN":
            return {
                ...state,
                currentUser: action.login
            }
    }
    return state;
}
module.exports = reducer;