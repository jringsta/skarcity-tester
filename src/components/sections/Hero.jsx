import {Link, Image} from '@shopify/hydrogen';

export function Hero() {
  return (
    <Link to="/shop">
      <div className="hero-container">
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/fzgzhzy.jpg"
            alt="Star Hoodie"
          />
        </div>

        <Link to="/shop" className="hero-text">
          CLICK TO ENTER
        </Link>
      </div>
    </Link>
  );
}
