const btns = document.querySelectorAll('.btn-page')
const paginationWrapper = document.querySelector('.pagination-wrapper')
const bigDotContainer = document.querySelector('.big-dot-container')
const littleDot = document.querySelector('.little-dot')

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', btnClick)
}

function btnClick() {
  if (this.classList.contains('btn-page--prev')) {
    paginationWrapper.classList.add('transition-prev')
  } else {
    paginationWrapper.classList.add('transition-next')
  }

  const timeout = setTimeout(cleanClasses, 500)
}

function cleanClasses() {
  if (paginationWrapper.classList.contains('transition-next')) {
    paginationWrapper.classList.remove('transition-next')
  } else if (paginationWrapper.classList.contains('transition-prev')) {
    paginationWrapper.classList.remove('transition-prev')
  }
}
