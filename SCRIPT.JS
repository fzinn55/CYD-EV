* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0d1117;
    color: #e6edf3;
    line-height: 1.6;
}

header {
    background-color: #161b22;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #2f81f7;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #2f81f7;
    letter-spacing: 1px;
}

.logo span {
    color: #3fb950;
}

nav a {
    color: #e6edf3;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: #2f81f7;
}

.hero {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(180deg, #161b22 0%, #0d1117 100%);
}

.hero h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
    color: #ffffff;
}

.hero p {
    font-size: 1.2rem;
    color: #8b949e;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin: 40px 0 20px 0;
    color: #ffffff;
}

.about {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #161b22;
    border-radius: 8px;
    border: 1px solid #30363d;
}

.about p {
    margin-bottom: 15px;
    color: #c9d1d9;
}

.grid-cars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 20px 8% 60px 8%;
    max-width: 1200px;
    margin: 0 auto;
}

.car-card {
    background-color: #161b22;
    border: 1px solid #30363d;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s, border-color 0.3s;
}

.car-card:hover {
    transform: translateY(-5px);
    border-color: #2f81f7;
}

.car-card svg {
    width: 100%;
    height: 180px;
    background-color: #21262d;
}

.car-info {
    padding: 20px;
}

.car-title {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #ffffff;
}

.car-specs {
    font-size: 0.9rem;
    color: #8b949e;
    margin-bottom: 15px;
}

.car-price {
    font-size: 1.3rem;
    font-weight: bold;
    color: #3fb950;
    margin-bottom: 15px;
}

.btn-buy {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #238636;
    color: #ffffff;
    text-align: center;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-buy:hover {
    background-color: #2ea043;
}

/* Modal Estilos */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.modal-content {
    background-color: #161b22;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #30363d;
    max-width: 400px;
    width: 90%;
    text-align: center;
}

.modal-content h3 {
    margin-bottom: 15px;
    color: #2f81f7;
}

.modal-content p {
    margin-bottom: 20px;
    color: #8b949e;
}

.close-btn {
    background-color: #da3633;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

footer {
    text-align: center;
    padding: 30px;
    background-color: #161b22;
    border-top: 1px solid #30363d;
    color: #8b949e;
    font-size: 0.9rem;
}
