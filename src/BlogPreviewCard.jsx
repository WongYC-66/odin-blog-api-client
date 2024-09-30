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
            <div className="card my-4" onClick={viewPostClick} style={{width: "18rem", maxHeight: "40rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{fmtTime(post.timestamp)}</h6>

                    {/* <p className="card-text text-break text-truncate">{post.contents}</p> */}
                    <p className="card-text text-break overflow-hidden" style={{maxHeight: "200px"}}dangerouslySetInnerHTML={{__html: post.contents}}></p>

                </div>
            </div >
        </a>
    )

}