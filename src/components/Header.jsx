import HeaderImg from '../assets/investment-calculator-logo.png';

export default function Header(){
    return <header id='header'>
        <img src={HeaderImg} alt='logo of money bank'></img>
        <h1>Investment Calculator</h1>

    </header>
}