import React from 'react';
import { browseRoute } from 'react-router-dom';
import '../App.css';

class WelcomePage extends React.Component {
	render() {
		return (
			<div className="HeaderWelcomePage">
				<div id="TheMainHello">
					<h1 className="TitlesS">Welcome to TAFRAN</h1>
					<img
						className="Img"
						src="https://i.pinimg.com/originals/6b/1a/e2/6b1ae29eecf24e0e046e51293891bb20.jpg"
					/>

					<div className="AlUsers">
						<h1 className="HI">
							<i id="UserTi" class="fas fa-user-tie" />
							<p className="Para">
								{' '}
								<h1>Restaurnts Owners</h1>Your Restaurnt will Be Exposse To thousands of people every
								day and You can get benefit from this to get new customers and make your busness biger.
								Whate the requirements to get your restarunt accsepted All You need to have is good
								restarunt and have a good customer servers and our team will come to you to check every
								thing and you will be accsepted
							</p>
							<button className="Buu">
								<a href="http://localhost:3000/registered">Register</a>
							</button>
						</h1>

						<h1 className="HI">
							<i id="UserTi1" class="fas fa-user" />
							<p className="Para" id="NormalUser">
								{' '}
								<h1>Normal User</h1>This App Is to Make your life Easy when You order food You just Put
								in How much you want to eat and we will take care of the rest we will give you famous
								restaurnts and none famous restaurnt how have meals under your Budget and You will pick
								Your favorite
							</p>
							<button className="Buu" id="Start">
								<a href="http://localhost:3000/home">START NOW</a>
							</button>
						</h1>
						<div className="Reviws">
							<p className="Para">
								{' '}
								<h1>Koel Ganguly</h1>Hands down the best food I had in Jordan. We went with friends
								while visiting Amman and the whole experience was just great. Every item was delicious
								and quantity was huge. We ordered various selection of appetizers. The customer service
								was so very warm and friendly. The restaurant has a very warm welcoming decor.
							</p>

							<p className="Para">
								{' '}
								<h1>Sinisa Belina</h1>I loved the food. Service was great, nice and peaceful atmosphere
								- all you need to enjoy a good meal is available here.
							</p>

							<p className="Para">
								{' '}
								<h1>mohammad Gmal</h1>best service and food. i highly reccomend it
							</p>

							<p className="Para">
								{' '}
								<h1>Khaled Kurdi</h1>Tannoureen has always been a family favorite when it comes to
								Lebanese cuisine.. The falafel are still as Yummy as I remember and the kubbeh niyyeh is
								outstanding with the garlic paste and onions.The shish kebab, meat, chicken and minced
								meat are yummy... If you want tasty food go there. The ambiance us very nice although on
								the noisy side, so this makes it a place were you can have loud conversations rather
								than a romantic dinner..enjoy.
							</p>
						</div>
					</div>
				</div>
				{/* DONE */}
			</div>
		);
	}
}

export default WelcomePage;
