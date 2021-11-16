import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles.jsx";

const Header = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const signOutUser = dispatch(signOutStart());
    
    return(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/about">
                ABOUT
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={signOutUser}>SIGN OUT</OptionDiv> 
                : 
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
    )
}

export default Header;