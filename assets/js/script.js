const students = [
    {
        name: 'Alexis',
        link: './views/alexis/index.html',
    },
    {
        name: 'Augustin',
        link: './views/augustin/index.html',
    },
    {
        name: 'Clovis',
        link: './views/Clovis/index.html',
    },
    {
        name: 'Sybille',
        link: './views/darkSibyll/index.html',
    },
    {
        name: 'Enio',
        link: './views/enio-aiello/index.html',
    },
    {
        name: 'Houdeyfa',
        link: './views/houdeyfa/index.html',
    },
    {
        name: 'Jules',
        link: './views/jules/index.html',
    },
    {
        name: 'Nathan',
        link: './views/nathan-gva/index.html',
    },
    {
        name: 'Raphaël',
        link: './views/raphael/theBestCoder.html',
    },
    {
        name: 'Thibault',
        link: './views/thibault/index.html',
    },
    {
        name: 'Thomas',
        link: './views/thomas/index.html',
    },
    {
        name: 'Théo',
        link: './views/theo.html',
    }
];
const promptRegister = localStorage.getItem('prompt-register');

document.addEventListener('DOMContentLoaded', function () {
    if (promptRegister === null) {
        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    }

    const studentList = document.querySelector('#cards');
    students.forEach(student => {
        studentList.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <a href="${student.link}" class="btn btn-primary">Voir la carte</a>
                </div>
            </div>
        </div>`;
    });
});