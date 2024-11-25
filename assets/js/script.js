const students = [
    {
        name: 'John Doe',
        link: './views/john-doe.html',
    },
    {
        name: 'Jane Doe',
        link: './views/jane-doe.html',
    },
    {
        name: 'John Smith',
        link: './views/john-smith.html',
    },
    {
        name: 'Jane Smith',
        link: './views/jane-smith.html',
    }
];

document.addEventListener('DOMContentLoaded', function () {

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

    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
});