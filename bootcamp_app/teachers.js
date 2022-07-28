const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect();

process.argv;

pool.query(`
  SELECT cohorts.name AS cohort, teachers.name AS teacher 
  FROM teachers RIGHT JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '${process.argv[2]}'
  GROUP BY cohort, teacher
  ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});

