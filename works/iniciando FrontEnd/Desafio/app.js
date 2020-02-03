const modalOverlay = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')

for (let course of courses) {
    course.addEventListener('click', function() {
        const courseId = course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
    })
}

const closeModal = document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})

const modal = document.querySelector(".modal")
const iconMax = modal.querySelector(".maximize-modal")
let maxModal = modal.querySelector(".maximize-modal").addEventListener("click", function() {
    modal.classList.contains('maximize')
    modal.classList.add("maximize")
    modal.classList.remove("maximize")
})