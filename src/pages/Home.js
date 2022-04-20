import React from 'react';
import Viewed from "../components/Viewed";
import Headline from "../components/Headline";
import Headlines from '../components/Headlines';
import HeadlineDetail from '../components/HeadlineDetail'
import HeadlineDetails from '../components/HeadlineDetails';
import Footer from "../components/Footer";
import NavbarSticky from "../components/NavbarSticky";

const Home = () => {
    return (
        <div className="lg:w-11/12 lg:mx-auto">
            <NavbarSticky />
            <Headline />
            <Headlines />
            <HeadlineDetail />
            <HeadlineDetails />
            <Viewed />
            <Footer />
        </div>
    )
}

export default Home