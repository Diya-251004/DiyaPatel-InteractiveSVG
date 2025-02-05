document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(`Clicked icon with ID: ${icon.id}`);
    });
});