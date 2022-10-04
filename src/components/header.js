function Header() {
    return (<>
        <div className="container-fluid header bg-light">
            <div className="row">
                <div className="col-1 justify-content-end d-flex">
                    <a href="https://www.saglik.gov.tr" target="_blanck">
                        <img className="header-logo" src="https://dosyamerkez.saglik.gov.tr/2020webfiles/logolar/logo.svg" />
                    </a>
                </div>
                <div className="col-3 d-flex flex-column justify-content-center">
                    <a className="header-title" href="https://www.saglik.gov.tr" target="_blanck">
                        <span >T.C Sağlık Bakanlığı</span>
                    </a>
                    <span className="fs-5 fw-bold text-secondary">COVİD-19 Bilgilendirme Platformu</span>
                </div>
            </div>
        </div>
    </>);
}

export default Header;