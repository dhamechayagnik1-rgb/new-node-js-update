
import './adminmain.css'

function AdminMain() {
    return (
        <>
            <div class="admin-layout">

               
                <aside class="sidebar">

                    <div class="logo">
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>MyStore</span>
                    </div>

                    <nav class="sidebar-menu">

                        <a href="#" class="menu-item active">
                            <i class="fa-solid fa-border-all"></i>
                            <span>Dashboard</span>
                        </a>

                        <a href="#" class="menu-item">
                            <i class="fa-regular fa-user"></i>
                            <span>Users</span>
                        </a>

                        <a href="#" class="menu-item">
                            <i class="fa-solid fa-cube"></i>
                            <span>Products</span>
                        </a>

                        <a href="#" class="menu-item">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>Orders</span>
                        </a>

                        <a href="#" class="menu-item">
                            <i class="fa-solid fa-chart-column"></i>
                            <span>Reports</span>
                        </a>

                        <a href="#" class="menu-item">
                            <i class="fa-solid fa-gear"></i>
                            <span>Settings</span>
                        </a>

                    </nav>

                </aside>


 
                <main class="main-content">

                    <header class="topbar">

                        <div class="search-box">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text"
                                placeholder="Search orders, users"/>
                        </div>

                        <div class="admin-profile">

                            <i class="fa-regular fa-bell notification"></i>

                            <div class="admin-avatar">
                                AD
                            </div>

                            <span>Admin</span>

                        </div>

                    </header>


                    <section class="dashboard">

                        <div class="page-title">
                            <h1>Dashboard</h1>
                            <p>Aaj ka overview</p>
                        </div>



                        <div class="stats-container">

                            <div class="stat-card">
                                <p>Total users</p>
                                <h2>12,480</h2>
                                <span class="positive">+8.2%</span>
                            </div>

                            <div class="stat-card">
                                <p>Orders</p>
                                <h2>1,254</h2>
                                <span class="positive">+3.1%</span>
                            </div>

                            <div class="stat-card">
                                <p>Revenue</p>
                                <h2>₹4.8L</h2>
                                <span class="positive">+12%</span>
                            </div>

                            <div class="stat-card">
                                <p>Pending</p>
                                <h2>37</h2>
                                <span class="negative">-2.4%</span>
                            </div>

                        </div>



                        <div class="dashboard-grid">

                            <div class="dashboard-card revenue-card">

                                <h3>Weekly revenue</h3>

                                <div class="chart">

                                    <div class="bar-wrapper">
                                        <div class="bar bar-1"></div>
                                        <span>Mon</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-2"></div>
                                        <span>Tue</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-3"></div>
                                        <span>Wed</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-4"></div>
                                        <span>Thu</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-5 active-bar"></div>
                                        <span>Fri</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-6"></div>
                                        <span>Sat</span>
                                    </div>

                                    <div class="bar-wrapper">
                                        <div class="bar bar-7"></div>
                                        <span>Sun</span>
                                    </div>

                                </div>

                            </div>



                            <div class="dashboard-card orders-card">

                                <div class="card-header">
                                    <h3>Recent orders</h3>
                                    <a href="#">View all</a>
                                </div>

                                <div class="table">

                                    <div class="table-header">
                                        <span>Order</span>
                                        <span>Customer</span>
                                        <span>Amount</span>
                                        <span>Status</span>
                                    </div>


                                    <div class="table-row">
                                        <span>#1042</span>
                                        <span>Rahul Patel</span>
                                        <span>₹1,200</span>
                                        <span>
                                            <b class="status delivered">
                                                Delivered
                                            </b>
                                        </span>
                                    </div>


                                    <div class="table-row">
                                        <span>#1041</span>
                                        <span>Priya Shah</span>
                                        <span>₹850</span>
                                        <span>
                                            <b class="status pending">
                                                Pending
                                            </b>
                                        </span>
                                    </div>


                                    <div class="table-row">
                                        <span>#1040</span>
                                        <span>Amit Mehta</span>
                                        <span>₹2,400</span>
                                        <span>
                                            <b class="status shipped">
                                                Shipped
                                            </b>
                                        </span>
                                    </div>


                                    <div class="table-row">
                                        <span>#1039</span>
                                        <span>Neha Joshi</span>
                                        <span>₹640</span>
                                        <span>
                                            <b class="status cancelled">
                                                Cancelled
                                            </b>
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>
        </>
    )
}
export default AdminMain