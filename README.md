# FlightScan(Google Flights Clone): Django + React

This is a full-stack project that creates a responsive flight search application similar to Google Flights. The project uses:

- **Django** (with Django REST Framework) as a backend that calls the [Sky-Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper) and exposes a REST endpoint.
- **React** as the front end to display flight search results and provide a responsive UI.

## Project Structure

## Setup Instructions

### Backend (Django)
1. **Navigate to the backend folder:**
    ```bash
    cd backend
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows: env\Scripts\activate
    ```

3. **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**  
   Create a `.env` file in the `backend` folder (or set environment variables in your system) with:
    ```
    RAPIDAPI_KEY=your_rapidapi_key_here
    ```

5. **Run migrations and start the server:**
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

   The backend API will be available at [http://localhost:8000/api/flight-search/](http://localhost:8000/api/flight-search/)

### Frontend (React)
1. **Navigate to the frontend folder:**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the React development server:**
    ```bash
    npm start
    ```

   The front end will run at [http://localhost:3000](http://localhost:3000).

