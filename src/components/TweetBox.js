import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Rob Curcio',
            username: 'rob_loves_coding92',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/123505089_3885561511483651_6250797444181707497_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=m5tR2tHbCZwAX97i-pf&_nc_ht=scontent-iad3-1.xx&oh=76f2de801b05f646d4538c7ee3de4243&oe=5FE569D9'
        });

        setTweetMessage('');
        setTweetMessage('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/123505089_3885561511483651_6250797444181707497_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=m5tR2tHbCZwAX97i-pf&_nc_ht=scontent-iad3-1.xx&oh=76f2de801b05f646d4538c7ee3de4243&oe=5FE569D9" />
                    <input 
                        value={tweetMessage} 
                        onChange={e => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"  
                        type="text" 
                    />
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
