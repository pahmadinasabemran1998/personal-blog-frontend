import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Loader from "../components/Loader";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingPost, setEditingPost] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/api/posts");
            setPosts(data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleAddPost = async ({ title, content }) => {
        try {
            const { data } = await api.post("/api/posts", { title, content });
            setPosts([data, ...posts]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdatePost = async ({ title, content }) => {
        try {
            const { data } = await api.put(`/api/posts/${editingPost._id}`, { title, content });
            setPosts(posts.map((p) => (p._id === data._id ? data : p)));
            setEditingPost(null);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeletePost = async (id) => {
        try {
            await api.delete(`/api/posts/${id}`);
            setPosts(posts.filter((p) => p._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Welcome, {user.name}</h1>
            <button onClick={logout}>Logout</button>


            {loading ? (
                <Loader />
            ) : (
                <>
                    <PostForm 
                        onSubmit={editingPost ? handleUpdatePost : handleAddPost}
                        initialData={editingPost}
                    />
                    <PostList 
                        posts={posts}
                        onEdit={setEditingPost}
                        onDelete={handleDeletePost}
                    />
                </>
            )}
        </div>
    );
};

export default Dashboard;