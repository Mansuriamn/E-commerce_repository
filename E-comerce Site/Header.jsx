import './Header.css';
import React from 'react';
import { useState } from 'react';
export default function Header({ setClickedChar }) {
  const handleClick = (event) => {
    const char = event.target.innerText;
    setClickedChar(char);
  };

  const [tic, settic] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collect, setCollect] = useState([]);
  const [sign, setsign] = useState(false);

  const handleSignClick = () => {
    setsign(!sign);
    if (!sign) {
      settic(false);
    }
  };

  const handleTicClick = () => {
    settic(!tic);
    if (!tic) {
      setsign(false);
    }
  };

  
  const handleSignIn = (e) => {
    e.preventDefault();
    alert('Create Account');
    setCollect([...collect, { email, password }]);
    settic(false);
    setEmail('');
    setPassword('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = collect.find(u => u.email === email && u.password === password);
    if (user) {
      alert('Match');
    } else {
      alert('No match');
    }
    setsign(false);
    setEmail('');
    setPassword('');
  };


  return <>
    <header className="p-3 text-bg-secondary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white encar">
                MEN
              </a>
              <div className="top">
                <div className="topic">
                  <div>
                    <b>Top Wear</b>
                    <p  onClick={handleClick}>All Top Wear</p>
                    <p  onClick={handleClick}>Tshirts</p>
                    <p  onClick={handleClick}>Shirts</p>
                   
                  </div>
                  <div>
                    <b>Bottum Wear</b>
                    <p  onClick={handleClick}>Track Pants</p>
                    <p  onClick={handleClick}></p>Jeans
                    <p  onClick={handleClick}>Trousers</p>
                 
                  </div>
                  <div>
                    <b  >Men Accesories</b>
                    <p  onClick={handleClick}>All Men Accessories</p>
                    <p  onClick={handleClick}>Watches</p>
                    <p  onClick={handleClick}>Belts</p>
                    <p  onClick={handleClick}>Jewellery</p>
                    <p  onClick={handleClick}>Sunglasses</p>
                     <p  onClick={handleClick}>Bags</p>
                  </div>
                  <div>
                    <b  >Man Footwear</b>
                    <p  onClick={handleClick}>Casual Shoes</p>
                    <p  onClick={handleClick}>Sports Shoes</p>
                    <p  onClick={handleClick}>Sandals</p>
                    <p  onClick={handleClick}>Formal Shoes</p>
                    <p  onClick={handleClick}>CHIFFON SAREES</p>
                  </div>
                  <div>
                    <b  >Ethnic Wear</b>
                    <p  onClick={handleClick}>Men Kurtas</p>
                    <p  onClick={handleClick}>Ethnic Jacket</p>
                    
                  </div>
                  <div>
                    <b >Inner & Sleep Wear</b>
                    <p  onClick={handleClick}>All Inner & Sleep Wear</p>
                    <p  onClick={handleClick}>Vests</p>
                  
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="encar nav-link px-2 text-white">
                WOMEN
              </a>
              <div className="top">
                <div className="topic">
                  <div>
                    <b>Top Wear</b>
                    <p  onClick={handleClick}>Tops</p>
                    <p  onClick={handleClick}>Dresses</p>
                    <p  onClick={handleClick}>Sweaters</p>
                    <p  onClick={handleClick}>Jumpsuits</p>

                  </div>
                  <div>
                    <b>Bottum Wear</b>
                    <p  onClick={handleClick}>Jeans</p>
                    <p  onClick={handleClick}>Jeggings</p>
                    <p  onClick={handleClick}>Shorts</p>
                    <p  onClick={handleClick}>Skirts</p>

                  </div>
                  <div>
                    <b >Innerwear</b>
                    <p  onClick={handleClick}>Bra</p>
                    <p  onClick={handleClick}>Briefs</p>
                   
                  </div>
                  <div>
                    <b  >Steepwear</b>
                    <p  onClick={handleClick}>Nightsuits</p>
                    <p  onClick={handleClick}>Babydolls</p>
                
                  </div>
                 
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="encar nav-link px-2 text-white">
                KIDS
              </a>
              <div className="top">
                <div className="topic">
                  <div>
                    <b>Boy & Girl 2+ Year</b>
                    <p  onClick={handleClick}>Dress</p>
                 
                  </div>
                  <div>
                    <b>Infant 0-2 Year</b>
                    <p  onClick={handleClick}>Rompers</p>
                  

                  </div>
                  <div>
                    <b  >Toy & Accessories</b>
                    <p  onClick={handleClick}>Soft Toy</p>
                    <p  onClick={handleClick}>Foot wear</p>
                    <p  onClick={handleClick}>Stationery</p>
                    <p  onClick={handleClick}>Watches</p>
                    <p  onClick={handleClick}>Back & Backpackes</p>
                   
                  </div>
                  <div>
                    <b  >Bay Care</b>
                    <p  onClick={handleClick}>All Baby Care</p>
                   
                  </div>
                 
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="encar nav-link px-2 text-white">
                BEAUTY
              </a>
              <div className="top">
                <div className="topic">
                  <div>
                    <b>Makeup </b>
                    <p  onClick={handleClick}>Face</p>
                    <p  onClick={handleClick}>Eyes</p>
                    <p  onClick={handleClick}>Lips</p>
                    <p  onClick={handleClick}>Nails</p>

                  </div>
                  <div>
                    <b>Wellness</b>
                    <p  onClick={handleClick}>Sanitizers</p>
                    <p  onClick={handleClick}>Oral Care</p>Jeans
                    <p  onClick={handleClick}>Feminine Hygiene</p>

                  </div>
                  <div>
                    <b >Skin Care</b>
                    <p  onClick={handleClick}>Deodorants</p>
                  
                  </div>
                 
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="encar nav-link px-2 text-white">
                HOME & LIVING
              </a>
              <div className="top">
                <div className="topic">
                  <div>
                    <b>Home Furnishing</b>
                    <p  onClick={handleClick}>Bedsheets</p>
                    <p  onClick={handleClick}>Doormats</p>
                    <p  onClick={handleClick}>Curtains & Sheers</p>
                    <p  onClick={handleClick}>Cushion & Cushion Cover</p>
                    <p  onClick={handleClick}>Mattress Protector</p>

                  </div>
                  <div>
                    <b>Home Decor</b>
                    <p  onClick={handleClick}>All Home Decor</p>
                    <p  onClick={handleClick}>Stickers</p>
                    <p  onClick={handleClick}>Clocks</p>

                  </div>
                  <div>
                    <b  onClick={handleClick}>Men Accesories</b>
                    <p  onClick={handleClick}>All Men Accessories</p>
                    <p  onClick={handleClick}>Watches</p>
                    <p  onClick={handleClick}>Belts</p>
                    <p  onClick={handleClick}>Jewellery</p>
                    <p  onClick={handleClick}>Sunglasses</p>
                     <p  onClick={handleClick}>Bags</p>
                  </div>
                  <div>
                    <b  >Kitchen & Dining</b>
                    <p  onClick={handleClick}>Kitchen Storage</p>
                    <p  onClick={handleClick}>Cookware & Bakeware</p>
                  
                  </div>
                  
                </div>
              </div>
            </li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input onChange={(i)=> setClickedChar(i.target.value)} type="search" className="form-control form-control-dark text-bg-" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="text-end">
            <button onClick={handleSignClick} type="button" className="btn btn-outline-light me-2">Login</button>
            <button onClick={handleTicClick} type="button" className="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>


  <div className={tic && !sign ? 'come go' : 'come'}>
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSignIn}>
        <h1 style={{ marginLeft: '150px' }} className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            style={{ marginTop: '50px' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          style={{ width: '400px', marginLeft: '40px', marginTop: '30px' }}
          className="btn btn-primary py-2"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </main>
  </div>

    <div className={sign && !tic ? 'come go' : 'come'}>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleLogin}>
          <h1 style={{ marginLeft: '150px' }} className="h3 mb-3 fw-normal">Please Login</h1>
          <div className="form-floating">
            <input
              style={{ marginTop: '50px' }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button
            style={{ width: '400px', marginLeft: '40px', marginTop: '30px' }}
            className="btn btn-primary py-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </main>
    </div>
    </>
}
