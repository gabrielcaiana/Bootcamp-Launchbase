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
})


let maximize = modal.classList.contains('maximize')

let maxModal = modal.querySelector(".maximize-modal").addEventListener("click", function() {
    if (maximize === false) {
        modal.classList.add('maximize')

    }
})

// if (modal.classList.contains('maximize')) {
//     modal.querySelector(".maximize-modal").addEventListener("click", function() {
//         modal.classList.remove('maximize')
//     })
// }