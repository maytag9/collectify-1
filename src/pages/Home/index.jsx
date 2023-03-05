import React from "react";
import NavBar from "../../components/NavBar";
import { Layout } from "antd";
import { Carousel } from 'antd';

const { Header } = Layout;

const contentStyle1 = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
};

const contentStyle2 = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
};
const contentStyle3 = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: "url('../../images/movie-covers/equilibrium-1.jpg')",
};
const contentStyle4 = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: "url('../../images/movie-covers/fight_club-1.webp')",
};

const Home = () => {
	return (<>
			<NavBar />
			<Layout>
				<Header>
					<Carousel dots={true}>
						<div>
							<h3 style={contentStyle1}>1</h3>
						</div>
						<div>
							<h3 style={contentStyle2}>2</h3>
						</div>
						<div>
							<h3 style={contentStyle3}>3</h3>
						</div>
						<div>
							<h3 style={contentStyle4}>4</h3>
						</div>
					</Carousel>
				</Header>
		</Layout>
	</>)
};

export default Home;