import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function Sidebar() {
  const [active, setActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column bg-dark py-3 ps-3 pe-5 vh-100">
      <div>
        <a href="#" className="p-3 text-decoration-none text-white">
          <i className="bi bi-speedometer2 me-3 fs-5"></i>
          <span className="fs-3">Hylesoin</span>
        </a>
        <hr className="text-secondary mt-2" />
        <ul className="nav nav-pills flex-column mt-3">
          <li
            className={
              active === 1 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(1)}
          >
            <span className="p-1">
              <i className="bi bi-speedometer2 me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Dashboard</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 2 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(2)}
          >
            <span className="p-1">
              <i class="bi bi-cassette me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Assets</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 3 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(3)}
          >
            <span className="p-1">
              <i class="bi bi-graph-up me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Trade</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 4 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(4)}
          >
            <span className="p-1">
              <i class="bi bi-credit-card-2-front me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Pay</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 5 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(5)}
          >
            <span className="p-1">
              <i class="bi bi-send me-3 fs-4"></i>
              <span className="fs-4">
                <strong>For You</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 6 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(6)}
          >
            <span className="p-1">
              <i class="bi bi-calendar-event me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Invite Friends</strong>
              </span>
            </span>
          </li>
          <li
            className={
              active === 7 ? "active nav-item p-2 m-1" : "nav-item p-2 m-1"
            }
            onClick={(e) => setActive(7)}
          >
            <span className="p-1">
              <i class="bi bi-gear me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Settings</strong>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
