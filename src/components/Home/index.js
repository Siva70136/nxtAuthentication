// Write your JS code here
import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="data-container">
      <h1 className="head">Clothes That Get YOU Noticed</h1>
      <p className="description">
        Fashion is part of the daily air and it does not quite help that it
        changes all the time. Clothes have always been a marker of the era an
        been seen and heard that way a revolution. Your fashion are. So,
        celebrate the seasons new and exciting fashion in your own way.
      </p>
      <div>
        <button type="button" className="button">
          Shop Now
        </button>
      </div>
    </div>
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="img"
      />
    </div>
  </div>
)

export default Home
