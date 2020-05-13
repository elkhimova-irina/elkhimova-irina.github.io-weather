import React from 'react';
import './icons.css';
import IconUsd from '../../usa.gif'
import IconEur from '../../euro.gif'
import IconGbp from '../../vel.gif'
import IconSek from '../../shveciya.gif'
import IconChf from '../../sh.gif'
import IconNok from '../../norway.gif'

class icons extends React.Component {

    getIcon() {
        const id = this.props.Id
        switch (id) {
            case "USD":
                return  IconUsd
           case "EUR":
                return IconEur
            case "GBP":
                return IconGbp
            case "SEK":
                return IconSek
            case "CHF":
                return IconChf
            case "NOK":
                return IconNok
            default:
        }
    }

    render() {
        const Name = this.props.Name
        const Id = this.props.Id
        const rub = this.props.rub
        return (
            <tr>
                <td className="Str"><img src={this.getIcon()} alt="icon" /></td>
                <td className="Str">{Name}</td>
                <td className="Str">1 {Id} = {(1 / rub).toFixed(2)} RUB</td>
               
            </tr>
        );
    }
}

export default icons