/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});










// DELETE LATER




let cropper;

// Preview the image after upload
function previewImage(event) {
    const input = event.target;
    const container = document.getElementById('crop-container');
    const image = document.getElementById('crop-image');

    const file = input.files[0];
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
        alert('Please upload a JPEG or PNG image.');
        input.value = ''; // Clear the file input
        return;
    }

    // Check file size (under 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        alert('File size should be less than 5MB.');
        input.value = ''; // Clear the file input
        return;
    }

    // Show the crop container and load the image
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            container.style.display = 'block';

            // Destroy previous cropper instance if exists
            if (cropper) {
                cropper.destroy();
            }

            // Initialize Cropper.js
            cropper = new Cropper(image, {
                aspectRatio: 1, // Maintain a square crop
                viewMode: 1,    // Restrict the crop box to fit within the canvas
                preview: '.img-preview', // Optional: Add a preview box
            });
        };
        reader.readAsDataURL(file);
    }
}


    // Crop the image and store it as base64
    function cropImage() {
        if (cropper) {
            const canvas = cropper.getCroppedCanvas({
                width: 200, // Desired width of the output image
                height: 200, // Desired height of the output image
            });

            const croppedImageData = canvas.toDataURL('image/png');
            document.getElementById('croppedImageData').value = croppedImageData;

            // Optionally, display the cropped image preview
            document.getElementById('crop-container').innerHTML = `
                <img src="${croppedImageData}" alt="Cropped Image" style="max-width: 100%;">
            `;
        }
    }
