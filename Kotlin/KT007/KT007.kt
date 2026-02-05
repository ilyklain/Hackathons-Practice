/*
  -------------------------------------
  ‣ Android (Google) Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Android devices manage background tasks to maximize battery life. 
  A "Task Scheduler" must decide whether to execute a task immediately 
  or defer it based on the current battery level and task priority.

  » Problem:
  Implement a Kotlin class `TaskScheduler` that filters a list of 
  pending tasks.

  Conditions for execution:
    - If Battery > 20%: Execute all High and Medium priority tasks.
    - If Battery <= 20% (Low Power Mode): Execute ONLY High priority tasks.
    - If task is "Urgent" (special flag), execute regardless of battery.

  » Example:
    Battery: 15%
    Tasks: [High, Medium, Low, Medium (Urgent)]
    Result: [High, Medium (Urgent)]

  » Objective:
  Practice conditional logic and object filtering in Kotlin using 
  its powerful collection functions.

  » Approach:
  - Define a data class for Tasks.
  - Use `filter` to apply battery and priority rules.
  - Use Kotlin's `when` or `if` expressions for clean logic.
*/

enum class Priority { HIGH, MEDIUM, LOW }

data class Task(
    val id: String,
    val priority: Priority,
    val isUrgent: Boolean = false
)

class TaskScheduler(private val batteryLevel: Int) {
    fun getExecutableTasks(tasks: List<Task>): List<Task> {
        return tasks.filter { task ->
            when {
                task.isUrgent -> true
                batteryLevel > 20 -> task.priority != Priority.LOW
                else -> task.priority == Priority.HIGH
            }
        }
    }
}

fun main() {
    val pendingTasks = listOf(
        Task("Sync-Data", Priority.LOW),
        Task("Update-System", Priority.HIGH),
        Task("Notify-User", Priority.MEDIUM),
        Task("Push-Emergency", Priority.MEDIUM, isUrgent = true)
    )

    val lowBatteryValue = 15
    val scheduler = TaskScheduler(lowBatteryValue)
    val toRun = scheduler.getExecutableTasks(pendingTasks)

    println("--- Android Battery Optimizer ---")
    println("Current Battery: $lowBatteryValue%")
    println("Tasks to execute matches: ${toRun.size}")
    
    toRun.forEach { println(" >> RUNNING: ${it.id} [${it.priority}]") }
}
