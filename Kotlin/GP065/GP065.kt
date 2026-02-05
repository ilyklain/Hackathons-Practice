/*
  -------------------------------------
  ‣ Google Photos Hackathon Challenge
  -------------------------------------

  Developed and Solved by: Gustavo Jaspe AKA Strawyh
  Date: 04/02/2026

  » Context:
  Google Photos organizes trillions of images. A primary way users 
  browse their library is by "Year". The system must process metadata 
  of thousands of photos and group them efficiently into yearly 
  folders.

  » Problem:
  Write a Kotlin function that groups photos by year.

  The system should:
    - Receive: List of `Photo` objects (filename, dateISO string).
    - Return: A Map where keys are Year (String) and values are 
      lists of filenames.

  » Objective:
  Practice data class usage and group-by logic in Kotlin.
*/

data class Photo(val filename: String, val date: String) // Date format: "YYYY-MM-DD"

fun groupPhotosByYear(photos: List<Photo>): Map<String, List<String>> {
    return photos.groupBy(
        keySelector = { it.date.split("-")[0] },
        valueTransform = { it.filename }
    )
}

fun main() {
    val myPhotos = listOf(
        Photo("vacation.jpg", "2023-07-15"),
        Photo("wedding.png", "2022-05-20"),
        Photo("birthday.jpg", "2023-12-01"),
        Photo("pet.jpg", "2021-01-10")
    )

    println("--- Google Photos Yearly Organizer ---")
    val grouped = groupPhotosByYear(myPhotos)
    
    grouped.forEach { (year, list) ->
        println("Year $year: ${list.joinToString(", ")}")
    }
}
