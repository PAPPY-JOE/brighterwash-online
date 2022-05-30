import React from "react";
import "../assets/Index.css";
import {  useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import EmojiPeopleRoundedIcon from "@material-ui/icons/EmojiPeopleRounded";
import LocalLaundryServiceRoundedIcon from "@material-ui/icons/LocalLaundryServiceRounded";
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";
import AlarmOnRoundedIcon from "@material-ui/icons/AlarmOnRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import BeenhereIcon from "@material-ui/icons/Beenhere";

function Index() {
  const navigate = useNavigate();

  const clean = (e) => {
    e.preventDefault();
    navigate("/clean#");
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__box">
          <h2>Enjoy a better cleaning experience</h2>
          <p>
            Brighter Wash, Exclusive Dry-Cleaning - Making your life Better and
            Cleaner
          </p>
          <Button className="clean__button" onClick={clean}>
            Clean Now
          </Button>
        </div>
      </div>

      {/* Block 2 */}

      <div className="block__2">
        <div className="b2__box box__1">
          <h1>1</h1>
          <PhoneIphoneRoundedIcon className="b2__Icons" />
          <h2>You Order</h2>
          <h3>Don't hesitate to make your orders right now!</h3>
        </div>
        <div className="b2__box box__2">
          <h1>2</h1>
          <EmojiPeopleRoundedIcon className="b2__Icons" />
          <h2>We Recieve</h2>
          <h3>At your scheduled time, and at your most convenient place </h3>
        </div>
        <div className="b2__box box__3">
          <h1>3</h1>
          <LocalLaundryServiceRoundedIcon className="b2__Icons" />
          <h2>We Clean</h2>
          <h3>We treat your garments to a high quality clean</h3>
        </div>
        <div className="b2__box box__4">
          <h1>4</h1>
          <LocalShippingRoundedIcon className="b2__Icons" />
          <h2>We Deliver</h2>
          <h3>We’ll deliver back to you, when you want</h3>
        </div>
      </div>

      {/* Technically Block 3 */}

      <div className="block__4">
        <div className="block__header b4">
          <h2>
            Our Services <i></i>
          </h2>
        </div>

        <div className="services">
          <ul>
            <li>
              <BeenhereIcon className="approved" />
              <p>
                <b>E</b>xpress <b>L</b>aundry
              </p>
            </li>
            <li>
              {" "}
              <BeenhereIcon className="approved" />
              <p>
                {" "}
                <b>O</b>n-demand <b>P</b>ickup
              </p>
            </li>
            <li>
              <BeenhereIcon className="approved" />
              <p>
                <b>I</b>ndustrial & <b>R</b>esidential <b>C</b>leaning
              </p>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <BeenhereIcon className="approved" />{" "}
              <p>
                <b>Z</b>ero <b>C</b>ontact <b>H</b>ome <b>D</b>elivery
              </p>
            </li>
            <li>
              <BeenhereIcon className="approved" />
              <p>
                <b>P</b>lain <b>W</b>ashing
              </p>
            </li>
            <li>
              <BeenhereIcon className="approved" />
              <p>
                <b>E</b>xecutive <b>S</b>tarching and <b>I</b>roning
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Block 3 but technically Block 4 */}

      <div className="block__3">
        <div className="block__header b3">
          <h2>
            Why Brighter Wash? <i></i>
          </h2>
        </div>
        <div className="main__block m3">
          <div className="b3__box">
            <LocalAtmRoundedIcon className="b2__Icons green" />
            <h3>Budget Friendly</h3>
            <p>
              With Brighter Wash, you don't have to spend too much before your
              garments get the executive treatments they deserve!
            </p>
          </div>
          <div className="b3__box">
            <AlarmOnRoundedIcon className="b2__Icons blue" />
            <h3>Time Saving</h3>
            <p>
              We do the runs for you, collecting and delivering at your doorstep
              - just in time, so you can have more time to spare.
            </p>
          </div>
          <div className="b3__box">
            <DoneOutlineRoundedIcon className="b2__Icons green" />
            <h3>Excellence</h3>
            <p>
              We use environmental friendly solvents, world-class quality
              control processes and seasoned experts in handing your garments,
              Brighter Wash offers best in its class service.
            </p>
          </div>
        </div>
      </div>
      <div className="block__5">
        <div className="block__header b5">
          <h2>
            Top 5 Customer Reviews <i></i>
          </h2>
        </div>

        <div className="reviews__container">
          {/* Box 1 */}

          <div className="reviews__box">
            <div className="box__header">
              <div className="overlay"></div>
              <h4>Engr. John Obi</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbgHkFWrF6ErWGDRHvGsAw3cLNRdBKP7C8jQ&usqp=CAU" />
            </div>
            <div className="box__body">
              <p>
                Brighter Wash does my laundry for me, picking them up and also
                delivering to my doorstep, this makes living so much easier for
                me as I have more time for other things.
              </p>
            </div>
          </div>

          {/* Box 2 */}

          <div className="reviews__box">
            <div className="box__header">
              <div className="overlay"></div>
              <h4>Miss. Janeth Okafor</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqqfHAH8mG2h_b0SFJ-K3VM0pLtZivl7eHww&usqp=CAU" />
            </div>
            <div className="box__body">
              <p>
                Brighter Wash is my plug for cleaning my house and my clothes.
                They are so coordinated and efficient, and are also pocket
                friendly in their charges!
              </p>
            </div>
          </div>

          {/* Box 3 */}

          <div className="reviews__box">
            <div className="box__header">
              <div className="overlay"></div>
              <h4>Alh. Yahya</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVYN08iw_3ESuVdAUS5I7pc9X1mgU0QkmE8Q&usqp=CAU" />
            </div>
            <div className="box__body">
              <p>
                Life as a grandparent has been so easy for me because Brighter
                Wash do all my cleaning for me. I also introduced them to my
                friends and they've all said the same.
              </p>
            </div>
          </div>

          {/* Box 4 */}

          <div className="reviews__box">
            <div className="box__header">
              <div className="overlay"></div>
              <h4>Mr. Johnson Ake</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
              <img src="https://www.bing.com/th?id=OIP.NJkf84vjWpPlktvZRI8FUwHaHs&w=196&h=204&c=8&rs=1&qlt=90&dpr=1.56&pid=3.1&rm=2" />
            </div>
            <div className="box__body">
              <p>
                I am a banker and a very busy one, however, it doesn't stop me
                from having my clothes neatly cleaned and ironed just the way I
                like them, because of Brighter Wash. They also do a good job
                whenever I ask for home cleaning.
              </p>
            </div>
          </div>

          {/* Box 5 */}

          <div className="reviews__box">
            <div className="box__header">
              <div className="overlay"></div>
              <h4>Madam Bola Ige</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
              <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/26/20/Nigeria.jpg?quality=75&width=982&height=726&auto=webp" />
            </div>
            <div className="box__body">
              <p>
                They did a great job. I don’t get my house cleaned so this was
                all new to me — they made it easy and I am thrilled to have the
                help — and thrilled to have a little more time to hang out with
                my family instead of cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
