const OpenLink = ({ redirectURL, logoImage})=> {
    return (
         <div>
            <a href={redirectURL} target="_blank">
              <img src={logoImage} className="logo github" alt="Github logo" />
            </a>
         </div>
    );
};

export default OpenLink;