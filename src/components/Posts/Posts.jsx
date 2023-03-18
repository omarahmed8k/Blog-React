import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Post from './Post/Post';
import './Posts.css';

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems?.map((item) => (
                    <>
                        <Post
                            key={item._id}
                            postTitle={item.title}
                            postDescription={item.body}
                            postAuthor={item.subject}
                            postDate={
                                new Date(item.createdAt).toLocaleDateString()
                            }
                        />
                    </>
                ))}
        </>
    );
}

export default function Posts({ itemsPerPage }) {
    const [searchParams] = useSearchParams();

    const [posts, setPosts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = posts?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts?.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts?.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        let searchParam = searchParams.get("search")
        if (searchParam !== "") {
            let searchResults = posts?.filter((post) => {
                return post.title.toLowerCase().includes(searchParam.toLowerCase());
            });
            setPosts(searchResults);
        } else {
            fetch("https://blog-api-l9xf.onrender.com/blogs")
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.log(error));
        }
    }, [searchParams]);

    useEffect(() => {
        try {
            fetch("https://blog-api-l9xf.onrender.com/blogs")
                .then((response) => response.json())
                .then((data) => setPosts(data))
                .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(posts)

    return (
        <>
            <div className="col-2">
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                className="pagination"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}