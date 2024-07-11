export default function BlogPreviewCard(props) {
    const post = props.post
    const setShowPage = props.setShowPage

    const fmtTime = (timestamp) => {
        return new Date(timestamp).toLocaleString()
    }

    const viewPostClick = () => {
        setShowPage(`ViewPost,${post._id}`)
    }

    return (
        <a href="#" className="text-decoration-none icon-link-hover">   
            <div className="card my-4" onClick={viewPostClick}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{fmtTime(post.timestamp)}</h6>

                    <p className="card-text text-truncate">{post.contents}</p>

                </div>
            </div >
        </a>
    )

}