import { Carousel } from 'react-carousel-minimal';
import pic1 from "./Assets/pic1.JPG";
import pic2 from "./Assets/pic2.jpeg";
import pic3 from "./Assets/pic3.JPG";
import pic4 from "./Assets/pic4.jpeg";
import pic5 from "./Assets/pic5.jpg";
import pic6 from "./Assets/pic6.jpeg";
import './imageGallery.css'

function App() {
 const data = [
    {
      image: pic1,
      caption: ""
    },
    {
      image: pic2,
      caption: ""
    },
    {
      image: pic3,
      caption: ""
    },
    {
      image: pic4,
      caption: ""
    },
    {
      image: pic5,
      caption: ""
    },
    {
      image: pic6,
      caption: ""
    },
    // {
    //   image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //   caption: "San Francisco"
    // },
    // {
    //   image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "Darjeeling"
    // }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <section id = "imageGallery">
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
        <p class="titleText imageGalleryTitle" > Photo Gallery</p>
          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    </section>
  );
}

export default App;