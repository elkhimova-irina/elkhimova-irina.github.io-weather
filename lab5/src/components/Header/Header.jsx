
import React from 'react';
import './Header.css';
import Icon from '../../128.gif'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <td className="Fall"><img src={Icon} alt="icon" /></td>
               
                    <p className="Title">Курс Валют</p>
                    
              
                <div className="Auth">
                    <div className="SingIn">Войти</div>
                    <div className="SignUp">Зарегистрироваться</div>
                </div>
            </div>
        );
    }
}

export default Header;