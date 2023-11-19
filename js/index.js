const valid_name = localStorage.getItem('register_name')
const valid_email = localStorage.getItem('register_email')
const valid_password = localStorage.getItem('register_password')

const login_email = localStorage.getItem('login_email')
const login_password = localStorage.getItem('login_password')

const user_login = document.getElementById('user-login')
const logout_button = document.getElementById('logout-btn')
const delete_button = document.getElementById('delete-btn')

window.onload = function () {
    if (login_email, login_password === null) {
        window.location = 'login.html'
        return false
    } else {
        logout_button.classList.remove('hidden')
        delete_button.classList.remove('hidden')
        user_login.innerHTML =
            `
        <center class="font-sans text-xs font-bold mt-5">
        <span class="text-blue-700 text-md font-poppins px-1 py-0.5 rounded-md inline-block mb-3">HESAB MƏLUMATLARI</span><br><br>
        <span class="text-gray-700 text-md font-poppins px-1 py-0.5 rounded-md inline-block mb-3">Adınız : <span class="text-green-400">${valid_name}</span></span><br>
        <span class="text-yellow-700 text-md font-poppins px-1 py-0.5 rounded-md inline-block mb-3">E-mail : <span class="text-green-400">${valid_email}</span></span><br>
        <span class="text-red-700 text-md font-poppins px-1 py-0.5 rounded-md inline-block mb-3">Şifrə : <span class="text-green-400">${valid_password}</span></span><br>
        </center>
        `
    }
}

logout_button.addEventListener('click', function () {
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_password')
    window.location = 'login.html'
})

delete_button.addEventListener('click', function () {
    localStorage.removeItem('register_name')
    localStorage.removeItem('register_email')
    localStorage.removeItem('register_password')
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_password')
    window.location = 'register.html'
})