/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip } from '@mui/material';
import './itemCard.css';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Rating from '@mui/material/Rating';

function ItemCard(props) {
  const { ele } = props;
  const { title, category, images, price } = ele;
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    console.log('cart clicked');
  };

  return (
    <>
      <Card className="individual-card">
        <CardActionArea
          className="item-card"
          onClick={() => console.log('card clicked')}
        >
          <CardMedia
            component="img"
            height="250px"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            image={hovered ? images[1] : images[0]}
            alt={title}
          />
        </CardActionArea>
        <CardContent className="card-content">
          <Typography
            gutterBottom
            component="p"
            display="flex"
            justifyContent="space-between"
          >
            <span>{title}</span>
            <span className="category">{category.name}</span>
          </Typography>
          <div>
            <Rating name="read-only" value={4} readOnly />
          </div>
          <Typography
            variant="body2"
            color="text.primary"
            component="p"
            className="price-cart"
          >
            <span>${price}</span>
            <span>
              <Tooltip title="Add to cart">
                <ShoppingCartIcon
                  className="cart-icon"
                  onClick={handleAddToCart}
                />
              </Tooltip>
            </span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ItemCard;
