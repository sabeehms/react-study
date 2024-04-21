
import List from './List';
import { useState } from "react";
import useFetch from './useFetch';

const Home = () => {
    const title = 'Welcome to the new project';
    const likes = 50;
    const link = "https://www.google.com/";
    //let name='Frankfurt';
    const [name, setName] = useState('Frankfurt');
    const [age, setAge] = useState(31);
    const [naam, setNaam] = useState('Mohsin');

    const handleClick = () => {
        setName('Berlin');
        setAge(47);
    }
    const handleClickAgain = (name) => {
        console.log('Project One by: ' + name);
    }

    /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
      }, []); */

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (

        <div className="home">
                <div className="h-content1">
                    <h2 className="title-heading">Homepage</h2>
                    <div className='title-content'>
                        <p>{title}</p>
                        <p>No. of Likes: {likes} times</p>
                        <p>Testing JS function: <span className='bold'>{Math.random() * 20}</span> is the value obtained.</p>
                        <br />
                        <span>Test Link: <a href={link} className='bold'>Visit Google</a></span>
                        <br /><br />
                        <span>Testing useState Hook:
                            <button onClick={handleClick}>Click Me</button><br />
                            <span>City: {name}, & Age: {age}</span>
                            <br /><br />
                            <button className="myBtn" onClick={() => { handleClickAgain('Sabeeh') }}>Click me again!</button>
                            <br /><br />
                            <button className="myBtn" onClick={() => { setNaam('Sabeeh') }}>useEffect Dependency</button>
                        </span>
                        <br /><br /><hr /><br />
                        <p>Using JSON Server</p>
                    </div>
                </div>
                
                <div className="h-content2">
                    {/* {blogs && <List blogs={blogs} title="All Blogs:" handleDelete={handleDelete} />}
                    {blogs && <List blogs={blogs.filter((blog) => blog.author === 'mario')} title="Custom Blogs List:" handleDelete={handleDelete} />} */}
                    {error && <div>{error}</div>}
                    {isPending && <div className='loader'></div>}
                    {blogs && <List blogs={blogs} title="All Blogs:" />}
                    {blogs && <List blogs={blogs.filter((blog) => blog.author === 'mario')} title="Custom Blogs List:" />}
                </div>

        </div>
    );
}

export default Home;