import useCart from "../hooks/useCart";

type FooterPropsType = {
  viewCart: boolean,
}

const Footer = ({viewCart}: FooterPropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart 
          ? <p>Shopping Cart &copy;</p>
          : (
            <>
              <p>Total Items: { totalItems }</p>
              <p>Total Price: { totalPrice }</p>
              <p>Shopping Cart &copy; { year }</p> 
            </>
          );

  const content = (
    <footer className="footer">
      { pageContent }
    </footer>
  );
  
  return content;
}

export default Footer;