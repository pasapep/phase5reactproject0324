import React, {useState, useEffect, Component} from "react";
import { Menu, Container } from "semantic-ui-react";

function NavBar() {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const onToggleDarkMode =() => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    const textButton = isDarkMode ? "Light Mode" : "Dark Mode";


    return (
        <div className = "App"> 
            <Menu borderless fluid inverted size = "huge" style={{ textAlign: 'center' }}>
                <Container>
                    <Menu.Item header as = "a" href = "/" style = {{color: "yellow"}}>
                        Home
                    </Menu.Item>
                    <Menu.Item header as = "a" href = "/progress" style = {{color: "yellow"}}>
                        Progress
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}

export default NavBar;