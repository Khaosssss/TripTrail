---

# 🌊 TravelTide – A Seamless Travel Booking Experience

Welcome to **TravelTide**, a comprehensive travel booking system built to simplify the way users browse, select, and reserve travel packages. Whether it’s a weekend getaway or a full vacation plan, TravelTide offers a smooth and intuitive interface for exploring and booking trips, complete with invoice generation.

---

## 📌 About the Project

TravelTide is a dynamic travel agency platform that allows users to:

* Explore a variety of travel packages.
* Securely book tours by submitting essential traveler information.
* Instantly receive a summary invoice with complete booking details.

---

## ✨ Key Features

### 🧳 1. Tour Package Listing

* Showcases a curated list of travel packages.
* Each package includes:

  * Title & overview
  * Price per person
  * Available dates
  * Descriptive images
* Packages are dynamically fetched from a **MongoDB** database.

### 📝 2. Booking Functionality

* Each package includes a “Book Now” option.
* A detailed form allows users to input:

  * Full name
  * Email address
  * Contact number
  * Number of travelers
  * Any special requests
* Booking information is saved to the backend database for future reference.

### 🧾 3. Invoice Creation

* After booking, users receive an invoice that includes:

  * Traveler’s name, contact, and email
  * Package title, pricing details, and number of travelers
  * Total amount calculated based on the group size

---

## 🧑‍💻 Tech Stack

### 🔹 Frontend:

* React.js
* TailwindCSS

### 🔹 Backend:

* Node.js
* Express.js

### 🔹 Database:

* MongoDB

---

## ⚙️ Getting Started

### 🔧 Prerequisites

Before you begin, ensure the following are installed:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

---

### 🖥 Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Khaosssss/TravelTide.git
   ```
2. Navigate into the frontend directory:

   ```bash
   cd TravelTide/frontend
   ```
3. Install frontend dependencies:

   ```bash
   npm install
   ```
4. Launch the development server:

   ```bash
   npm run dev
   ```

---

### 🖧 Backend Setup

1. Move to the backend directory:

   ```bash
   cd TravelTide/backend
   ```
2. Install backend dependencies:

   ```bash
   npm install
   ```
3. Start the backend server:

   ```bash
   npm start
   ```

🔁 Ensure MongoDB is running locally or connected to a cloud instance (e.g., MongoDB Atlas).

---

## 🧭 How to Use

### 🔍 Browse Packages

* Visit the home page to explore available travel packages.
* Each listing provides visual and descriptive details.

### 🧾 Book a Trip

* Select a package and click "Book Now."
* Fill in traveler details and submit the form to confirm your booking.

### 🧮 View Invoice

* Post-booking, a simple invoice is generated showing customer details and total price.

---

## 🤝 Contributions Welcome

Want to improve or extend the project?

1. Fork this repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Push to your forked repo.
5. Open a pull request with a detailed description.

We appreciate community contributions!

---

## 📄 License

This project is released under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

---

## 📬 Contact

Have questions or suggestions? Reach out through the repository issues or contact the maintainers directly.

