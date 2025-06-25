import { useRouter } from 'next/router'
const blogDict = {
    1: <p>In this episode, we are going to ask the big question. Are you really worthy of success?<br />

I know sometimes it can feel like no matter what you do that it isn’t enough to get your goals met on the level you would like to see for yourself.<br />

I remember a time in my life where I felt as though no matter what I did I could not break through this fear of being able to share my message to the world on a larger level.<br />

This fear kept nagging at me day and night to the point where I really was suffering constantly. Feeling unworthy and as if I would always be stuck in a position where no matter how bad I wanted success; it just wasn’t meant for me.<br />

 

Until one day I was at a seminar and I heard a woman speak. She told her story about how she read a book written by Napoleon Hil and it gave her a new understanding of the Law of Success that she never knew existed and she became fascinated with this type of content.<br />

So for months….<br />
she devoted all of her time in the library learning about the science behind success and achievement. She continued her research and decided to hold an event in Santa Monica where she would teach this information. Now remember she herself was not successful but she fell in love with the content so much that she decided to hold this event regardless of if anyone came or not.<br />

 

Through her persistence and positive attitude, she filled the event with 500 people. She then went on to be a prominent speaker in the category of success and achievement for the next 20 years.<br />

 

Listening to her story got me thinking but she said one thing in particular that changed my perception of everything. She said that your message doesn’t matter as much as the fact that it’s YOU the one telling it. Think about that for a second, if you express a message to an audience and I express the exact same message…we may have 2 completely different demographics reside with who we are simply because of our energy even if its the exact same message.<br />

There are people out there who want to know what you have to say and want to learn from you and only you. When I realized this it gave me the permission I needed to share my mission with the world unapologetically and so should you.<br />
</p>
}


const BlogPage = () => {
    const router = useRouter();
    console.log(router.query.slug)
    return (
        <div>
            {blogDict[router.query.slug]}
        </div>
    );
};

export default BlogPage;