import { useSelector, useDispatch } from 'react-redux';
import { tooglePage, toogleMenu } from "../redux/ducks/slice";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page}) => {
  const lowerCasePage = page.toLowerCase();
  const selectedPage = useSelector((state) => state.page.selectedPage);
  const dispatch = useDispatch();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => dispatch(tooglePage(lowerCasePage))}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = () => {
  const isMenuToggled = useSelector((state) => state.page.isMenuToggled);
  const isTopOfPage = useSelector((state) => state.page.isTopOfPage);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();

  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">DZ</h4>

        
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              
            />
            <Link
              page="Skills"
              
            />
            <Link
              page="Projects"
            
            />
            <Link
              page="Testimonials"
             
            />
            <Link
              page="Contact"
           
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => dispatch(toogleMenu(!isMenuToggled))}
          >
            <img alt="menu-icon" src="assets/menu-icon.svg" />
          </button>
        )}

       
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            
            <div className="flex justify-end p-12">
              <button onClick={() => dispatch(toogleMenu(!isMenuToggled))}>
                <img alt="close-icon" src="assets/close-icon.svg" />
              </button>
            </div>

          
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                
              />
              <Link
                page="Skills"
             
              />
              <Link
                page="Projects"
               
              />
              <Link
                page="Testimonials"
               
              />
              <Link
                page="Contact"
                
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;