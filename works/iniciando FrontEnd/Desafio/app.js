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
let maximize = modal.classList.contains('maximize')
let maxModal = modal.querySelector(".maximize-modal").addEventListener("click", function() {
    if(maximize === false) {
        modal.classList.add('maximize')
    }
})
console.log(maximize)