import styled from 'styled-components';
import logoSrc from '../assets/images/logo.svg';

const Header = () => {
    return (
        <SiteHeader>
            <div className='container'>
                <a href="/">
                    <img src={logoSrc} alt="Filfy Logo" />
                </a>
            </div>
        </SiteHeader>
    )
}

const SiteHeader = styled.header`
    text-align: center;
    padding: 15px;

    img {
        width: 100%;
        max-width: 400px;
    }
`

export default Header;