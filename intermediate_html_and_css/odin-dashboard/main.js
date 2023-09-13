let projects = document.getElementById('projects')
let announcements = document.getElementById('announcements')
let trending = document.getElementById('trending')

for (let i=0; i<13; i++){
    let newCard = document.createElement('div');
    let cardCode = `<div class="shadow-md w-96 h-48 rounded-lg bg-white p-4 border-l-amber-400 border-l-8 relative">
    <p class="font-semibold">Title</p>
    <p class='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus dignissimos autem neque? Magnam, maxime!</p>
    <div class="flex gap-4 absolute right-4 bottom-4">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-plus-outline</title><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-plus-outline</title><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>source-fork</title><path d="M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z" /></svg>
    </div>
</div>`;
    newCard.innerHTML = cardCode;
    projects.appendChild(newCard);
}

for (let i=0; i<3; i++){
    let newAnnouncement = document.createElement('div');
    let announcementCode = `<div class="border-b-custom-grey border-b-2 pb-4 mb-4">
    <p class="font-semibold text-sm">Title</p>
    <p class="text-xs text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis dolorum aliquid qui quibusdam quam?</p>
</div>`;
    newAnnouncement.innerHTML = announcementCode;
    announcements.appendChild(newAnnouncement);
}

for (let i=1; i<=4; i++){
    let newTrending = document.createElement('div');
    let trendingCode = `<div class="flex gap-3 items-center pb-4">
    <img class="h-16" src="./assets/${i}.png" alt="user avatar">
    <div><p>@user${i}name</p><p class="text-slate-500">user ${i} bio</p></div>
</div>`;
    newTrending.innerHTML = trendingCode;
    trending.appendChild(newTrending);
}