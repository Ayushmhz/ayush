export function projectsSectionFunctionality() {
  const projects = [
    { image: 'Designs/design1.jpg', title: 'Esports Banner_1' },
    { image: 'Designs/design2.jpg', title: 'YouTube Thumbnail' },
    { image: 'Designs/design3.jpg', title: 'Esports Banner_2' },
    { image: 'Designs/design4.jpg', title: 'Esports Banner_3' },
    { image: 'Designs/design5.jpg', title: 'Social Media Poster Design' },
    { image: 'Designs/design6.jpg', title: 'Social Media Poster Design_2' },
    { image: 'Designs/design7.jpg', title: 'Additional' }
  ];

  let projectHTML = '';

  // Generate HTML for each image and title
  projects.forEach(project => {
    projectHTML += `
      <div class="project-card">
          <div class="container image-only">
            <h3 class="project-title">${project.title}</h3> <!-- Move title above the image -->
            <img class="project-image" src="images and icons/${project.image}" alt="${project.title}" />
          </div>
        </div>
    `;
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML;
}