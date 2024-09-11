 function showDepartment(departmentId) {
            const departments = document.querySelectorAll('.department-content');
            departments.forEach(dep => {
                if (dep.id === departmentId) {
                    dep.style.display = 'block';
                } else {
                    dep.style.display = 'none';
                }
            });
        }

        function showSubjects(yearId) {
            const subjects = document.querySelectorAll('.subjects');
            subjects.forEach(subject => {
                if (subject.id === `subjects-${yearId}`) {
                    subject.style.display = 'block';
                } else {
                    subject.style.display = 'none';
                }
            });
        }

        function showDetails(subjectId) {
            const details = document.getElementById(subjectId);
            if (details.style.display === 'none') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        }

        function downloadFile(fileName) {
            const link = document.createElement('a');
            link.href = fileName;
            link.download = fileName;
            link.click();
        }

        function toggleMenu() {
            const menuItems = document.querySelector('.menu-items');
            menuItems.classList.toggle('active');
        }

        function shareOnWhatsApp() {
            const text = encodeURIComponent("Check out this amazing Free Study Material app!");
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        }

        function shareByEmail() {
            const subject = encodeURIComponent("Check out this Free Study Material app!");
            const body = encodeURIComponent("I found this Free Study Material app that might be useful for you. Check it out!");
            window.location.href = `mailto:?subject=${subject}&body=${body}`;
        }