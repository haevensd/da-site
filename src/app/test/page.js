'use client';
import React from 'react';
import { Card, CardContent } from '../../../@/components/ui/card';
import './index.css'
import { redirect } from 'next/navigation';
import BlogGrid from '../components/BlogGrid/BlogGrid'

const BlogPage = () => {
    const articles = [
        {
            imgUrl: '/story.jpg',
            title: 'My Story',
            text: 'In this episode I break down my story regarding how I was able to change my self image to get what I wanted…',
            id: 3
        },

        {
            imgUrl: '/qualified.jpg',
            title: 'Are You Qualified for Success?',
            text: 'How do you know if you really deserve the success you aspire to have? In this episode we break down a simple concept that will help you answer that question…',
            id: 2
        },

        {
            imgUrl: '/dominate.jpg',
            title: 'How to Dominate Your Competition',
            text: 'In this episode we are breaking down how to dominate the compeition in your space so you can really step out…',
            id: 1
        },
        {
            imgUrl: '/relax.jpg',
            title: 'Relax Your Body in 30 Seconds',
            text: 'In this episode I guide you through a simple meditation to immediately relax your whole body…',
            id: 5
        },
        {
            imgUrl: '/connected.jpg',
            title: 'How to Stay Connected',
            text: 'In this episode I explain the best way to stay connected with me so I can help serve you…',
            id: 6
        },
        {
            imgUrl: '/negative.jpg',
            title: '3 Steps to Cure Negative Thinking',
            text: 'In this episode we go through a brainstorming session to help you identify the problems you would like to solve in the world…',
            id: 4
        },
        {
            imgUrl: '/money.jpg',
            title: 'The Truth About Money',
            text: 'In this episode we dive into the truth regarding how we perceive money…',
            id: 7
        },
        {
            imgUrl: '/networking.jpg',
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
            
            margin: 'auto'
        }}>
            <h1 style={{fontFamily: 'Gotham Book Bold', minWidth: '1000px', maxWidth: '1000px', margin:'auto',fontSize: '72px',marginBottom: '10px'}}>Blog</h1>
            <hr style={{ margin:'auto', minWidth: '1200px', maxWidth: '',marginBottom: '0px'}}></hr>
            <BlogGrid></BlogGrid>
            
        </div>
    );
};

export default BlogPage;