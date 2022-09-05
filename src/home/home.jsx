import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./home.css";
import Post from '../post/post';
import { AnimatedList } from 'react-animated-list';
import PostLoading from '../post/postloading';
import randomNumber from '../util/randomNumber';


import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from '../store/redditSlice';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [dispatch, selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    if (isLoading) {
        return (
            <AnimatedList animation="zoom">
                {Array(randomNumber(3, 10)).fill(<PostLoading />)}
            </AnimatedList>
        );
    }

    if (error) {
        return (
            <div>
            <h2>Failed to load post! D:</h2>
            <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>Try again!</button>
            </div>
        );
    }


    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching {searchTerm}</h2>
                <button type="button" onClick={() => dispatch(setSearchTerm(''))}>Go home...</button>
            </div>
        );
    }

    return (
        <>
           {posts.map((post, index) => (
                <Post 
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
                />
            ))}
            
        </>
    )

}

export default Home;