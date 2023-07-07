const project = document.querySelectorAll('.project');

project.forEach((proj) => {
   proj.addEventListener('mouseover', function () {
      this.classList.add('show');
   });
});
project.forEach((proj) => {
   proj.addEventListener('mouseout', function () {
      this.classList.remove('show');
   });
});
