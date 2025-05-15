'use client';
import { redirect, useSearchParams } from 'next/navigation';
import './index.css';
import { Card, CardContent } from '../../../@/components/ui/card';
import { Suspense } from 'react'
const blogDict = {
    1: {
        content: <p>In this episode, we are going to ask the big question. Are you really worthy of success?<br />
<br />
I know sometimes it can feel like no matter what you do that it isn’t enough to get your goals met on the level you would like to see for yourself.<br />
<br />
I remember a time in my life where I felt as though no matter what I did I could not break through this fear of being able to share my message to the world on a larger level.<br />
<br />
This fear kept nagging at me day and night to the point where I really was suffering constantly. Feeling unworthy and as if I would always be stuck in a position where no matter how bad I wanted success; it just wasn’t meant for me.<br />
<br />
<br />
<br />
Until one day I was at a seminar and I heard a woman speak. She told her story about how she read a book written by Napoleon Hill and it gave her a new understanding of the Law of Success that she never knew existed and she became fascinated with this type of content.<br />
<br />
So for months….<br />
she devoted all of her time in the library learning about the science behind success and achievement. She continued her research and decided to hold an event in Santa Monica where she would teach this information. Now remember she herself was not successful but she fell in love with the content so much that she decided to hold this event regardless of if anyone came or not.<br />
<br />
<br />
<br />
Through her persistence and positive attitude, she filled the event with 500 people. She then went on to be a prominent speaker in the category of success and achievement for the next 20 years.<br />
<br />
<br />
<br />
Listening to her story got me thinking but she said one thing in particular that changed my perception of everything. She said that your message doesn’t matter as much as the fact that it’s YOU the one telling it. Think about that for a second, if you express a message to an audience and I express the exact same message…we may have 2 completely different demographics reside with who we are simply because of our energy even if its the exact same message.<br />
<br />
There are people out there who want to know what you have to say and want to learn from you and only you. When I realized this it gave me the permission I needed to share my mission with the world unapologetically and so should you.<br />
</p>,
imgUrl: '/daunfiltered.jpg',
title: 'How to Dominate Your Competition',
video: <iframe width="790" height="445" src="https://www.youtube.com/embed/7RgOvrXKWrQ" title="How to Beat the Competition" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    2: {
        imgUrl: '/daunfiltered.jpg',
        title: 'Are You Qualified for Success?',
        content: <p>In this episode, we are going to ask the big question. Are you really worthy of success?<br />
            <br />
        I know sometimes it can feel like no matter what you do that it isn’t enough to get your goals met on the level you would like to see for yourself.<br />
        <br />
        I remember a time in my life where I felt as though no matter what I did I could not break through this fear of being able to share my message to the world on a larger level.<br />
        <br />
        This fear kept nagging at me day and night to the point where I really was suffering constantly. Feeling unworthy and as if I would always be stuck in a position where no matter how bad I wanted success; it just wasn’t meant for me.<br />
        <br />
        <br />
        Until one day I was at a seminar and I heard a woman speak. She told her story about how she read a book written by Napoleon Hil and it gave her a new understanding of the Law of Success that she never knew existed and she became fascinated with this type of content.<br />
        <br />
        So for months….<br />
        she devoted all of her time in the library learning about the science behind success and achievement. She continued her research and decided to hold an event in Santa Monica where she would teach this information. Now remember she herself was not successful but she fell in love with the content so much that she decided to hold this event regardless of if anyone came or not.<br />
        <br />
        <br />
        Through her persistence and positive attitude, she filled the event with 500 people. She then went on to be a prominent speaker in the category of success and achievement for the next 20 years.<br />
        <br />
        <br />
        <br />
        Listening to her story got me thinking but she said one thing in particular that changed my perception of everything. She said that your message doesn’t matter as much as the fact that it’s YOU the one telling it. Think about that for a second, if you express a message to an audience and I express the exact same message…we may have 2 completely different demographics reside with who we are simply because of our energy even if its the exact same message.<br />
        <br />
        There are people out there who want to know what you have to say and want to learn from you and only you. When I realized this it gave me the permission I needed to share my mission with the world unapologetically and so should you.<br />
        </p>,
        video: <iframe width="790" height="445" src="https://www.youtube.com/embed/7tr-E9Uj4o0" title="Are You Qualified For Success?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    3: {
        imgUrl: '/daunfiltered.jpg',
        title: 'My Story',
        content: <p>
            5 years ago I was a dead broke student at the University of Hawaii. As a D1 athlete, I had over 50 thousand dollars in student loan debt with absolutely no plan on repaying it. At the time I felt like I was unworthy for success. Since I didn’t believe I had the intelligence or resourcefulness to make money how I wanted to and since I felt like I lacked the innovation to start my own business, I applied for a job at the call center of my university.<br />
            <br />
        I spent my time taking non stop calls to alumni from the school influencing them to give gifts or donations. As much a I hated the job, I began to get good at talking to people. I learned how to handle objections, how to loop the caller by identifying their real needs to build rapport, and ultimately use those needs to convert a skeptic into a sale. Within 6 months I had personally raised more money for the call center than everyone who had ever worked there. This even included graduate students who had been working there for over 4 years. I was sure that because of my performance I would get a pay increase from $9.00 an hour. I still remember the day my boss came to me after finishing a call asking me to sign a document stating my raise. I was so excited. “This is it, things are going to change now. I can start working on paying my debt back. I won’t have to be so stressed with every purchase I make. I can even start looking at ways to invest my income”….this is what I thought…until I realized my raise was an increase of 80 cents.<br />
        <br />
        I felt devastated,”is there no way out of this endless loop of working for money.” I mean I could mathematically calculate how much I was going to make over the next 4 years and it was no where near what I needed even with overtime. Knowing that I had to log countless hours to not even come close to what I needed had me sick and stressed to the bone everyday. I knew that at 19 I shouldn’t be living like this. I was supposed to be in the now and spend my time adventuring and making new memories but instead I would feel stress anytime I had to make any type of purchase.<br />
        <br />
        Until one day I heard about a friend of mine who was making money on his smartphone not clocking in or out. The idea seemed foreign to me. At the time I simply accepted that most people my age were incapable of making real money while in school and after graduating college it would “all work out” yet when I met this guy and talked to him he began to explain to me the concept of network marketing and it radically blew my mind.<br />
        <br />
        I was shocked that I could join a business model where I could avoid $100,000’s of dollars in start up costs while the cap on my earning potential based off of my own limitations. I immediately joined this company and went all in.<br />
        <br />
        Over the next 10 months I had left school, moved from Hawaii to Oregon, enrolled over 6000 people in my business, reached the top 30 income earners in the company out of half a million distributors and  brought in $5,000,000 in sales revenue. Because everything happened so quickly many people felt that it was just because of luck, that I somehow had hit the jackpot and was simply riding a wave and to be honest at times I even questioned my own ability. However 10 months later my business doubled from 5000 to 10,000 and my team had brought in $10,000,000 in revenue.<br />
        <br />
        And then everything changed. After running a thriving network marketing team for 4 years; it all vanished in an instant when I found out our company’s assets had froze while the CEO dealt with a legal situation. In an instant something completely out of my control altered my entire life and I found myself needing to completely build back my income, my team and my identify.<br />
        <br />
        Although at the time this experience was traumatizing, it was one of the best things that had ever happened to me. From then till now I launched my own company Ignite Programs by using not just the income but more importantly the entrepreneurial skill set I developed in Network Marketing to build my company into an international training platform that has helped over 10,000 people make the transition into a life of purpose, passion and prosperity that gets them real world results.<br />
        <br />
        Although it seems like consistent success, the truth is I made a ton of mistakes that could’ve easily been avoided had I spent more time learning from other people’s failures instead of my own. And over the years I have been able to identify not just what worked about my experiences in network marketing, but more importantly what didn’t work, what to avoid and what to watch out for in the industry to be sure you are protected long term.<br />
        <br />
        For years I have received messages in my inbox asking for guidance on how to excel in this industry. This need for mentorship in the industry despite what company these distributors are in lead me on a journey of research and discovery. I started to spend my time identifying not just the strategies that I used over the years to grow my team, but the frameworks countless other professionals in the industry have done to build their massive teams. As I began studying not just what I did but these other industry powerhouses, I began to notice a trend. Despite what company these people were in, all of their teams faced the same internal problems. And although these people needed to learn how to recruit, how to train, how to duplicate, how to create momentum…I began to understand the ultimate problem lied in the individual’s self image. Their behavior of how they viewed themselves was the fundamental difference maker in their belief level to exceed or to fail.<br />
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/HkRhTDN-Has" title="My Story-How I Lost Everything and Got It Back" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    4: {
        imgUrl: '/daunfiltered.jpg',
        title: '3 Steps to Cure Negative Thinking',
        content: <p>
In this episode, I dive into 3 simple steps that I have used time and time again to cure negative thinking.<br />
<br />
Did you know that it takes just 17 seconds to focus on a thought in order for us to get an emotional stimulation from it? So if you can focus on something you actually want for just 17 seconds you can begin to shift your vibrational patterns internally.<br />
<br />
But how often do we try and think about the things we want in our lives when all of a sudden a negative thought creeps in and makes those 17 seconds immediately reset?<br />
<br />
Well in my life personally, I have found that doing these 3 things have made a dramatic change in my ability to not just cure negative thinking but more importantly start feeling better immediately so I can move forward with my day and get what needs to be done, DONE.<br />
<br />
Accept<br />
So how do we do this? Well, it starts with my abbreviation AAH. Now, what do I mean by this? First ACCEPT, accept the fact that not just you but everyone in the world is going to have negative thoughts from time to time and that it is actually completely natural. See, it isn’t always about our negative thoughts that we don’t like but its the label we put behind the negative thought; the energy that precedes it.<br />
<br />
So first is accepting that we all are going to have negative thoughts and finding a sense of community in knowing that you are not alone in this.<br />
<br />
Announce<br />
Next ANNOUNCE, so when you have a thought that is negative you say out loud, “I’m having a thought. I notice I am having a thought.” This will immediately position you into the present moment to help you not attach a negative emotion to that thought in the first place. As you begin to consciously announce that statement to yourself when you have a negative thought, watch what begins to happen each time you think of something that is rather unpleasant.<br />
<br />
Hunt<br />
Lastly, is HUNT…hunt for the triggers that cause your negative thoughts in the first place and constantly work on eliminating them. If you hate broccoli you aren’t going to put it in all of your meals, so if you can recognize what thoughts stimulate negative emotions and start working on identifying the triggers that stimulate those thoughts in the first place.<br />
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/jROMv7ToWxI" title="3 Steps to Cure Negative Thinking" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    5: {
        imgUrl: '/daunfiltered.jpg',
        title: 'Relax Your Body in 30 Seconds',
        content: <p>
            Stress has become second nature in our busy world. We live in a society where we are nearly programmed to feel like we should be constantly doing something day in an day out or else what we are doing is not relevant or worth while.<br />
            <br />
            With so much stop and go, it is important to be able to know how to relax your body very quickly with simple techniques.<br />
            <br />
            In this video, I demonstrate a simple process where you can isolate different muscles within your body and by putting tension in those areas for a short period of time and then letting go, you can create more relaxation. We do not always realize that certain parts of our bodies are in tension. This tension is happening subconsciously whether we realize it or not. So this exercise will allow you to quickly identify which parts of your body have been tense and holding you back.<br />
            <br />
            I have used this exercise in times of frustration but also as a morning routine which helps prime my day and position me to stay focused on the task at hand while not getting over intimidated by the amount of work that needs to be done.<br />
            <br />
            I hope that these exercises will serve you as they have served me and feel free to share them with other people who you feel may be getting stressed and could use some relaxation.<br />
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/NXQxHwlTTqM" title="How to Relax Your Body-In 30 Seconds" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    6: {
        imgUrl: '/daunfiltered.jpg',
        title: 'How to Stay Connected',
        content: <p>
            So I have had a lot of people reaching out to me asking the best ways to connect with me and work with me.<br />
            <br />
            My mission is to help you transition into doing what you love full time. I think to many people in this world spend their time in situations that hold them back from feeling alive and present.<br />
            <br />
            With the information age, there is no limit on the number of resources at our disposal to create a life by design.<br />
            <br />
            That’s, why one of the tools I have created is called “The Vault” this, is a way for you to submit questions or challenges that you may be having in your life directly to me and I can then review this information to answer these challenges in further videos,<br />
            <br />
            Another project I developed is my new program Ascension-The Turnkey System to Create a Lucrative Downline. In this program, I have carefully curated some of the most successful network marketers in the entire industry to share their secrets to building massive organizations that leave tremendous value. This system goes through every step necessary to successfully scale a large network marketing organization from scratch.<br />
            <br />
            These are just some of the tools I have developed to help you make that transition and if you would like to reach me personally feel free to contact me on my facebook page at ‘Darik Alexander’.
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/NXQxHwlTTqM" title="How to Relax Your Body-In 30 Seconds" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    7: {
        imgUrl: '/daunfiltered.jpg',
        title: 'The Truth About Money',
        content: <p>
            It is probably the most controversial topic out there. But I figured at some point we need to tackle the idea of money. Although money is something that can be a huge cause of stress in life, it can also be a huge testament to identifying one’s value in the marketplace.<br />
            <br />
Having been in positions of making a lot of money and also phases of making practically no money. I could tell you that the biggest thing I have learned about money is that it doesn’t necessarily change you as much as it magnifies who you already are. If you are a generous person, you will be even more generous, however, if you are a greedy person, that greed will magnify as well. Money really is simply a tool.<br />
<br />
An easy way to identify how to make more money is to not ask how can I make more money, but rather ask how can I add more value to more people in a way that leverages my time.<br />
<br />
The idea is to be able to spread your message and your mission in a leveraged way that allows you to constantly be in flow while not burning out of passion and cash.<br />
<br />
Money can give you the freedom to truly live how you want to live, but dedicating your entire life to the pursuit of money could be a fast track to depression and unfulfillment.<br />
<br />
Find your financial thermostat and do your best to maintain balance in the process of pursuing not just money but your value in the marketplace.
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/zLmWRVHmyJk" title="The Truth About Money" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },
    8: {
        imgUrl: '/daunfiltered.jpg',
        title: 'The First Thing You Should Do in Network Marketing',
        content: <p>
            There is a lot of debate about what the first thing someone should do when they join a network marketing company. Some people would argue that they should immediately make a list and contact everyone they know. Others would say it is easier to just spend your first 2 weeks learning about the company and the compensation plan. However, I personally have a different viewpoint.<br />
            <br />
Over the years I have personally noticed that above all else the one thing that would be the most important thing to do when joining a network marketing company would be to make a commitment. Simply understanding what you are willing to commit to and what you are not willing to commit to will help o=posoitn you from the beginning to understand what you are really getting into. This also is great from a motivational standpoint.<br />
<br />
When you have people in your organization that is having a tough time or are frustrated and they contact you for support and help. Rather than feeling the need to constantly motivate them to do better. You can simply review with them what they promised to commit to and identify if they have done a good job sticking to those commitments. This makes success a simple idea of commitment and if they are doing the work they will get the results but if they haven’t got the results its simply because they haven’t been doing the work. It makes the motivational process much more black and white and easier to scale.<br />
<br />
Identifying what to commit to first is really important when launching your network marketing business.
        </p>,
        
        video: <iframe width="743" height="418" src="https://www.youtube.com/embed/x7824u9RVh0" title="What to Do Your First Day in Network Marketing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    },

}

const suggestions = [
    {
        imgUrl: '/daunfiltered.jpg',
        title: 'Are You Qualified for Success?',
        text: 'How do you know if you really deserve the success you aspire to have? In this episode…'
    },
    {
        imgUrl: '/daunfiltered.jpg',
        title: 'My Story',
        text: 'In this episode I break down my story regarding I was able to change my self image to get what I wanted…'
    },
    {
        imgUrl: '/daunfiltered.jpg',
        title: 'How to Figure Out What to Do With Your Life',
        text: 'In this episode we go through a brainstorming session to help you identify the problems you would like to solve in the world…'
    },
]

const Inner = () => {
    const searchParams = useSearchParams();

    const blogId = searchParams.get('id');
    return <div className='container' style={{paddingBottom: '0', maxWidth: '1270px'}}>
    <img src='/back.png' style={{position: 'fixed', top: '150px', left: '10vw', cursor: 'pointer'}} height={'30px'} width={'30px'} onClick={() => redirect('/blog')}/>
    <img src={blogDict[blogId].imgUrl} />
    <h1>{blogDict[blogId].title}</h1>
    {blogDict[blogId].content}
    <div style={{marginTop: '50px', width: '100%', justifyContent: 'center', display: 'flex'}}>
    {blogDict[blogId].video}
    </div>
</div>
    
}
const BlogPage = () => {
    // const router = useRouter();
    

    return (
        <Suspense>
            <Inner></Inner>
            <div className="subarticles" style={{display: 'flex',maxWidth: '1200px',marginLeft: 'auto',marginRight: 'auto', maxHeight: '600px', gap: '20px', marginTop: '100px', marginBottom: '600px'}}>
    {suggestions.map((i) => {
        return <Card key={i.title} style={{marginBottom: '50px', minWidth: '400px', }}>
            <CardContent style={{padding: '25px', maxHeight: '600px',}}>
            <img src={i.imgUrl} />
                <h1 style={{marginTop: '10px', marginBottom: '5px', lineHeight: '1.25'}} className='bold'>{i.title}</h1>
                <p style={{textOverflow: 'ellipsis'}}>{i.text} <a>Read more</a></p>
            </CardContent>
        </Card>
    })}
    </div>
        </Suspense>
    );
};

export default BlogPage;