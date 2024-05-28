import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            modi fugit autem ex nihil beatae ipsam ipsa cum. Sunt eos impedit
            ratione, iure doloribus amet alias repellendus unde error non
            deserunt at est, voluptates voluptas fugiat rem natus aperiam nihil
            laudantium odit iste. Quasi provident accusantium cum. Porro
            cupiditate doloribus vero praesentium amet in laboriosam sunt
            voluptate hic consequuntur, non unde sint voluptates a! Possimus
            voluptatibus labore ipsum, eveniet magnam in temporibus culpa fuga
            iure, harum porro vitae earum velit impedit atque eaque omnis eos
            aspernatur id beatae laborum at consequatur dolorum molestias. Ullam
            delectus amet suscipit placeat. Officiis, aspernatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;