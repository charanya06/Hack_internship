import React, { useState } from "react";
import HomePage from "./homePage";
import HeaderComponent from "./headerComponent";
import LibraryPage from "./libraryPage";
import ContributePage from "./contributePage";
 

const MainPage = () => {
  const [activePage, setActivePage] = useState(0);

  const handleActivePage = (val) => {
    setActivePage(val);
  };

  return (
    <div>
      <HeaderComponent activePage={activePage} handleActivePage={handleActivePage} />
      {activePage === 0 && <HomePage />}
      {activePage === 1 && <LibraryPage />}
      {activePage === 2 && <ContributePage />}
    </div>
  );
};

export default MainPage;
