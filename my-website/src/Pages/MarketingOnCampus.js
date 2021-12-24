import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import TextAndGallery from '../Components/TextAndGallery';
import Divider from '../Components/Divider';
import LeftRightContainer from '../Components/LeftRightContainer';
import MyButton from '../Components/MyButton';
import { Icon } from '@iconify/react';
import FramedDiv from '../Components/FramedDiv';


function MarketingOnCampus() {


    const roclab_gallery = [
        {
            itemId: 'roclab-1',
            mediaUrl: 'https://i.ibb.co/Xb9Rb16/roclab-1.png',
            metaData: {
                    type: 'image',
                }
        },
        {
            itemId: 'roclab-2',
            mediaUrl: 'https://i.ibb.co/7CJBpGc/roclab-2.png',
            metaData: {
                    type: 'image',
                }
        },
        { 
            itemId: 'roclab-3',
            mediaUrl: 'https://i.ibb.co/5WPTrdx/roclab-3.png',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'roclab-4',
            mediaUrl: 'https://i.ibb.co/C9vLdKs/roclab-4.png',
            metaData: {
                    type: 'image',
            }
        },
    ]

    const dh_gallery = [
        {
            itemId: 'dh-1',
            mediaUrl: 'https://i.ibb.co/xqLC3GL/dh-1.webp',
            metaData: {
                    type: 'image',
                }
        },
        {
            itemId: 'dh-2',
            mediaUrl: 'https://i.ibb.co/yR1GxRW/dh-2.webp',
            metaData: {
                    type: 'image',
                }
        },
        { 
            itemId: 'dh-3',
            mediaUrl: 'https://i.ibb.co/SQQt5sS/dh-3.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'dh-4',
            mediaUrl: 'https://i.ibb.co/GpgS1Q3/dh-4.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'dh-5',
            mediaUrl: 'https://i.ibb.co/f91QqbN/dh-5.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'dh-6',
            mediaUrl: 'https://i.ibb.co/s982wSC/dh-6.webp',
            metaData: {
                    type: 'image',
            }
        },
    ]

    const hp_gallery = [
        {
            itemId: 'hp-1',
            mediaUrl: 'https://i.ibb.co/QKcCqdw/hp-1.webp',
            metaData: {
                    type: 'image',
                }
        },
        {
            itemId: 'hp-2',
            mediaUrl: 'https://i.ibb.co/3hN1RXJ/hp-2.webp',
            metaData: {
                    type: 'image',
                }
        },
        { 
            itemId: 'hp-6',
            mediaUrl: 'https://i.ibb.co/VJTFhHn/hp-6.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'hp-5',
            mediaUrl: 'https://i.ibb.co/Wswj8Ys/hp-5.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'hp-7',
            mediaUrl: 'https://i.ibb.co/0f8ttLQ/hp-7.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'hp-8',
            mediaUrl: 'https://i.ibb.co/kH7Bj60/hp-8.webp',
            metaData: {
                    type: 'image',
            }
        },
    ]


  return (
    <div>
      <Header>
        <h2>Marketing On Campus</h2>
        <h4>Below are some samples of the marketing and design efforts I've done as part of some organizing teams or clubs on campus.</h4>
      </Header>

      <Content>

            <TextAndGallery
            title="RocLab (2021-2022)"
            description='RocLab is a new campus group that works to connect students to our university departments, in order to work closely and offer students a real-world experience in software development. I just joined as a Co-Marketing Lead, to help create digital content to advertise RocLab, in addition to assisting with the UI/UX design of the software products.'
            images={roclab_gallery}
            buttonText="Visit Instagram"
            buttonHref="https://www.instagram.com/roclab_/"
            />

            <Divider/>

            <TextAndGallery
            title="DandyHacks (2020)"
            description="DandyHacks is the University of Rochester's hackathon and is a fully student-led organization. In 2020 I was part of its marketing team, and we worked together to rebrand DandyHacks, by creating appealing graphics and marketing it globally through social media, since it was an online event that year."
            images={dh_gallery}
            buttonText="Visit Instagram"
            buttonHref="https://www.instagram.com/dandyhacks/"
            />
            
            <Divider/>

            <TextAndGallery
            title="Hult Prize Rochester (2020)"
            description="Hult Prize is a global competition that aims to create social impact. Hult Prize Rochester helps deliver the competition to our campus. As the marketing coordinator, I worked on creating content to promote our events to the students."
            images={hp_gallery}
            />


      </Content>

    </div>
  );
}

export default MarketingOnCampus;
