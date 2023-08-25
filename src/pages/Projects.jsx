import Img1 from '../images/screenshot1'
import Img2 from '../images/screenshot2'
import './App.css'



export default function Projects() {
  const images = [Img1, Img2]
  return (
    <div className="App">
      <div className="image-container">
        {
          images.map((image) =>
            // eslint-disable-next-line react/jsx-key
            <div className='image'>
              <img src={image} alt="" />
            </div>
          )
        }
      </div>
    </div>

  );
}