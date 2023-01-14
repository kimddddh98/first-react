function HeaderTest(props) {
    return (<header>
        <div id="logo">
                <img src={props.src} alt="logo"/>
        </div>
        <div id="search">
            <div id="click_search"></div>
            <div id="click_menu"></div>
        </div>
    </header>)
}

export default HeaderTest