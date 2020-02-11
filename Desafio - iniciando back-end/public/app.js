const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')
const modal = document.querySelector(".modal")
const iconMax = modal.querySelector(".maximize-modal")

for (let course of courses) {
    course.addEventListener('click', function() {
        const courseId = course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
})

// const modal = document.querySelector(".modal")
// const iconMax = modal.querySelector(".maximize-modal")

function maximizar(param) {
    iconMax.addEventListener('click', function() {
        const modalMaximize = modal.classList.contains('maximize')
        if (!modalMaximize) {
            param.classList.add('maximize')
        } else {
            param.classList.remove('maximize')
        }
    })
}
maximizar(modal)