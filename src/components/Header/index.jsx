import React from "react";
import logo from '../../images/Badge.svg';
import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.container}>
      <div className={ styles.navigation_area }>
				<img src={logo} alt="imagem" />
				<nav >
					<span>
						<a href="default">Create Your Nanny Share</a>
					</span>
					<span>
						<a href="default">Browse Shares</a>
					</span>
					<span>
						<a href="default">Our Story</a>
					</span>
				</nav>
			</div>
			<div className={ styles.login_area }>
				<button className={ styles.btn_become}>Become a Nanny Share Host</button>
				<button className={ styles.btn_login }>Sign In</button>
			</div>
			
    </header>
  );
}

export default Header;
