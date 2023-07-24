const React = require("react");
const connect = require("react-redux").connect;
const { LIKE_SHOP, ITEM_ADD } = require("../actions/actions.jsx");
const { AiOutlineLike } = require("react-icons/Ai");


const Home = (props) => {

    function handleLikeClick(event) {
        props.onShopLike(+event.currentTarget.dataset.id);
    }

    function numberOfComments(postId) {
        let number = props.comments.filter((card) => card.postId == postId).length;
        return number;
    }

    return <>

        <div className="container">
            <div className="main ">
                {props.shops.map((card) => {
                    return <div className="card " key={card.id}>
                        <img src={`/img/${card.img}`} className="card-img-top " alt={card.img} onClick={() => { props.history.push("/blog/" + card.id) }} />
                        <div className="card-body">
                            <h5 >{card.title}</h5>
                        </div>
                        <div className="card-footer card_footer-style">
                            <div className="card_footer-style_like ">
                                <div className="card-footer-style_like__button">
                                    < AiOutlineLike className="card__like" data-id={card.id} onClick={handleLikeClick} />
                                </div>
                                <div className="card-footer_like__count">
                                    <div>{card.like}</div>
                                    <div className="card__comment">{numberOfComments(card.id)} комментария</div>
                                </div>
                            </div>
                            <div className="card_footer-style_cart ">
                                <button type="button" className="btn btn-info" onClick={() => { props.history.push("/blog/" + card.id) }}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        shops: state.blog.shops,
        comments: state.blog.comments,
        cartItems: state.blog.cartItems
    }
};

const mapDispatchToProps = dispatch => ({

    onShopLike: (id) => {
        dispatch({
            type: LIKE_SHOP, id
        })
    },

    onAddItem: (item) => {
        dispatch({
            type: ITEM_ADD, item
        })
    }

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home);

