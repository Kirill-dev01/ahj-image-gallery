import './css/style.css';
import ImageGallery from './js/ImageGallery';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.app-container');
    new ImageGallery(container);
});