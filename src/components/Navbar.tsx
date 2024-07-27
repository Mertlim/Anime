import Burger from '../assets/Burger.svg'
import Logo from '../assets/Logo.svg'
import tg from '../assets/telegram.svg'

export const Navbar = () => {
	return (
		<header className='w-full flex justify-center  '>
			<div className='w-[1440px] flex justify-between items-center'>
	    	<div className='flex items-center gap-6'>
			    <button>
		    	  <img src={Burger} alt="#" />
		    	</button>
		    	<div className='flex items-center'>
		  	  	<img src={Logo} alt="#" />
				  	<h1>Anime</h1>
		      </div>
	    		<div className=''>
		    		<input type="text" placeholder='Найти аниме...' />
		    	</div>
		  	</div>
		  	<div>
		  		<div className='flex gap-4'>
			  		<img src={tg} alt="#" />
			  		<button>Войти</button>
			  	</div>
			  </div>
			</div>
		</header>
	)
}
