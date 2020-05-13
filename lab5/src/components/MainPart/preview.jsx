import React from 'react';
import './preview.css';
import Icon from '../icons/icons'

class Preview extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            json: {},
        }
    }

    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest?base=RUB")
            .then(response => response.json())
            .then(result => this.setState({
                isLoaded: true,
                json: result,
            }));
    }

    render() {
        const isLoaded = this.state.isLoaded;
        if (!isLoaded)
            return (<></>)
        else {
            const values = this.state.json.rates
            return (
                <table className="Preview">
                    <tbody>
                       <Icon Id="USD" rub={values.USD} Name="Доллар США" />  
                        <Icon Id="EUR" rub={values.EUR} Name="Евро" />
                        <Icon Id="GBP" rub={values.GBP} Name="Фунт стерлингов" />
                        <Icon Id="SEK" rub={values.SEK} Name="Шведская крона" />
                        <Icon Id="CHF" rub={values.CHF} Name="Швейцарский франк" />
                        <Icon Id="NOK" rub={values.NOK} Name="Норвежская крона" />
                    </tbody>
                </table>
            );
        }
    }
}
export default Preview