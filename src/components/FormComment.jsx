const React = require("react");
const connect = require("react-redux").connect;
const { COMMENT_SHOP } = require("../actions/actions.jsx");


const FormComment = (props) => {

    const routeParams = props;

    let [data, setData] = React.useState({
        postId: props.id,
        author: "",
        text: ""
    })

    let [formError, setFormError] = React.useState({
        postId: props.id,
        author: "",
        text: ""
    });

    function validate() {
        let isValid = true;
        if (data.author == "") {
            formError.author = "Введите ваше имя";
            isValid = false;
        }
        if (data.text == "") {
            formError.text = "Введите сообщение";
            isValid = false;
        }
        setFormError({ ...formError });
        return isValid;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!validate()) {
            return false;
        }
        props.onShopComment(data);
        setData({
            postId: props.id,
            author: "",
            text: ""
        });
    }

    function handleAuthorChange(event) {
        setData({ ...data, author: event.target.value });
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value });
    }

    return <>
        <div className="container">
            <div className="mainform">
                <h5>Оставить отзыв:</h5>
                <form className=" col-12 " action="" onSubmit={handleFormSubmit}>
                    <div className=" name mb-3">
                        <label htmlFor="author" className="name">Имя</label>
                        <input type="text" className="form-control" id="author" value={data.author} onChange={handleAuthorChange} />
                        {formError.author != "" && <div className="error">{formError.author}</div>}
                    </div>
                    <div className="message mb-3">
                        <label htmlFor="text" className="">Текст сообщения</label>
                        <textarea className="form-control" id="text" rows="3" value={data.text} onChange={handleTextChange} />
                        {formError.text != "" && <div className="error">{formError.text}</div>}
                    </div>
                    <div className=" mb-3">
                        <button type="submit" className="btn send">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        comments: state.blog.comments
    }
};

const mapDispatchToProps = dispatch => ({
    onShopComment: (comment) => {
        dispatch({
            type: COMMENT_SHOP, comment
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormComment);