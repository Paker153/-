function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');

    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('uploaded-image');
        imageContainer.appendChild(imageElement);
    }
    reader.readAsDataURL(file);
}
