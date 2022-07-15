const MainHeader = () => {
    
    const HeaderStyle = {
        'display': 'grid',
        'gridTemplateColumns': '200px auto 200px',
        'gap' : '10px',
        'backgroundColor' : "white",
        'height': "100px",
        'padding': "10px 10%"
    }

    const BtnStyle = {
        'display': 'inline-block',
        'padding': '9.5px 28px',
        'borderRadius': '50px',
        'backgroundColor': '#ff6426',
        'fontSize': '14px',
        'fontWeight': '400',
        'color': '#fff',
        'transition': '0.5s',
        'textTransform': 'capitalize',
        'border': '2px solid transparent',
        'textDecoration': 'none',
        'marginTop': 'auto',
        'marginBottom': 'auto'
    }

    return (
        <>
            <div style={HeaderStyle}>
                <div style={{display: "block", margin:"auto"}}>
                    <img src="https://technext.github.io/dingo/img/logo.png" style={{width: "153px", height: "63px", margin: "auto"}} />
                </div>
                <div className="nav" style={{display: "block"}}>
                    <ul>
                        <li><a href="#news">News</a></li>
                        <li><a href="#home">Home</a></li>
                    </ul>
                </div>
                <div style={{display: "block", margin: "auto"}}>
                    <a style={BtnStyle}>Book A Table</a>
                </div>
            </div>
        </>
    )
}

export default MainHeader;