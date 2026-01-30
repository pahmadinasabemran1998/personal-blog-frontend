const PostList = ({ posts, onEdit, onDelete }) => {
    if (!posts.length) {
        return <p>No posts found. Start writing your first post!</p>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div
                    key={post._id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "1rem",
                        marginBottom: "1rem",
                        borderRadius: "5px",
                    }}
                >
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <button onClick={() => onEdit(post)}>Edit</button>
                    <button onClick={() => onDelete(post._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;