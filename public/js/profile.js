const newFormHandler = async (event) => {
  event.preventDefault();

  const musclegroup = document.querySelector('#plan-group').value.trim();
  const plan_weeks = document.querySelector('#plan-weeks').value.trim();
  const exercise = document.querySelector('#plan-exercises').value.trim();


  if (musclegroup && plan_weeks && exercise) {
    const response = await fetch(`/api/plans`, {
      method: 'POST',
      body: JSON.stringify({ musclegroup, plan_weeks, exercise }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add plan');
    }
  }
};

/* const musclegroup = document.querySelector('#muscle-group').value.trim();
  const week = document.querySelector('#workout-week').value.trim();
  const workout1 = document.querySelector('#workout-exercise1').value.trim();
  const workout1current = document.querySelector('#workout-exercise1current').value.trim();
  const workout2 = document.querySelector('#workout-exercise2').value.trim();
  const workout2current = document.querySelector('#workout-exercise2current').value.trim();
  const workout3 = document.querySelector('#workout-exercise3').value.trim();
  const workout3current = document.querySelector('#workout-exercise3current').value.trim();
  const workout4 = document.querySelector('#workout-exercise4').value.trim();
  const workout4current = document.querySelector('#workout-exercise4current').value.trim();
  const workout5 = document.querySelector('#workout-exercise5').value.trim();
  const workout5current = document.querySelector('#workout-exercise5current').value.trim();
 */
  /* if (musclegroup && week && workout1 && workout1current) {
    const response = await fetch(`/api/workouts`, {
      method: 'POST',
      body: JSON.stringify({ musclegroup, week, workout1, workout1current, workout2, workout2current, workout3, workout3current, workout4, workout4current, workout5, workout5current }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update log');
    }
  }
;

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/plans/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete plan');
    }
  }
}; */

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.new-workoutlog-form')
  .addEventListener('submit', newFormHandler);

/* document
  .querySelector('.workout-list')
  .addEventListener('click', delButtonHandler); */

  document
  .querySelector('.plan-list')
  .addEventListener('click', delButtonHandler); 