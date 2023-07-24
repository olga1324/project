const redux = require("redux");
const blog = require("./blog.jsx");
const connectRouter = require("connected-react-router").connectRouter;


const reducers = (history) => redux.combineReducers({
    blog: blog,
    router: connectRouter(history)
})

module.exports = reducers;