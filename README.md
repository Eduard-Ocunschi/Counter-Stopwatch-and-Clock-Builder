
---

# Counter, Stopwatch, or Clock Builder

Welcome to the **Counter, Stopwatch, or Clock Builder** application. Designed and developed by me, this project serves as a practical exercise in **Object-Oriented Programming (OOP)** using JavaScript. The app allows users to switch seamlessly between three core tools: a **Counter**, a **Stopwatch**, and a **Clock**, each designed for specific time-related tasks.

## Project Motivation

This project was created to solidify my understanding of OOP concepts through a practical application. By integrating a counter, stopwatch, and clock, I was able to apply key OOP principles while developing a functional, user-friendly tool.

## Features

The application offers three key modes, accessible via intuitive controls:

1. **Counter**: A basic tool to increment or decrement values.
2. **Stopwatch**: A time-tracking tool that supports start, stop, and reset functionality.
3. **Clock**: A real-time clock that displays the current time, updating automatically every second.

### Detailed Breakdown:

#### 1. Counter
- **Increment**: Increases the counter value by 1.
- **Decrement**: Decreases the counter value by 1 (no negative values).
- **Reset**: Resets the counter to 0.

#### 2. Stopwatch
- **Start**: Begins tracking elapsed time, with live updates.
- **Stop**: Pauses the time-tracking.
- **Reset**: Resets the elapsed time to "00:00:00:00."

#### 3. Clock
- Displays the current time in hours, minutes, and seconds, updating every second.

## Object-Oriented Design

This project emphasizes the core principles of **Object-Oriented Programming**:

1. **Encapsulation**: Each component (Counter, Stopwatch, Clock) maintains its own state and methods, ensuring internal details are organized and hidden.
2. **Abstraction**: The underlying complexity of timekeeping and counting is abstracted, presenting users with simple interfaces while managing intricate logic behind the scenes.
3. **Inheritance**: A shared base class (`BaseComponent`) handles common features such as button creation and display updates, reducing redundancy and improving code efficiency.
4. **Polymorphism**: While each tool behaves differently, they all adhere to a unified structure, making the application easier to extend and maintain.

## Conclusion

The **Counter, Stopwatch, or Clock Builder** is both a functional tool and a demonstration of core OOP principles, emphasizing modular and reusable code design.

## License

This project is open-source and available under the MIT License. For more details, refer to the [LICENSE](LICENSE) file.

## Contributing

Contributions are welcome! This is a beginner-friendly project, so feel free to submit issues or pull requests with any suggestions or improvements.

---
