import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import TextAndGallery from '../Components/TextAndGallery';
import LeftRightContainer from '../Components/LeftRightContainer';
import FramedDiv from '../Components/FramedDiv';
import Divider from '../Components/Divider';

function MaskPouch() {

    
    const storyboards_gallery = [
        {
            itemId: 'mask-pouch-1',
            mediaUrl: 'https://i.ibb.co/q1JxG5t/mask-pouch-1.webp',
            metaData: {
                    type: 'image',
                }
        },
        {
            itemId: 'mask-pouch-2',
            mediaUrl: 'https://i.ibb.co/gv93HXB/mask-pouch-2.webp',
            metaData: {
                    type: 'image',
                }
        },
        {
            itemId: 'mask-pouch-3',
            mediaUrl: 'https://i.ibb.co/VW3s3dV/mask-pouch-3.webp',
            metaData: {
                    type: 'image',
                }
        },
        { 
            itemId: 'mask-pouch-4',
            mediaUrl: 'https://i.ibb.co/xMQXq8j/mask-pouch-4.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'mask-pouch-5',
            mediaUrl: 'https://i.ibb.co/Y8W6r2y/mask-pouch-5.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'mask-pouch-6',
            mediaUrl: 'https://i.ibb.co/C76GfKS/mask-pouch-6.webp',
            metaData: {
                    type: 'image',
            }
        },
        { 
            itemId: 'mask-pouch-7',
            mediaUrl: 'https://i.ibb.co/PjYL7PN/mask-pouch-7.webp',
            metaData: {
                    type: 'image',
            }
        },
    ]

  return (
    <div>
      <Header>
        <h2>Mask Pouch</h2>
        <h4>For our "Design in the Digital Age" class, my team and I worked on the product design of Mask Pouch. We created personas, scenarios, frameworks, and set the visual and physical properties.</h4>
        <h6>This project was made by Team Water for DMS104 - Fall 2020</h6>
      </Header>

      <Content>


            <LeftRightContainer>
                <div className="container-small">
                    <h2>About the product</h2>
                    <p>"Mask Pouch" is a pouch designed to carry your mask and store and clean it in a convenient way. While also staying clean, Mask Pouch enables it's users to also express themselves in a stylish way due it's various color options, and versatile options to wear it. It also aims to be sustainable and uses low-energy UV bulbs to sterilize the masks in it.</p>
                </div>

                <div className="container-medium">
                    <FramedDiv>
                        <img src="https://i.ibb.co/8MVGTdc/mask-pouch-0.webp" alt= {`screenshot of`}/>
                    </FramedDiv>
                </div>


            </LeftRightContainer>

            <Divider/>

            <TextAndGallery
            title="Storyboards"
            description="Here are some of the storyboards created for the product. They furthermore present the product's design, including its hardware and software components."
            images={storyboards_gallery}
            />

      </Content>

    </div>
  );
}

export default MaskPouch;
