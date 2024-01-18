import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import History from "@/src/components/History";


import { boston } from "@/src/utils";
import { Fragment, useEffect } from "react";
const Index = () => {
  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
  }, []);

  return (
    <Fragment>
      
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        <History />
       
       
       
        {/* End Contact Section */}
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </Fragment>
  );
};
export default Index;
