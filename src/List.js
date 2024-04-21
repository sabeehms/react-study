import {Link} from 'react-router-dom';

const List = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    // const handleDelete = props.handleDelete;

    return ( 
        <div className="list">
            <h2 className="title-heading">{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h3>{blog.title}</h3>
                        <p>Written By: <span className="bold">{blog.author}</span></p>
                        {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
                        <br />
                        <span className='span-btn'>View Blog</span>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default List;