export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const gif1 = objGifPro.gif1,
          gif2 = objGifPro.gif2,
          gif3 = objGifPro.gif3,
          gif4 = objGifPro.gif4,
          gif5 = objGifPro.gif5,
          gif6 = objGifPro.gif6,
          gif7 = objGifPro.gif7;

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https://t.me/gibbycto" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/gibbycto" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://raydium.io/swap/Hdt68n4uzAZzy1C6YJjo5Qb1hj6QNwEzb44w7Lp5pump" target="_blank"><img src={ray} alt="raydium buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/Hdt68n4uzAZzy1C6YJjo5Qb1hj6QNwEzb44w7Lp5pump" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/solana/Hdt68n4uzAZzy1C6YJjo5Qb1hj6QNwEzb44w7Lp5pump" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, Welcome to $GIBBY's World!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="Gibby official Logo"></img>
                        </span>
                    </div>
                    <h4>Give me a hug</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>Hdt68n4uzAZzy1C6YJjo5Qb1hj6QNwEzb44w7Lp5pump</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            Why did the calm dog invest in $Gibby?
                            He heard about barking opportunities.
                            Wanted to fetch some digital bones.
                            Said "Just HODL on!" to his anxious friends.
                            Diversified into $Gibby, $Gibby, & $Gibby.
                            Stayed calm, secured his treasure, and napped!
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            <a href="https://dexscreener.com/solana/Hdt68n4uzAZzy1C6YJjo5Qb1hj6QNwEzb44w7Lp5pump" target="_blank">Buy $GIBBY</a> 
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $Gibby. $Gibby is cute af.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif1} alt="Gibby pic"></img>
                        </span>
                        <span>
                            <img src={gif3} alt="Gibby pic"></img>
                        </span>
                        <span>
                            <img src={gif4} alt="Gibby pic"></img>
                        </span>
                        <span>
                            <img src={gif5} alt="Gibby pic"></img>
                        </span>
                        <span>
                            <img src={gif6} alt="Gibby pic"></img>
                        </span>
                        <span>
                            <img src={gif7} alt="Gibby pic"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 GIBBY. All rights reserved.</p>
            </footer>
        </div>
    );
}
