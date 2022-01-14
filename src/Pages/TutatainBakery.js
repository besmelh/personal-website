import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import TextAndGallery from '../Components/TextAndGallery';
import Divider from '../Components/Divider';
import LeftRightContainer from '../Components/LeftRightContainer';
import MyButton from '../Components/MyButton';
import FramedDiv from '../Components/FramedDiv';


function TutatainBakery() {

    
    const branding_gallery = [
        {
            itemId: 'tutatain-logo',
            mediaUrl: 'https://i.ibb.co/MDRWq8q/tutatain-logo.webp',
            metaData: {
                    type: 'image',
                    title: 'sample-title',
                    description: 'sample-description',
                }
        },
        {
            itemId: 'tutatain-animated-logo',
            mediaUrl: 'https://i.ibb.co/4TsMd6x/tutatain-animated-logo.gif',
            metaData: {
                    type: 'image',
                    height: 200,
                    width: 350,
                    title: 'sample-title',
                    description: 'sample-description',
                }
        },
        { 
            itemId: 'tutatain-packaging',
            mediaUrl: 'https://i.ibb.co/qMZ9cwf/tutatain-packaging.webp',
            metaData: {
                    type: 'image',
                    height: 200,
                    width: 250,
                    title: 'sample-title',
                    description: 'sample-description',
            }
        },
        { 
            itemId: 'tutatain-characters',
            mediaUrl: 'https://i.ibb.co/xLV5mBZ/tutatain-character-design.webp',
            metaData: {
                    type: 'image',
                    title: 'sample-title',
                    description: 'sample-description',
            }
        },
    ]


    const photography_gallery = [
        {
            itemId: 'tutatain-matcha-cake',
            mediaUrl: 'https://i.ibb.co/7kcc2wZ/tutatain-matcha-cake.webp',
            metaData: {
                    type: 'image',
                    title: 'Matcha Strawberry Cake',
                }
        },
        {
            itemId: 'tutatain-chocolate-cake',
            mediaUrl: 'https://i.ibb.co/smPfcjn/tutatain-chocolate-cake.webp',
            metaData: {
                    type: 'image',
                    title: 'Chocolate Jam Cake',
                }
        },
        { 
            itemId: 'tutatain-rasberry-cake',
            mediaUrl: 'https://i.ibb.co/hgPRw7C/tutatain-rasberry-cake.webp',
            metaData: {
                    type: 'image',
                    title: 'Raspberry Cake',
            }
        },
    ]

    const src = "https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/tutatain-planet.glb?v=1641945857278"
    const poster = "https://cdn.glitch.global/8ab04539-a012-487a-82a4-7612329b440c/tutatain-planet.png?v=1642120091434"
    const alt = "tutatain bakery planet 3d model"
    const modelDimension = "400px"

  return (
    <div>
      <Header>
        <div className="icon">          
            <model-viewer
            src={src}
            poster={poster}
            alt={alt}
            shadow-intensity="0"
            auto-rotate
            camera-controls
            ar
            style={{height: modelDimension, width: modelDimension}}
            ></model-viewer>
        </div>

        <div>  
            <h2>Tutatain Bakery</h2>
            <h4>Tutatain is a bakery founded by my mother and me in the Summer of 2020. My mother took care of the baking, and I took care of the branding and marketing. We're still a small business, but we hope to expand in the future.</h4>
        </div>
      </Header>

      <Content>

            <TextAndGallery
            title="Branding"
            description='Tutatain means "two berries" in Arabic. The two berries represent my mother and me since we worked together to establish the business. So I decided to play around with that concept and use it in the branding.'
            images={branding_gallery}
            buttonText="Visit Website"
            buttonHref="https://www.tutatain.com/"
            />

            <Divider/>

            <LeftRightContainer>
                <div className='container-small'>
                    <h2>Digital Marketing</h2>
                    <h3>Social Media</h3>
                    <p>Since Instagram is the most common social media platform for businesses, it's currently our main focus. Ocassianly we make TikTok videos to increase traffic.</p>

                    <h3>Content Marketing</h3>
                    <p>Besides pictures of our cakes, we try to attract customers to our account with other content. Example posts include: </p>
                    <ul>
                        <li>Making the perfect cup of matcha</li>
                        <li>Free virtual background</li>
                        <li>Behind the scenes of designing cakes</li>
                    </ul>

                    <MyButton href="https://www.instagram.com/tutatain/">
                        {/* <Icon icon="akar-icons:instagram-fill" /> */}
                        Visit Instagram
                    </MyButton>
                </div>

                <div className='container-medium'>
                    <FramedDiv >
                        <img src="https://i.ibb.co/D5pcQqj/tutatain-instagram.webp" style={{height: "500px", width: "auto"}}/>
                    </FramedDiv>
                </div>

            {/* https://i.ibb.co/D5pcQqj/tutatain-instagram.webp */}
            </LeftRightContainer>
            
            <Divider/>

            <TextAndGallery
            title="Photography"
            description="Below are some of the photographs I've taken of our cakes to showcase across our platforms and use in targeted online marketing."
            images={photography_gallery}
            />

      </Content>

    </div>
  );
}

export default TutatainBakery;
