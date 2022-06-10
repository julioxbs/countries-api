import React from 'react'
import { MoonOutline } from 'react-ionicons'
import { ThemeContext } from '../Context/ThemeContext'

export const Navbar = () => {
    const { isDark, toggleTheme } = React.useContext(ThemeContext);

    React.useEffect(() => {
        document.body.classList.toggle('darkMode', isDark);
    }, [isDark]);

    return (
        <header>
            <div className="container">
                <nav>
                    <h3>Where in the world?</h3>

                    <div className='theme' onClick={toggleTheme}>
                        <MoonOutline
                        color={isDark ? '#fff' : '#000'}
                        height={'20px'} 
                        width={'20px'} />
                        
                        <span>Dark Mode</span>
                    </div>
                </nav>
            </div>
        </header>
    )
}