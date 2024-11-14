function openTablePage(tableId) {
    const table = document.getElementById(tableId);
    const rows = table.innerHTML;
    const imgSrc = table.parentElement.querySelector('img').src;
    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Class Data</title>
<link rel="stylesheet" href="css/classstyle.css">
<link rel="stylesheet" href="css/footerstyle.css" />
</head>

<body>
<!-- Navbar dengan Tombol Back -->
<header class="navbar" id="navbar">
<div class="navbar-container">
    <a href="#" class="navbar-logo">
        <img src="img/skensa_logo.png" alt="Logo" />
        <span>SMKN 1 Denpasar</span>
    </a>
    <button onclick="window.close()" class="back-button">Back</button>
</div>
</header>

<!-- Data Kelas -->
<section class="class-data">
<div class="class-data-content">
    <h2>Data Kelas</h2>

    <div class="class-table">
        <img src="${imgSrc}" alt="Gambar Siswa">
        <table id="data-table">
            ${rows}
        </table>
    </div>
</div>
</section>

<!-- Footer -->
<footer id="footer">
<div class="footer-container">
    <div class="row between main-footer">
        <div class="columns three">
            <div class="footer-logo">
                <img src="img/skensa_logo.png" alt="Logo" />
                <span>SMKN 1 Denpasar</span>
            </div>
            <div class="contactnumber"><img src="img/icon/telephone-icon.png" class="icon-phone"></img>0852 8023
                9768
            </div>
            <p class="copyright">© 2010 - <span id="current-year">2024</span>, SMKN 1 Denpasar.</p>
            <p class="copyright">All rights reserved.</p>
            <ul class="social">
                <li>
                    <a href="#"><img src="img/icon/twitter-icon.png" class="media-icon"></img></a>
                </li>
                <li>
                    <a href="#"><img src="img/icon/facebook-icon.png" class="media-icon"></img></a>
                </li>
                <li>
                    <a href="#"><img src="img/icon/ig-instagram.png" class="media-icon"></img></a>
                </li>
                <li>
                    <a href="#"><img src="img/icon/linkedin-icon.png" class="media-icon"></img></a>
                    </a>
                </li>
            </ul>
        </div>
        <div class="columns three">
            <ul>
                <li class="nav-head">Shortcut</li>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#facility">Facility</a></li>
                <li><a href="#achievement">Achievement</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>
        </div>
        <div class="columns three">
            <ul>
                <li class="nav-head">Support</li>
                <li><a onclick="location.href='contact.html'">Contact</a></li>
                <li>
                    <a href="#">Get Support</a>
                </li>
                <li><a href="#">Location</a></li>
                <li><a href="#">List Of Class</a></li>
            </ul>
        </div>
        <div class="columns three">
            <ul>
                <li class="nav-head">Account</li>
                <li>
                    <a href="#">Create Account</a>
                </li>
                <li>
                    <a href="#">Sign In</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</footer>
</body>

</html>
    `);

    newWindow.document.close();
}