const React = require("react");
const connect = require("react-redux").connect;
const Comment = require("./Comment.jsx");
const FormComment = require("./FormComment.jsx");
const { push } = require("connected-react-router");


const Post = (props) => {

    const routeParams = props.match.params;
    const post = props.shops.find((shop) => shop.id == routeParams.id);

    return <>
        <div className="container">
            <div className="fullCard">
                <div className="fullCard " key={post.id}>
                    <div className="fullCard__img ">
                        <img src={`/img/${post.img}`} className="fullCard   col-md-6 " alt={post.title} />
                    </div>
                    <div className="fullCard__description   col-md-6 ">
                        <h3 className="fullCard-title"> {post.title}</h3>
                        <p className="fullCard-text">{post.description} </p>
                        <p className="fullCard-text">{post.adress} </p>
                        <p className="fullCard-text">Стоимость промокода:{post.price}р. </p>
                        <div className="fullCard__btn__cart ">
                            <button type="button" className="btn btn-info float-end" onClick={() => { props.push("/basket") }}>Получить промокод</button>
                        </div>
                    </div>
                    <FormComment id={post.id} />
                    <Comment id={post.id} />
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        shops: state.blog.shops,
    }
};

module.exports = connect(mapStateToProps, { push })(Post);
