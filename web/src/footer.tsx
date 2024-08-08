import './global.css';
import './footer.css';

interface Props {

}

function Footer({}:Props) {
    
    return (
        <>
        <footer>
            <div className="Fesquerra">

            </div>
            <div className="Fdreta">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="iconInsta"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" className=""></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16" fill="currentColor" color="#ffff" className="iconoMail"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
            </div>
        </footer>
        </>
    );
};

export default Footer;