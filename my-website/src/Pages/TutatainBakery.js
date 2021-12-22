import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import Gallery from '../Components/Gallery';
import TextAndGallery from '../Components/TextAndGallery';

function TutatainBakery() {

        // Add your images here...
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
                        title: 'sample-title',
                        description: 'sample-description',
                    }
            },
            { 
                itemId: 'tutatain-packaging',
                mediaUrl: 'https://i.ibb.co/qMZ9cwf/tutatain-packaging.webp',
                metaData: {
                        type: 'image',
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

  return (
    <div>
      <Header>
        <h2>Tutatain Bakery</h2>
        <h4>Tutatain is a bakery founded by my mother and me in the Summer of 2020. My mother took care of the baking, and I took care of the branding and marketing. We're still a small business, but we hope to expand in the future.</h4>
      </Header>

      <Content>
            {/* <h3>Branding</h3>
            <p>Tutatain means "two berries" in Arabic. The two berries represent my mother and me since we worked together to establish the business. So I decided to play around with that concept and use it in the branding.</p>
            <Gallery
            width={600}
            height={200}
            items={branding_gallery}
            />
             */}

            <TextAndGallery
            title="Branding"
            description='Tutatain means "two berries" in Arabic. The two berries represent my mother and me since we worked together to establish the business. So I decided to play around with that concept and use it in the branding.'
            images={branding_gallery}
            buttonText="Visit Website"
            buttonHref="https://www.tutatain.com/"
            />
      </Content>

    </div>
  );
}

export default TutatainBakery;
