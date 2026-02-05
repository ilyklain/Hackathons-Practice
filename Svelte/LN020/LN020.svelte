<script>
  /*
    -------------------------------------
    ‣ Linear Hackathon Challenge
    -------------------------------------

    Developed and Solved by: Gustavo Jaspe AKA Strawyh
    Date: 04/02/2026

    » Context:
    Linear is famous for its high-speed, keyboard-driven issue tracking. 
    The "Kanban Board" requires efficient status transitions without 
    reloading the entire page.

    » Problem:
    Create a Svelte component that handles task status updates.

    The system should:
      - Display tasks grouped by status (Todo, In Progress, Done).
      - Provide a way to "Move Fast" a task to the next status.
      - Automatically update the task counts for each column.

    » Objective:
    Practice Svelte's reactive declarations ($:) and concise state updates.

    » Approach:
    - Use an array of objects for tasks.
    - Use reactive statements to calculate column counts.
    - Implement a transition function that updates the `status` enum.
  */

  let tasks = [
    { id: 1, title: 'Fix navigation bug', status: 'Todo' },
    { id: 2, title: 'Redesign login page', status: 'In Progress' },
    { id: 3, title: 'Update dependencies', status: 'Todo' },
    { id: 4, title: 'API Documentation', status: 'Done' }
  ];

  const statuses = ['Todo', 'In Progress', 'Done'];

  function moveToNext(taskId) {
    tasks = tasks.map(t => {
      if (t.id === taskId) {
        const currentIndex = statuses.indexOf(t.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        return { ...t, status: nextStatus };
      }
      return t;
    });
  }

  $: todoTasks = tasks.filter(t => t.status === 'Todo');
  $: inProgressTasks = tasks.filter(t => t.status === 'In Progress');
  $: doneTasks = tasks.filter(t => t.status === 'Done');
</script>

<div class="linear-board">
  <div class="column">
    <header>Todo <span>{todoTasks.length}</span></header>
    {#each todoTasks as task (task.id)}
      <div class="card" on:click={() => moveToNext(task.id)}>
        {task.title}
      </div>
    {/each}
  </div>

  <div class="column">
    <header>In Progress <span>{inProgressTasks.length}</span></header>
    {#each inProgressTasks as task (task.id)}
      <div class="card" on:click={() => moveToNext(task.id)}>
        {task.title}
      </div>
    {/each}
  </div>

  <div class="column">
    <header>Done <span>{doneTasks.length}</span></header>
    {#each doneTasks as task (task.id)}
      <div class="card done">
        {task.title}
      </div>
    {/each}
  </div>
</div>

<style>
  .linear-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    background: #0b0c0d;
    padding: 20px;
    color: #eee;
    font-family: 'Inter', sans-serif;
  }

  .column header {
    font-size: 0.8rem;
    font-weight: 600;
    color: #8a8d91;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
  }

  .card {
    background: #161718;
    border: 1px solid #2c2e30;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .card:hover {
    border-color: #5e6ad2;
  }

  .card.done {
    text-decoration: line-through;
    color: #555;
  }
</style>
