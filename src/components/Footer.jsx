import './Footer.scss'

function Footer(){
    return(
        <section className="footer">
            <div className="footer-top">
                <h2>Newsletter</h2>
                <form id="form" action=""  method="get">
                    <input  id="email" type="email" placeholder="enter your email" />
                    <input type="submit" value="Subscribe" id="submit"/>
                </form>
            </div>
            <div className="footer-bot">
            <a href="#">About</a>
            <a href="#">Store locator</a>
            <a href="#">FAQs</a>
            <a href="#">News</a>
            <a href="#">Careers</a>
            <a href="#">Contact us</a>
            </div>
        </section>
    )


}

export default Footer