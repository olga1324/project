const React = require("react");
const connect = require("react-redux").connect;


const Comment = (props) => {

    const postComments = props.comments.filter((comment) => props.id == comment.postId);

    return <>

        <div className="container">
            <div className="comment col-12">
                <h5>Комментарии:</h5>
                {postComments.map((item) => {
                    return <div key={item.id}>
                        <h6>{item.author}:</h6>
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        comments: state.blog.comments
    }
};

module.exports = connect(mapStateToProps, {})(Comment);