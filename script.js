document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Add a click event listener to each navigation link
    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        // Prevent the default click behavior
        event.preventDefault();
  
        // Get the target section ID from the clicked link's href attribute
        const targetSectionId = event.target.getAttribute('href');
  
        // Get the target section element
        const targetSection = document.querySelector(targetSectionId);
  
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Get all PDF links
    const pdfLinks = document.querySelectorAll('.pdf-link');
  
    // Get the PDF iframe element
    const pdfIframe = document.getElementById('pdf-iframe');
  
    // Add a click event listener to each PDF link
    pdfLinks.forEach((pdfLink) => {
      pdfLink.addEventListener('click', (event) => {
        // Prevent the default click behavior
        event.preventDefault();
        event.stopPropagation();
  
        // Get the target PDF file from the clicked link's data-file attribute
        const targetPdfFile = event.currentTarget.getAttribute('data-file');
  
        // Set the iframe src to the target PDF file
        pdfIframe.setAttribute('src', targetPdfFile);
  
        // Return false to ensure the event doesn't propagate further
        return false;
      });
    });
  });
  