import React from 'react';
import { Card, CardContent } from '../../../@/components/ui/card';
import './about.css'
import CountrySlider from '../components/country-grid';
import Contact from '../components/contact/contact';
import OffsetImageGallery from '../components/photo-highlight/PhotoHightlight.js';

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    paddingBottom: '500px'
  },
  maxWidthWrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    marginBottom: '64px',
    padding: '48px 24px',
  },
  heroTitle: {
    fontSize: '72px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  heroSubtitle: {
    fontSize: '30px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '32px',
  },
  bioText: {
    fontSize: '20px',
    color: '#374151',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '32px',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
  },
  timelineItem: {
    borderLeft: '4px solid #e5e7eb',
    paddingLeft: '24px',
  },
  timelineTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
  },
  timelineContent: {
    color: '#374151',
    lineHeight: '1.6',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  achievementCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  achievementTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px',
  },
  achievementContent: {
    color: '#374151',
    lineHeight: '1.6',
  },
};

const AboutPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={{position: 'relative'}}>
        <div className='cover' style={{padding: '50px',paddingTop: '250px',minHeight: '1330px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative'}}>

        <div style={{backgroundColor: '',paddingLeft: '20px',paddingRight: '20px', maxWidth: '1975px', }}>

        <h1 style={{fontSize: '80px', fontWeight: 'bold', color: 'black',marginBottom: '50px'}}>As a kid...</h1>
        </div>
        <div style={{display:'flex', flexDirection:'row', padding: '20px', paddingRight: '100px', gap: '50px'}}>

        <p style={{ maxWidth: '2075px',fontWeight: 'bold',lineHeight: "3.5vw", fontSize: '50px', color: 'black', fontFamily: 'Gotham Book'}}>
        I spent the first 10 years of my life being homeschooled by my father
        focusing on business principles and personal growth to apply in the real world.
        </p>
        <OffsetImageGallery  marginTop='-200px' imageUrls={['/about_dad.jpg','/about_kid.jpg',] }></OffsetImageGallery>
        </div>
      </div>
        <div className='cover' style={{display: 'flex', padding: '50px',minHeight: '1679px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition: '21% 33%', position: 'relative',backgroundImage: 'url(/da.png)'}}>

        
        <div style={{display:'flex',  margin: 'auto', flexDirection:'column', height: 'auto',padding: '100px', gap: '50px',
          backgroundColor: '#00000099',maxWidth: '1875px',marginLeft: '140px',marginTop:'auto',marginBottom: '405px'
        }}>
        {/* <img src="/da.jpg" style={{}} width="1000px" height="1000px" ></img> */}
{/* <h1 style={{color: 'white', fontSize: '5vw',  padding: '0', marginTop:'-100px',marginBottom:'-57px'}}>...</h1> */}
        <p style={{ fontWeight: 'bold',lineHeight: "50px", fontSize: '40px', color: 'white', fontFamily: 'Gotham Book'}}>

          When I transitioned into public school, I quickly realized how different traditional education was from what I had been learning.<br /><br />
          My early years in the public school system were challenging. Struggling to focus and facing bullying from peers, I often felt out of place.<br /><br />
        Teachers doubted my potential, and I was told my inability to focus would limit my future.
        
        </p>
        </div>
      </div>

      </div>
          <h2 className='bold' style={{marginBottom: '100px',fontSize: '100px',lineHeight: '55px', fontWeight: 'bold', backgroundColor: 'white', padding: '120px', marginBottom: '0'}}>Restless and eager to create my own path…</h2>
        {/* <p style={{padding: '50px',paddingRight: '75px', fontFamily: 'Gotham Book', fontSize: '24px', lineHeight: '1.25em', paddingLeft: '75px'}}>
        
        </p> */}
          <div style={{padding: '50px',paddingBottom: '250px',color: '#232323',backgroundPosition: 'center',backgroundImage: "url('/hawaii_cover.jpg')",minHeight: '1079px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: '0'}}>
            <h1 style={{fontSize: '80px', fontFamily: 'Gotham Book Bold', fontWeight: '800', padding: '20px'}}>While at the University of Hawaii</h1>

            <Card style={{border: 'none',backgroundColor: '#23232399',boxShadow: '0 2px 5px #0000001a', padding: '50px',marginLeft: '25px',marginTop: '10vh',maxWidth: '1250px'}}>
              <CardContent>
                <p style={{fontWeight: 'bold',lineHeight: "2em", fontSize: '40px', color: 'white', fontFamily: 'Gotham Book', }}>
                As a business major and a D1 athlete, I was constantly stressed about the amount of student loans I had taken out to get my degree. Despite this, I was admitted to the business school early. While balancing athletics and school, I took on a job working as a call center employee for the University as a way to bring in some money for those
                loans. Although I hated the job, within 3 months I raised more for the University than any other employee in the call center ever had. Thinking this would heavily increase in my pay, I was shocked when 6 months later was given an 80 cents raise... I quickly realized that working for someone else would not bring me the fulfillment I was searching for.</p>
              </CardContent>
            </Card>
            <div>
          </div>

            <div>
          </div>

        </div>
        <div style={{padding: '100px', marginBottom: '200px',minHeight: '800px', marginTop: '200px', display: 'flex'}}>
          <p style={{fontSize: '40px', marginTop: '10px', lineHeight: '1.7em', maxWidth: '1620px'}}>
          <h1 style={styles.heroTitle}>At age 20...</h1>
          I joined an affiliate marketing company in the health and wellness industry to pursue part time over the summer. After my poor experience working at the call center, I hoped I could apply my sales skills in order to make enough cash, to avoid a similar summer job.

          </p>
          <OffsetImageGallery maxWidth='500px' marginTop={'-70px'} imageUrls={['/speaking3.jpg','/speaking2.jpg','/speaking1.jpg'] }></OffsetImageGallery>
        </div>
        <div style={{backgroundImage: "url('/stage.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: '20% 40%', backgroundSize: 'cover', padding:'50px', }}>
          <h1 style={{fontSize: '80px', color: 'white', fontFamily: 'Gotham Book Bold',marginTop: '100px'}}>In just 10 months...</h1>
          <Card style={{border: 'none',backgroundColor: '#00000095',boxShadow: '0 2px 5px #0000001a', padding: '50px',marginTop: '20px',maxWidth: '1250px',marginTop: '100px'}}>
              <CardContent>
                <p style={{fontWeight: 'bold',lineHeight: "55px", fontSize: '35px', color: 'white', fontFamily: 'Gotham Book', }}>
                I reached the top 30 income earners in the company out of half a million people. I did this by leading a team of over 10,000 distributors worldwide generating over $30,000,000 in sales revenue.</p>
              </CardContent>
            </Card>
          {/* <Card style={{border: 'none',backgroundColor: '#00000095',boxShadow: '0 2px 5px #0000001a', padding: '50px',marginTop: '20px',maxWidth: '1200px'}}>
              <CardContent>
                <p style={{fontWeight: 'bold',lineHeight: "2.5em", fontSize: '25px', color: 'white', fontFamily: 'Gotham Book', }}>
                <i>For 4 years this unbelievable accomplishment allowed me to…</i>
                </p>
              </CardContent>
            </Card> */}
          <Card style={{border: 'none',backgroundColor: '#00000095',boxShadow: '0 2px 5px #0000001a', padding: '50px',marginTop: '20px',maxWidth: '1250px',marginBottom: '200px'}}>
              <CardContent>
                <p style={{fontWeight: '800',lineHeight: "50px", fontSize: '45px', color: 'white', fontFamily: 'Gotham Book', }}>
                <i >This unbelievable accomplishment allowed me to for 4 years …</i>
                </p>
                <ul style={{paddingLeft: '40px',listStyle: 'disc',fontWeight: 'bold', lineHeight: "65px", fontSize: '27px', color: 'white', fontFamily: 'Gotham Book', paddingTop: '30px' }}>
                    <li>Travel and build business relationships all around the world</li>
                    <li>Consistently speak and train audiences of up to 10,000 people</li>
                    <li>Influence others to build profitable businesses and transition into entrepreneurship</li>
                    <li>Get personalized coaching and mentorship from legends such as,</li>
                    <ul>
                    ● Gary Vaynerchuk
                    ● Bob Proctor
                    ● Darren Hardy
                    ● Les Brown
                    ● Eric Thomas
                    ● and more
                    </ul>
                </ul>
              </CardContent>
            </Card>
        </div>
        <div style={{padding: '50px', marginTop: '200px',display: 'flex', gap: '100px', justifyContent: 'space-between'}}>
          
          <p style={{fontSize: '43px', lineHeight: '1.5em',maxWidth: '1820px', minHeight: '750px', paddingTop: '100px'}}>
          <h1 style={{fontSize: '80px',lineHeight: '1.5em',marginBottom: '10px', marginBottom: '10px'}}>Over the next 10 years…</h1>
            I scaled multiple teams in the direct selling space to 12,000 plus distributors globally with a combined $100+ million in revenue. This allowed me to retire in my 20’s and build my own companies outside of the direct selling industry.</p>
          <OffsetImageGallery maxWidth='900px' marginTop={'-50px'} imageUrls={['/guy.jpg',] }></OffsetImageGallery>
        </div>
        <div style={{padding: '75px', marginTop: '200px', }}>
        <h1 style={{fontSize: '76px',lineHeight: '1.3em'}} className='bold'>Now I live out my passion each day…</h1>
        <p style={{fontSize: '34px', lineHeight: '1.75em',marginTop: '20px', maxWidth: '1920px'}}>As a husband and father, I have been fortunate to not only travel the world but take my family along with me. Giving them memories and moments that they can cherish for a lifetime.</p>
        </div>
        <CountrySlider ></CountrySlider>
        <div style={{padding: '25px', marginTop: '200px',marginBottom: '300px', display: 'flex', gap: '50px'}}>
          
          <p style={{textAlign: 'left', paddingLeft: '50px', lineHeight: '2em', fontSize: '34px', marginTop: '10px',maxWidth: '1700px'}}>
          <h1 style={{color: 'black', fontSize: '76px', lineHeight: '150px'}}>My purpose is simple…</h1>
            To inform, educate and empower others to think for themselves and live a life on their terms. I do this through not just sharing my own results but more importantly all the mistakes and mishaps I made along the way so you can cut the learning curve. I’m not perfect and fail all the time, but my ownership in those failures over the years have allowed me to create some pretty awesome results in the process.</p>
          
          <OffsetImageGallery maxWidth='2000px' marginTop={'-50px'} imageUrls={['/purpose.jpg',] }></OffsetImageGallery>
        </div>
        <Contact></Contact>
        

      {/* Bio Section */}
      {/* <div style={styles.maxWidthWrapper}>
        <Card>
          <CardContent>
            <p style={styles.bioText}>
              Lewis Howes is a New York Times Bestselling author of the hit book, The School of Greatness. 
              A lifestyle entrepreneur, high performance business coach and keynote speaker, his journey is 
              one of transformation and resilience.
            </p>
          </CardContent>
        </Card>
      </div> */}

      {/* Journey Timeline */}
      {/* <div style={styles.maxWidthWrapper}>
        <h3 style={styles.sectionTitle}>The Journey</h3>
        <div style={styles.timelineContainer}>
          <TimelineItem
            title="Early Years in Delaware, Ohio"
            content="Growing up in the small town of Delaware, Ohio, Lewis overcame feeling dumb, 
            lonely, and being bullied in special needs classes by dedicating himself to becoming 
            the best athlete he could be. His father was by his side the whole way, supporting, 
            coaching, and cheering him on."
          />

          <TimelineItem
            title="The Turning Point"
            content="As a senior in college and an All-American athlete, life seemed perfect until 
            tragedy struck. An SUV accident left his father in a coma, dramatically altering the 
            course of his life."
          />

          <TimelineItem
            title="Professional Sports & Injury"
            content="He went on to play Arena Football for one season, but a career-ending injury 
            shattered his identity. Broken and deeply depressed, he found himself sleeping on his 
            sister's couch, questioning his purpose and future."
          />

          <TimelineItem
            title="The Rise of The School of Greatness"
            content="At 29, he launched his podcast/show, The School of Greatness, which started as 
            one interview recorded on an iPhone and grew to over 100 million downloads and 1000 
            episodes since 2013. The podcast became his new touchdown - helping others overcome 
            their challenges and find their greatness."
          />
        </div>
      </div> */}

      {/* Achievements Section */}
      {/* <div style={styles.maxWidthWrapper}> */}
        {/* <h3 style={styles.sectionTitle}>Achievements & Recognition</h3> */}
        {/* <div style={styles.achievementsGrid}>
          <AchievementCard
            title="Media Recognition"
            content="Featured on Ellen, The Today Show, The New York Times, People, Forbes, Inc, 
            Fast Company, ESPN, Sports Illustrated, Men's Health, and other major media outlets."
          />
          <AchievementCard
            title="Presidential Recognition"
            content="Recognized by The White House and President Obama as one of the top 100 
            entrepreneurs in the country under 30."
          />
          <AchievementCard
            title="Best-Selling Author"
            content="New York Times Bestselling author of 'The School of Greatness', sharing wisdom 
            and inspiration with readers worldwide."
          />
          <AchievementCard
            title="Podcast Success"
            content="Created a top 100 iTunes ranked podcast with over 100 million downloads and 
            1000 episodes, inspiring millions globally."
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

const TimelineItem = ({ title, content }) => (
  <div style={styles.timelineItem}>
    <h4 style={styles.timelineTitle}>{title}</h4>
    <p style={styles.timelineContent}>{content}</p>
  </div>
);

const AchievementCard = ({ title, content }) => (
  <div style={styles.achievementCard}>
    <h4 style={styles.achievementTitle}>{title}</h4>
    <p style={styles.achievementContent}>{content}</p>
  </div>
);

export default AboutPage;