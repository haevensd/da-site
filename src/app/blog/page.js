'use client';
import React from 'react';
import { Card, CardContent } from '../../../@/components/ui/card';
import './index.css'
import { redirect } from 'next/navigation';

const BlogPage = () => {
    const articles = [
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault.jpg',
            title: 'How to Dominate Your Competition',
            text: 'In this episode we are breaking down how to dominate the compeition in your space so you can really step out…',
            id: 1
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-1.jpg',
            title: 'Are You Qualified for Success?',
            text: 'How do you know if you really deserve the success you aspire to have? In this episode we break down a simple concept that will help you answer that question…',
            id: 2
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-2.jpg',
            title: 'My Story',
            text: 'In this episode I break down my story regarding how I was able to change my self image to get what I wanted…',
            id: 3
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-1-2.jpg',
            title: 'How to Figure Out What to Do With Your Life',
            text: 'In this episode we go through a brainstorming session to help you identify the problems you would like to solve in the world…',
            id: 4
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-2-2.jpg',
            title: 'Relax Your Body in 30 Seconds',
            text: 'In this episode I guide you through a simple meditation to immediately relax your whole body…',
            id: 5
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-3.jpg',
            title: 'How to Stay Connected',
            text: 'In this episode I explain the best way to stay connected with me so I can help serve you…',
            id: 6
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-4.jpg',
            title: 'The Truth About Money',
            text: 'In this episode we dive into the truth regarding how we perceive money…',
            id: 7
        },
        {
            imgUrl: 'https://darikalexander.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-09-at-12.18.01-PM.png',
            title: 'The First Thing You Should Do in Network Marketing',
            text: 'In this module we learn...',
            id: 8
        },
    ]
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            paddingTop: '100px',
            paddingBottom: '750px',
            maxWidth: '1000px',
            margin: 'auto'
        }}>
            {articles.map((i) => {
                
                return <Card key={i.title} style={{marginBottom: '50px'}} onClick={() => redirect(`/read?id=${i.id}`)}>
                        <CardContent style={{padding: '25px'}} className='content'>
                        <img src={i.imgUrl} />
                            <h1 className='bold'>{i.title}</h1>
                            <p >{i.text} <a>Read more</a></p>
                        </CardContent>
                </Card>
            })}
        </div>
    );
};

export default BlogPage;