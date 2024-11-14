document.addEventListener("DOMContentLoaded", () => {
    const profileButtons = document.querySelectorAll(".teacher-card button");

    const teachers = {
        'Ni Komang Dian Dianasari, ST.': {
            imgSrc: 'img/profile/bu-dian.jpg',
            nip: '198505102023212045',
            description: 'Buk Dian adalah guru pembimbing yang metode pembelajarannya cukup mudah dimengerti, beliau juga orang yang murah senyum dan sabar mendidik murid-muridnya.',
            instagram: 'https://www.instagram.com/dian.diana.s?igsh=MWE1YmxnYXJ2c3pkaQ=='
        },
        'Dewa Ayu Putri Suharsiki, S.Kom.': {
            imgSrc: 'img/profile/bu-putri.jpg',
            nip: '198403212014062006',
            description: 'Buk Putri adalah guru yang di setiap pembelajarannya selalu memberikan free time, tetapi beliau adalah guru yang selalu mengiinkan murid nya mandiri.',
            instagram: 'https://www.instagram.com/putrisuharsiki?igsh=MWJpM3gyaDIzbjVkMA=='
        },
        'Pratyaksa Kepakisan, S.Pd. S.Kom.M.Pd.': {
            imgSrc: 'img/profile/pak-pras.jpg',
            nip: '197007291994121001',
            description: 'Pak Pras adalah guru yang sudah berumur, tetapi semangat beliau untuk mendidik murid-muridnya tidak pernah padam.',
            instagram: 'https://www.instagram.com/pratyaksa_kepakisan?igsh=bmJwaWUyejg1M2Jr'
        },
        'I Putu Oka Sukayasa, S.ST.': {
            imgSrc: 'img/profile/pak-oka.jpg',
            nip: '-',
            description: 'Pak Oka adalah salah satu guru pembimbing yang suka bercanda di setiap pertemuannya, beliau adalah orang yang asik.',
            instagram: '#'
        },
        'Ida Bagus Rady Santiawan': {
            imgSrc: 'img/profile/pak-redy.jpg',
            nip: '199101062024211010',
            description: 'Pak Redy salah satu guru yang pembelajarannya sangat cepat untuk dimengerti, beliau memiliki metode pembelajaran yang cukup efektif.',
            instagram: 'https://www.instagram.com/goesredy?igsh=MWNrdnMzY3MxcDMxeA=='
        },
        'Kadek Unggah Adi Nope, S.PD.': {
            imgSrc: 'img/profile/pak-unggah.jpg',
            nip: '-',
            description: 'Pak Unggah adalah guru yang mempunyai metode pelajaran yang to the point, beliau orangnya tegas. Tetapi di selah selah pembelajaran beliau sebenarnya orang suka bercanda.',
            instagram: 'https://www.instagram.com/unggahh?igsh=MTA3bzBpaDQweWs3ZQ=='
        },
        'Pande Made Mahendri Pramadewi, Pd.': {
            imgSrc: 'img/profile/bu-mahendri.jpg',
            nip: '199211052014022001',
            description: 'Buk Made beliau, mungkin dia jarang kita lihat. Tetapi beliau adalah orang yang mempunyai banyak pengalaman tentang Komputer.',
            instagram: 'https://www.instagram.com/pandemahendri?igsh=c3E3ajdwbWhtenM5'
        }
    };

    profileButtons.forEach(button => {
        button.addEventListener("click", () => {
            const teacherCard = button.closest(".teacher-card");
            const teacherName = teacherCard.querySelector("h3").textContent;

            if (teachers[teacherName]) {
                const { imgSrc, nip, description, instagram } = teachers[teacherName];

                const newWindow = window.open("", "_blank");
                newWindow.document.write(`
                    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil ${teacherName}</title>
    <link rel="stylesheet" href="css/footerstyle.css" />
    <link rel="stylesheet" href="css/gurustyle.css" />
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

    <!-- Profil Guru -->
    <section class="profile-details">
        <div class="profile-container">
            <img src="${imgSrc}" alt="Foto Guru">
            <div class="profile-desc">
                <h3>${teacherName}</h3>
                <p>NIP: ${nip}</p>
                <p>${description}</p>
                <hr></hr>
                <a href="${instagram}"><img src="img/icon/ig-instagram.png"></a>
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
        });
    });
});
