import React from "react";
import "./LeftBar.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../ThemeUI/globalStyles";
import { lightTheme, darkTheme } from "../../ThemeUI/Theme";
import { useDarkMode } from "../../ThemeUI/useDarkMode";
import Toggle from "../../ThemeUI/Toggle";

function LeftBar() {
  window.onload = function () {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    btn.onclick = function () {
      sidebar.classList.toggle("active");
      if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };
  };

  const [theme, themeToggler, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="sidebar">
          <div className="logo_content">
            <i className="bx bx-menu" id="btn"></i>
          </div>
          <ul className="nav_list">
            <li>
              <a href="#">
                <i class="bx bxs-coin-stack"></i>{" "}
                <span className="links_name">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-pie-chart-alt-2"></i>{" "}
                <span className="links_name">Tokenomics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-report"></i>{" "}
                <span className="links_name">Roadmap</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-rocket"></i>{" "}
                <span className="links_name">Information</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-receipt"></i>
                <span className="links_name">Listings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-component"></i>{" "}
                <span className="links_name">Contact</span>
              </a>
            </li>
          </ul>
          <div className="profile_content">
            <div className="profile">
              <div className="profile_details">
                <img src="profile.jpg" alt="" />
                <div className="name_job">
                  <div className="name">Prem Shahi</div>
                  <div className="job">Web Designer</div>
                </div>
              </div>
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default LeftBar;
