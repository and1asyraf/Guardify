const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs = props.blog;
    // const title = props.title;
    
    return (  
        
        <div className="blog-list">
            <h2 style={{color:"pink"}}>{title}</h2>
         {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p style={{fontStyle:"italic"}}>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>

            ))}
        </div>
    );
}
 
export default BlogList;