SELECT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers RIGHT JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY cohort, teacher
ORDER BY teacher;
